
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";

export default function ContactUs() {

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleName = (e) => {setName(e.target.value)};
    const handleEmail = (e) => {setEmail(e.target.value)};
    const handleMessage = (e) => {setMessage(e.target.value)};

  function sendEmail(e) {

    console.log("sending email...")
    e.preventDefault();

    const emailParams = {
        from_name : name + " (" + email + ")",
        message : message
    }

    emailjs.send('service_63zdsmk', 'crystalclear_id', emailParams, "user_Jv3pSmG4I0JPcMzx1Iek2")
      .then((result) => {
          console.log("worked " +result.text);
          toast.success("Message successfully sent, please await response", {position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,})
      }, (error) => {
          console.log("did not work "+error.text);

          toast.error("message not sent, please try again", {position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,})
      });
  }

  return (
     
    <Container>
    <h2 className="title">Want to work with us?</h2>
    <p className="description">Your project is very important to us.</p>
    <Row>
      <Col className="text-center ml-auto mr-auto" lg="6" md="8">
        <InputGroup
          className={
            "input-lg" + (firstFocus ? " input-group-focus" : "")
          }
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons users_circle-08"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Full Name..."
            type="text"
            onFocus={() => setFirstFocus(true)}
            onBlur={() => setFirstFocus(false)}
            onChange={handleName}
          ></Input>
        </InputGroup>
        <InputGroup
          className={
            "input-lg" + (lastFocus ? " input-group-focus" : "")
          }
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons ui-1_email-85"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email..."
            type="text"
            onFocus={() => setLastFocus(true)}
            onBlur={() => setLastFocus(false)}
            onChange={handleEmail}
          ></Input>
        </InputGroup>
        <div className="textarea-container">
          <Input
            cols="80"
            name="name"
            placeholder="Type a message..."
            rows="4"
            type="textarea"
            onChange={handleMessage}
          ></Input>
        </div>
        <div className="send-button">
          <Button
            block
            className="btn-round"
            color="success"
            onClick={sendEmail}
            size="lg"
          >
            Send Message
          </Button>
        </div>
      </Col>
    </Row>
    <ToastContainer />
  </Container>
  
  );
}