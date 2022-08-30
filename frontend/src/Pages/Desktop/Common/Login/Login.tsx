import React, {useState} from "react";
import "./Login.scss";
import {Button, Grid} from "@material-ui/core";
import Login_text_field from "../../../../Components/login/Login_text_field/Login_text_field";
import {validateEmail} from "../../../../Supporting files/HelpingFunction";
import {useNavigate} from "react-router-dom";


export default function Login() {
  const [signInStatus, setSignInStatus] = useState(true);
  const [forgetPassswordStatus, setForgetPasswordStatus] = useState(false);
  const [checkEmailStatus, setCheckEmailStatus] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warnUsername, setWarnUsername] = useState(0);
  const [warnPassword, setWarnPassword] = useState(0);

  const navigate = useNavigate();

  function updateMasterState(attrName: string, value: string) {
    switch (attrName) {
      case "username":
        setUsername(value);
        setWarnUsername(value.toString().length > 0 ? 0 : 2);
        break;
      case "password":
        setPassword(value);
        setWarnPassword(value.toString().length > 0 ? 0 : 2);
        break;

      default:
        console.log(attrName, value);
        break;
    }
  }

  const validate_sign_in_form = () => {
    setWarnUsername(username.toString().length > 0 ? 0 : 2);
    setWarnPassword(password.toString().length > 0 ? 0 : 2);

    if (warnUsername == 0 && warnPassword == 0) {
      if (username == "employee" && password == "12345") {
        navigate("/home");
      } else if (username == "employer" && password == "12345") {
        navigate("/homeemployer");
      } else if (username == "broker" && password == "12345") {
        navigate("/homebroker");
      }
      console.log(
        "Validation Pass",
        warnUsername,
        warnPassword,
        username,
        password
      );
    } else {
      console.log(
        "Validation Fail",
        warnUsername,
        warnPassword,
        username,
        password
      );
    }
  };

  return (
    <Grid className="loginWrapper" container spacing={0}>
      <Grid item xs={5} className="leftcol">
        <img
          src={
            signInStatus == true
              ? "./images/login_bg.svg"
              : forgetPassswordStatus == true
              ? "./images/reset_password.svg"
              : "./images/check_email.svg"
          }
          alt="logo"
        />
      </Grid>
      <Grid item xs={7} className="formsection">
        {signInStatus == true ? (
          <div className="innerWrapper">
            <h2>Login to your account</h2>
            <p>Please login using Username &amp; Password</p>

            <form noValidate className="formFields">
              <Login_text_field
                icons="loginField userid"
                name="User"
                type="email"
                placeholder="User ID"
                attrname="username"
                value={username}
                value_update={updateMasterState}
                warn_status={warnUsername}
              />
              <Login_text_field
                icons="loginField password"
                name="User"
                type="password"
                placeholder="Password"
                attrname="password"
                value={password}
                value_update={updateMasterState}
                warn_status={warnPassword}
              />
              <p className="forgotpassword_link mb-4">
                <Button
                  color="primary"
                  onClick={() => {
                    setSignInStatus(false);
                    setForgetPasswordStatus(true);
                  }}
                >
                  Forgot password?
                </Button>
              </p>
              <div className="ctaBtn">
                <Button
                  className="submitBtn"
                  size="large"
                  onClick={() => {
                    validate_sign_in_form();
                  }}
                >
                  Sign In
                </Button>
              </div>
              
            </form>
          </div>
        ) : null}
        {forgetPassswordStatus == true ? (
          <div className="innerWrapper">
            <h2>Reset your password</h2>
            <p>
              Enter the email address associated with your account and we’ll
              send an email with instructions to reset your password.
            </p>

            <form noValidate className="formFields">
              <Login_text_field
                icons="loginField email"
                name="User"
                type="email"
                placeholder="Email Address"
                attrname="username"
                value={username}
                value_update={updateMasterState}
                warn_status={warnUsername}
              />
              <div className="ctaBtn">
              <Button
                className="submitBtn"
                size="large"
                style={{marginTop: "10px"}}
                onClick={() => {
                  setForgetPasswordStatus(false);
                  setCheckEmailStatus(true);
                }}
              >
                Send
              </Button>
              </div>
              <p>
                <Button
                  color="primary"
                  style={{marginTop: "10px"}}
                  onClick={() => {
                    setSignInStatus(true);
                    setForgetPasswordStatus(false);
                  }}
                >
                  I remember my password, take me back
                </Button>
              </p>
            </form>
          </div>
        ) : null}
        {checkEmailStatus == true ? (
          <div className="innerWrapper">
            <h2>Check your email</h2>
            <p>We have sent a password recovery instruction to your email</p>
            <h6>exa**e@do***.com</h6>
            <div className="ctaBtn">
            <Button
              className="submitBtn"
              size="large"
              style={{marginTop: "10px"}}
            >
              Open mail
            </Button>
            </div>
            
            <p>
              <Button color="primary" style={{marginTop: "10px"}}>
                Skip
              </Button>
            </p>
            <p>
              <Button
                color="primary"
                style={{marginTop: "10px"}}
                onClick={() => {
                  setCheckEmailStatus(false);
                  setForgetPasswordStatus(true);
                }}
              >
                Another email address
              </Button>
            </p>
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
}
