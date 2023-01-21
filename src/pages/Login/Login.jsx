import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const BgImage = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg");
  background-origin: border-box;
  background-size: cover;
  background-position: 10%;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const BoxForm = styled(Box)`
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  padding: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
`;

const Login = () => {
  return (
    <BgImage>
      <BoxForm>
        <Form onSubmit="submit">
        <Typography variant="h4" component="h1" mb={3}>
          Login
        </Typography>
          <TextField
            sx={{ margin: "20px 0px 20px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button sx={{ mt: 3, mb: 2 }} variant="contained">
            Submit
          </Button>
        <p>Belum punya akun? <Link to="/register">daftar sekarang</Link></p>
        </Form>
      </BoxForm>
    </BgImage>
  );
};

export default Login;
