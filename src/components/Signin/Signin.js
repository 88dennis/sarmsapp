import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import './Signin.css'
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormContent,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
import { FaArrowCircleLeft } from "react-icons/fa";
const Signin = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    showValMessage: false,
  });

  const [isShowPassword, setIsShowPassword] = useState({
    showPass: false,
  });


  const history = useHistory();


  console.log(isShowPassword.showPass);
  const showPassword = () => {
    console.log("hello");
    setIsShowPassword({
      ...isShowPassword,
      showPass: !isShowPassword.showPass,
    });
  };
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: state.username,
      password: state.password,
    };



  const routeChange = (route) =>{ 
    let path = route; 
    history.replace(path);
    console.log(history)
    }


    if (state.username === "myuserid" && state.password === "mypswrd") {
        localStorage.setItem("sarmscode", "mypswrd");
        //window.open('target.html')
        //window.location.href = "target.html";
        routeChange(`/`);
    } else {
        alert("Error Password or Username")
    }

    console.log(newUser);

    setState({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            {" "}
            <FaArrowCircleLeft />
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>

              <FormLabel htmlFor="username">Username</FormLabel>
              <FormInput
                name="username"
                value={state.username}
                onChange={handleChange}
                type="text"
                required
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              {/* <FormInput
                name="password"
                value={state.password}
                onChange={handleChange}
                type="password"
                required
              /> */}

              <div
                className={
                  !isShowPassword.showPass
                    ? "form_input_wrap_password form_input_wrap_dont_show_password"
                    : "form_input_wrap_password"
                }
              >
                <input
                  type="text"
                  className="form_input"
                  id="passwordSignupId"
                  placeholder="Your Password"
                  autoComplete="off"
                  value={state.password}
                  name="password"
                  onChange={handleChange}
                  required
                />
                <span onClick={showPassword} className="password_span">
                  {isShowPassword.showPass ? "| hide" : "| show"}
                </span>
              </div>
              {state.showValMessage && <div>{state.valMessage}</div>}

              <FormButton
                onClick={(e) => handleSignupFormSubmit(e)}
                type="submit"
              >
                Continue
              </FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
