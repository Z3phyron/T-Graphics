import React, {  useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { setDoc, doc } from "firebase/firestore";

import { db } from "../../utils/init-firebase";

const SignUp = () => {
  // const history = useHistory();
  const { signInWithGoogle, register, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


 if (currentUser?.uid) return <Navigate to="/" />;
  const onSubmit = async (e) => {
    e.preventDefault();
    register(email, password)
      .then( async(res) => {
        const uid = res.user.uid;

      

      //  console.log("res", res);
         await setDoc(doc(db, "users", uid), {
          displayName: firstName[0] + lastName[0],
          firstName: firstName,
          laststName: lastName,
          Email: email,
          phone: phone,
        });
        
      })
      .catch((error) => {
        console.log(error.message);
        // toast({
        //   description: error.message,
        //   status: "error",
        //   duration: 9000,
        //   isClosable: true,
        // });
      });
  };

  return (
    <Cont>
      <h3 className="heading">Sign Up</h3>

      <Wrapper>
        <Form onSubmit={onSubmit}>
          <FormControl>
            <InputField>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name..."
                required
              />
            </InputField>
            <InputField>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name..."
                required
              />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
              />
            </InputField>
            <InputField>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone..."
                required
              />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <Input
                name="password"
                type="password"
                autoComplete="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password....."
              />
            </InputField>
            <InputField>
              <Input
                type="password"
                placeholder="Confirm Password....."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </InputField>
          </FormControl>
          <InputField>
            <button type="submit">Sign Up</button>
          </InputField>
          <p>
            Got an account? <Link to="/signin">Sign In</Link>
          </p>
        </Form>

        <Divider>
          <div className="text">or</div>
        </Divider>

        <Social>
          <InputField>
            <button className="social">Facebook</button>
          </InputField>
          <InputField>
            <button
              className="social"
              onClick={() =>
                signInWithGoogle()
                  .then((user) => console.log(user))
                  .catch((e) => console.log(e.message))
              }
            >
              Google
            </button>
          </InputField>
          <InputField>
            <button className="social">Twitter</button>
          </InputField>
        </Social>
      </Wrapper>
    </Cont>
  );
};

const Cont = styled.div`
  padding: 5% 8%;

  .heading {
    margin-bottom: 30px;
    font-size: 30px;
    letter-spacing: 1px;
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 10% auto;
  grid-gap: 30px;
  @media (max-width: 900px) {
    grid-template-columns: 50% auto 30%;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
`;
const FormControl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const InputField = styled.div`
  width: 100%;
  button {
    width: 100%;
    padding: 17px;
    background: var(--Color-2);
    border-radius: 5px;
    outline: none;
    border: none;

    transition: 0.7s;

    &:hover {
      background: var(--Color-6);
    }

    &.social {
      width: 200px;
      justify-self: center;
      margin: 0 auto;
      text-align: center;

      @media (max-width: 500px) {
        width: 100%;
      }
    }
  }
`;
const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 15px 10px;
  font-size: 23px;
  outline: none;
  border: none;
  background: var(--Color-4);

  &:focus {
    background: var(--Color-6);
  }

  &::placeholder {
    color: var(--Color-3);
    font-size: 23px;
  }
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  grid-gap: 30px;
  /* width: 600px; */
`;

const Divider = styled.div`
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .text {
    width: 30px;
    /* margin: auto; */
    text-align: center;
  }

  &::before {
    content: "";
    width: 2px;
    height: 40%;
    position: absolute;
    top: 0;
    background: var(--Color-2);

    @media (max-width: 900px) {
      width: 40%;
      height: 2px;
      right: 0;
      top: auto;
    }
  }
  &::after {
    content: "";
    width: 2px;
    height: 40%;
    position: absolute;
    bottom: 0;
    background: var(--Color-2);
    @media (max-width: 900px) {
      width: 40%;
      height: 2px;
      left: 0;
      bottom: auto;
    }
  }
`;

export default SignUp;
