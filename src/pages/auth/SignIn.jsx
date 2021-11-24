import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";

import { useToasts } from "react-toast-notifications";

const SignIn = () => {
  const { addToast } = useToasts();

  const { signInWithGoogle, login, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (currentUser?.uid) return <Navigate to="/" />;
  return (
    <Cont>
      <h3 className="heading">Sign In</h3>

      <Wrapper>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            // your login logic here
            // setIsSubmitting(true);
            login(email, password)
              .then((res) => {
                if (res.user.email) {
                  addToast("Welcome " + res.user.email, {
                    appearance: "success",
                  });
                }
              })
              .catch((error) => {
                console.log(error.message);
                if (
                  error.message === "Firebase: Error (auth/wrong-password)."
                ) {
                  addToast("Invalid Password", { appearance: "error" });
                } else if (
                  error.message === "Firebase: Error (auth/user-not-found)."
                ) {
                  addToast("User not found", { appearance: "error" });
                } else {
                  addToast("Welcome Back", { appearance: "success" });
                }
              });
          }}
        >
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
          </FormControl>
          <FormControl>
            <InputField>
              <Input
                name="confirmPassword"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password....."
              />
              {/* <small>Forgot PassWord?</small> */}
            </InputField>
          </FormControl>
          <InputField>
            <button type="submit">Sign In</button>
          </InputField>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
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
                  .then((user) => {
                    if (user.user.email) {
                      addToast("Welcome " + user.user.email, {
                        appearance: "success",
                      });
                    }
                    // console.log(user);
                  })
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
  grid-template-columns: 40% 10% auto;
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
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
`;
const InputField = styled.div`
  width: 100%;

  button {
    /* margin: auto; */
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
      @media (max-width: 500px) {
        width: 100%;
      }
      /* justify-self: center; */
      margin: auto;
      /* text-align: center; */
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

export default SignIn;
