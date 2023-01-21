import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const BgImage = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
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

const Register = () => {
  return (
    <BgImage sx={{}}>
      <BoxForm>
        <Form onSubmit="submit">
        <Typography variant="h4" component="h1" mb={3}>
          Register
        </Typography>
          <TextField id="outlined-basic" label="Username" variant="filled" />
          <TextField
            sx={{ margin: "20px 0px 20px" }}
            id="outlined-basic"
            label="Email"
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="filled"
            type="password"
          />
          <Button sx={{ mt: 3 }} variant="contained">
            Create
          </Button>
        </Form>
      </BoxForm>
    </BgImage>
  );
};

export default Register;
