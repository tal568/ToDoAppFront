import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.withCredentials = true;

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
type signInFormData = {
  username: string;
  email: string;
  password1: string;
  password2: string;

};

export default function SignUp() {
  const validationSchema: Yup.ObjectSchema<signInFormData> = Yup.object()
    .shape({


      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      username: Yup.string()
        .required("Username is required")
        .max(30, "Must be 30 characters or less")
        .min(3, "Must be 3 characters or more").required("Username is required"),
      password1: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      password2: Yup.string().oneOf([Yup.ref("password1"), ""], "Passwords must match"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({

    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data: signInFormData) => {
    try {


      const req = await axios.get("http://localhost:8000/accounts/signup/")
      console.log(req)

      const res = await axios.post("http://localhost:8000/accounts/signup/", data, { headers: { "X-CSRFToken": Cookies.get("csrftoken"), "Content-Type": "application/json" } })
      console.log(res)
      reset();
    }
    catch (error) {
      console.log("Error", error)
    }

  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>


              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      label="Email Address"
                      fullWidth
                      id="email"
                      required
                      {...field}
                      autoComplete="email"
                      name="email"
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} >
                <Controller
                  control={control}
                  name="username"
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      autoComplete="username"
                      label="Username"
                      fullWidth
                      id="username"
                      autoFocus
                      {...field}
                      error={Boolean(errors.username)}
                      helperText={errors.username?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="password1"
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      {...field}
                      error={Boolean(errors.password1)}
                      helperText={errors.password1?.message}
                    />
                  )}
                />

              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="password2"
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      required
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      {...field}
                      error={Boolean(errors.password2)}
                      helperText={errors.password2?.message}
                    />

                  )}
                />

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to='/sign-in' variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}
