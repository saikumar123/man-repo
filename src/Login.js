import React, { Component } from "react";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField";
import TextField from "@material-ui/core/TextField";
//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { connect } from "react-redux";
import { create_user } from "./action";
import Error from "./Error";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const customtheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const mapDispatchToProps = (data) => {
  console.log("login:mapDispatchToProps", data);
  return {
    user_login: (data) => {
      create_user(data);
    },
  };
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegister: "false",
      isLoading: "false",
      username: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  }

  // componentDidUpdate() {
  //   this.setState({
  //     isRegister: "false",
  //   });
  // }

  handleClick(event) {
    this.setState({ isLoading: "true" });
    //var apiBaseUrl = remote_backend_url;
    var apiBaseUrl = "http://localhost:3000/";
    var self = this;
    var payload = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    if (self.state.isRegister === "false") {
      axios
        .post(apiBaseUrl + "api/login", payload)
        .then(function (response) {
          self.setState({ isLoading: "false" });
          console.log(response);
          if (response.status === 200) {
            if (
              response.data &&
              response.data.msg === "New user. Please Signup"
            ) {
              console.log("New User");
              self.setState({
                errorMessage: "You are new here. Please Signup",
              });
              self.setState({ isRegister: "true" });
              self.setState({ email: "" });
              self.setState({ password: "" });
            } else if (
              response.data &&
              response.data.msg === "Login Successful"
            ) {
              self.props.user_login(response.data.payload);
              console.log(response.data.payload.userId);
              console.log("Login successfull");
              self.setState({ errorMessage: "" });
              self.props.history.push("/upload");
            }
          } else if (response.data.code === 204) {
            console.log("Username password do not match");
            alert("username password do not match");
          } else {
            self.setState({ errorMessage: "username does not exist" });
            console.log("Username does not exists");
            alert("Username does not exist");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .post(apiBaseUrl + "api/signup", payload)
        .then(function (response) {
          self.setState({ isLoading: "false" });
          console.log(response);
          if (response.status === 201) {
            if (
              response.data &&
              response.data.msg === "User is successfully added"
            ) {
              console.log("user added success");
              self.props.user_login(response.data.payload);
              self.props.history.push("/upload");
            }

            // commenting below for now. Needs revisit

            //   else if (
            //     response.data &&
            //     response.data.msg === "Login Successful"
            //   ) {
            //     self.props.user_login(response.data.payload);
            //     console.log(response.data.payload.userId);
            //     console.log("Login successfull");
            //     self.setState({ errorMessage: "" });
            //     self.props.history.push("/upload");
            //   }
            // } else if (response.data.code === 204) {
            //   console.log("Username password do not match");
            //   alert("username password do not match");
            // } else {
            //   self.setState({ errorMessage: "username does not exist" });
            //   console.log("Username does not exists");
            //   alert("Username does not exist");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    // const {classes, theme} = this.props;
    if (this.state.isRegister === "true") {
      return (
        <div>
          <ThemeProvider theme={customtheme}>
            <Error data={this.state.errorMessage} />
            <div>
              <div>
                <TextField
                  placeholder="Enter your Username"
                  label="Username"
                  style={muiStyle}
                  value={this.state.username}
                  onChange={(event) => {
                    event.stopPropagation();
                    this.setState({ username: event.target.value });
                  }}
                />
                <br />
              </div>
              <TextField
                placeholder="Enter your Email"
                label="email"
                style={muiStyle}
                type="email"
                value={this.state.email}
                onChange={(event) => {
                  event.stopPropagation();
                  this.setState({ email: event.target.value });
                }}
              />
              <br />
              <TextField
                type="password"
                placeholder="Enter your Password"
                style={muiStyle}
                label="Password"
                value={this.state.password}
                onChange={(event) => {
                  event.stopPropagation();
                  this.setState({ password: event.target.value });
                }}
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={style}
                onClick={(event) => this.handleClick(event)}
              >
                Submit
              </Button>
              <br />
              Already have account? &nbsp;&nbsp;
              <a href="#" onClick={(event)=> {event.preventDefault(); this.setState({'isRegister': "false"})}}>Sign In</a>
            </div>
          </ThemeProvider>
        </div>
      );
    } else {
      return (
        <div>
          <ThemeProvider theme={customtheme}>
            <Error data={this.state.errorMessage} />
            <div>
              <TextField
                placeholder="Enter your Email"
                label="email"
                style={muiStyle}
                type="email"
                value={this.state.email}
                onChange={(event) => {
                  event.stopPropagation();
                  this.setState({ email: event.target.value });
                }}
              />
              <br />
              <TextField
                type="password"
                placeholder="Enter your Password"
                style={muiStyle}
                label="Password"
                value={this.state.password}
                onChange={(event) => {
                  event.stopPropagation();
                  this.setState({ password: event.target.value });
                }}
              />
              <br />{" "}
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={style}
                  onClick={(event) => this.handleClick(event)}
                >
                  Submit
                </Button>
                <br />{" "}
              </div>
              Not a member? &nbsp;&nbsp;
              <a href="#" onClick={(event)=> {event.preventDefault(); this.setState({'isRegister': "true"})}}>Register</a>
            </div>
          </ThemeProvider>
        </div>
      );
    }
  }
}
const style = {
  margin: 30,
  backgroundColor: "green",
  minWidth: 120,
  minHeight: 30,
  color: "white",
};
const muiStyle = {
  width: 250,
};

export default connect(null, mapDispatchToProps)(Login);
