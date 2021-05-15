import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { savedValues } from "./index";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleNext: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "50%",
      margin: "0 auto",
      padding: "4vh",
      borderStyle: "solid",
    },
    fields: {
      marginBottom: "2vh",
    },
    button: {
      backgroundColor: '#673AB7',
      width: "80px",
      fontSize: "14px",
      color: "white",
      margin: "0 auto",
      marginTop: "3vh",
      height: "26px",
      letterSpacing: "2px",
      fontWeight: 400,
      border: "none",
      textTransform: "uppercase",
      cursor: "pointer",
    },
  })
);

const StepOne: React.FC<props> = ({ savedValues, handleNext }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        email: savedValues[0].email,
        password: savedValues[0].password
      }}
      validationSchema={yup.object({
        email: yup
          .string()
          .email("Invalid email address")
          .required("This field is required"),
        password: yup
          .string()
          .min(6, 'Password is too short.')
          .max(20, 'Password is too long.')
          .required("This field is required"),
      })}
      onSubmit={(values) => {
        savedValues[1]({
          ...savedValues[0],
          email: values.email,
          password: values.password
        });
        handleNext();
      }}
    >
      {(formik) => {
        return (
          <Grid container spacing={3}>
            <Form className={classes.wrapper} autoComplete="off">
              <Grid item xs={12}>
                <Field
                  style={{ width: '90%' }}
                  error={formik.errors.email && formik.touched.email}
                  className={classes.fields}
                  name="email"
                  as={TextField}
                  label="Email"
                  helperText={<ErrorMessage name="email" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  style={{ width: '90%' }}
                  error={formik.errors.password && formik.touched.password}
                  className={classes.fields}
                  name="password"
                  as={TextField}
                  label="Password"
                  type="password"
                  helperText={<ErrorMessage name="password" />}
                />
              </Grid>
              <button className={classes.button} type="submit">
                Next
            </button>
            </Form>
          </Grid>
        );
      }}
    </Formik>
  );
};

export default StepOne;