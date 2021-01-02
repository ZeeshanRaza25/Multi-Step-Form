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
  handleBack: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "50%",
      margin: "0 auto",
      padding: "4vh",
      borderStyle: "solid",
    },
    innerWrapper: {
      margin: "0 auto",
    },

    buttonsWrapper: {
      display: "flex",
      flexDirection: "row",
      marginRight: "2vh",
      marginLeft: "2vh",
    },

    fields: {
      marginBottom: "2vh",
    },
    buttons: {
      backgroundColor: '#673AB7',
      width: "80px",
      fontSize: "14px",
      color: "white",
      margin: "1px auto",
      marginTop: "3vh",
      height: "25px",
      letterSpacing: "2px",
      fontWeight: 400,
      border: "none",
      textTransform: "uppercase",
      cursor: "pointer",
    },
  })
);

const StepTwo: React.FC<props> = ({ savedValues, handleNext, handleBack }) => {
  const classes = useStyles();
  return (
    <Formik
    initialValues={{
        firstName: savedValues[0].firstName,
        lastName: savedValues[0].lastName,
        phoneNumber: savedValues[0].phoneNumber,
        occupation: savedValues[0].occupation,
        city: savedValues[0].city,
      }}
      validationSchema={yup.object({
        firstName: yup
          .string()
          .required("This field is required")
          .max(20, "Name should not be more than 20 characters"),
        lastName: yup
          .string()
          .required("This field is required")
          .max(20, "Name should not be more than 20 characters"),
        phoneNumber: yup
          .string()
          .required("This field is required")
          .max(11, "Phone number should not be more than 11 characters"),
        city: yup.string().required("This field is required"),
        occupation: yup.string().required("This field is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
        savedValues[1]({
          ...savedValues[0],
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          occupation: values.occupation,
          city: values.city,
        });
        handleNext();
      }}
    >
      {(formik) => (
        <Grid container spacing={1}>
        <Form className={classes.wrapper} autoComplete="off">
        <Grid item xs={12}>
          <Field
            style={{width: '90%'}}
              error={formik.errors.firstName && formik.touched.firstName}
              className={classes.fields}
              name="firstName"
              as={TextField}
              label="First Name"
              helperText={<ErrorMessage name="firstName" />}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              style={{width: '90%'}}
              error={formik.errors.lastName && formik.touched.lastName}
              className={classes.fields}
              name="lastName"
              as={TextField}
              label="Last Name"
              helperText={<ErrorMessage name="lastName" />}
            />
            </Grid>
            <Grid item xs={12}>
          <Field
            style={{width: '90%'}}
            error={formik.errors.phoneNumber && formik.touched.phoneNumber}
            className={classes.fields}
            name="phoneNumber"
            as={TextField}
            label="Phone Number"
            helperText={<ErrorMessage name="phoneNumber" />}
          />
          </Grid>
          <Grid item xs={12}>
          <Field
            style={{width: '90%'}}
            error={formik.errors.occupation && formik.touched.occupation}
            className={classes.fields}
            name="occupation"
            as={TextField}
            label="Occupation"
            helperText={<ErrorMessage name="occupation" />}
          />
          </Grid>
          <Grid item xs={12}>
          <Field
            style={{width: '90%'}}
            error={formik.errors.city && formik.touched.city}
            className={classes.fields}
            name="city"
            as={TextField}
            label="City"
            helperText={<ErrorMessage name="city" />}
          />
          </Grid>
          <div className={classes.buttonsWrapper}>
            <button
              className={classes.buttons}
              type="button"
              onClick={handleBack}
            >
              Back
            </button>
            <button className={classes.buttons} type="submit">
              Next
            </button>
          </div>
        </Form>
        </Grid>
      )}
    </Formik>
  );
};

export default StepTwo;