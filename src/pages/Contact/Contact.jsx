import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Cont>
      <div className="header">
        <h3 className="heading">Contact Us</h3>
        <p className="desc">For customized designs nd prints drop a message</p>
      </div>

      <Form>
        <FormControl>
          <InputField>
            <Input type="text" placeholder="Name....." required />
          </InputField>
          <InputField>
            <Input type="email" placeholder="Email..." required />
          </InputField>
        </FormControl>
        <FormControl>
          <InputField>
            <Input type="tel" placeholder="Phone Number....." required />
          </InputField>
        </FormControl>
        <InputField>
          <TextArea placeholder="Message......" required />
        </InputField>
        <InputField>
          <button type="submit">Sign In</button>
        </InputField>
      </Form>
    </Cont>
  );
};

const Cont = styled.div`
  padding: 5% 8%;

  .header {
    margin-bottom: 30px;
  .heading {
    margin-bottom: 10px;
    font-size: 30px;
    letter-spacing: 1px;
    font-weight: 300;
  }
  }

`;

// const Wrapper = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: 40% 10% auto;
//   grid-gap: 30px;

//   @media (max-width: 900px) {
//     grid-template-columns: 50% auto 30%;
//   }
//   @media (max-width: 600px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;
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

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  padding: 15px 10px;
  font-size: 23px;
  outline: none;
  height: 30vh;
  resize: none;
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

export default Contact;


