import styled from "styled-components";
import Map from "./Map";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: white;
  display: flex;
  
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top:80px;
`;
const Right = styled.div`
  flex: 1;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 100;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top:-150px;
  @media only screen and (max-width: 768px) {
   width:200px;
  }
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 7px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  transition: 0.5s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  :focus {
    background-color: lightgreen;
    color: black;
  }
`;
const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 7px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  transition: 0.5s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  :focus {
    background-color: lightgreen;
    color: black;
  }
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: lightblue;
  font-size: 1em;
  font-weight: 500;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: 0.5s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: lightgreen;
  }
`;

const Contacts = () => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out',
    delay: 100,
    anchorPlacement: 'top-bottom',
    once: true,
  });
  const form = React.useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bi11txu",
        "template_d6fmlim",
        form.current,
        "3L0UQJah8Rpk_QGXC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(function() {
            window.location.reload();
          }, 4000);        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left data-aos="fade-down-left">
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>share your query</Title>
            {/* <a href="https://drive.google.com/file/d/1Y8q_n9BtA72rclPXYwM6rEl9ISbeNtgb/view">Click me </a> */}
            <Input placeholder="name" type="name" name="name"></Input>
            <Input placeholder="Email" type="email" name="email"></Input>
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            ></TextArea>
            <Button type="submit" >Send</Button>
            {success &&
                  
              "Wow, your message made it! Brace yourself for our timely and mind-blowing response."}
          </Form>
        </Left>
        <Right data-aos="fade-up-right">
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contacts;
