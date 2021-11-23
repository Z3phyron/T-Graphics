import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Cont>
      <h3 className="heading">Sign Up</h3>

      <Wrapper>
        <Form>
          <FormControl>
            <InputField>
              <Input type="text" placeholder="First Name..." required />
            </InputField>
            <InputField>
              <Input type="text" placeholder="Last Name..." required />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <Input type="email" placeholder="Email..." required />
            </InputField>
            <InputField>
              <Input type="tel" placeholder="Phone..." required />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <Input type="password" placeholder="Password....." required />
            </InputField>
            <InputField>
              <Input
                type="password"
                placeholder="Confirm Password....."
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
            <button className="social">Google</button>
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
