import React, {useState, useEffect} from 'react'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import styled from 'styled-components'
import AdressForm from './AdressForm'
import PaymentForm from './PaymentForm'
import { commerce } from "../../lib/Commerce";
import { Link } from 'react-router-dom';

const steps = ["Shipping Address", "Payment Details"]

const Checkout = (props) => {
    const { cart, onCaptureCheckout, order, error } = props;
    const [activeStep, setActiveStep] = useState(0)
    // const [completed, setCompleted] = useState({});
     const [checkoutToken, setCheckoutToken] = useState(null);
     const [shippingData, setShippingData] = useState({});
    //  const classes = useStyles();




   

 

    const handleStep = (step) => () => {
      setActiveStep(step);
    };

     const nextStep = () =>
       setActiveStep((prevActiveStep) => prevActiveStep + 1);
     const backStep = () =>
       setActiveStep((prevActiveStep) => prevActiveStep - 1);


    useEffect(() => {
      if (cart.id) {
        const generateToken = async () => {
          try {
            const token = await commerce.checkout.generateToken(cart.id, {
              type: "cart",
            });
                console.log(token)
            setCheckoutToken(token);
          } catch {
            // if (activeStep !== steps.length) <Navigate to='/'/>;
          }
        };

          

        generateToken();
      }
    }, [cart]);

    const test = (data) => {
      setShippingData(data);

      nextStep();
    };

     const Form = () =>
       activeStep === 0 ? (
         <AdressForm
           checkoutToken={checkoutToken}
           nextStep={nextStep}
           setShippingData={setShippingData}
           test={test}
         />
       ) : (
         <PaymentForm
           checkoutToken={checkoutToken}
           nextStep={nextStep}
           backStep={backStep}
           shippingData={shippingData}
           onCaptureCheckout={onCaptureCheckout}
         />
       );

    let Confirmation = () =>
      order.customer ? (
        <>
          <div>
            <Typography variant="h5">
              Thank you for your purchase, {order.customer.firstname}{" "}
              {order.customer.lastname}!
            </Typography>
            <Divider  />
            <Typography variant="subtitle2">
              Order ref: {order.customer_reference}
            </Typography>
          </div>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">
            Back to home
          </Button>
        </>
      ) : (
        <div >
          <CircularProgress />
        </div>
      );

    if (error) {
      Confirmation = () => (
        <>
          <Typography variant="h5">Error: {error}</Typography>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">
            Back to home
          </Button>
        </>
      );
    }

   

    return (
      <Cont>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} activeStep={activeStep}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>

          <div>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form />
            )}
          </div>
        </Box>
      </Cont>
    );
}

const Cont = styled.div`
  padding: 8% ;
`;

export default Checkout
