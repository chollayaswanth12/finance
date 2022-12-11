import { useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({});

  const handleLoginDetails = (e, type) => {
    setLoginDetails({ ...loginDetails, [type]: e });
  };

  const handleLogin = () => {};

  const handleDisabled = () => {
    return (
      !loginDetails.userName ||
      !loginDetails.userName === "" ||
      !loginDetails.password ||
      loginDetails.password === ""
    );
  };

  return (
    <div className="d-grid placement-center h-100">
      <div className="bg-F3F5FB p-5 d-block w-30">
        <div>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            value={loginDetails.userName}
            onChange={(e) => handleLoginDetails(e.target.value, "userName")}
          />
        </div>
        <div className="pt-5">
          <TextField
            id="outlined-basic"
            type={loginDetails.showPassword ? "text" : "password"}
            value={loginDetails.password}
            onChange={(e) => handleLoginDetails(e.target.value, "password")}
            label="Password"
          />
        </div>
        <div className="pt-2">
          <FormControlLabel
            control={
              <Checkbox
                aria-label="Show Password"
                onChange={(e) =>
                  handleLoginDetails(e.target.checked, "showPassword")
                }
                checked={loginDetails.showPassword}
              />
            }
            label="Show Password"
          />
        </div>
        <div className="pt-4">
          <Button
            variant="contained"
            onClick={handleLogin}
            disabled={handleDisabled()}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
