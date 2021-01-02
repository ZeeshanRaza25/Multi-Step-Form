import React from "react";
import { savedValues } from "./index";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleBack: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "60%",
      margin: "0 auto",
      padding: "4vh",
      borderStyle: "solid",
      color: 'black',
      borderColor: '#673AB7'
    },
    headings: {
      textTransform: "uppercase",
      letterSpacing: "2px",
      color: '#673AB7'
    },

    infoFields: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    fieldTitles: {
      width: "15vh",
      fontWeight: 500,
      textAlign: "left",
      textTransform: "uppercase",
    },

    fieldInfo: {
      // width: "30vh",
      overflow: "auto",
      textAlign: "left",
      marginLeft: '10px'
    },
    button: {
      backgroundColor: '#673AB7',
      width: "100px",
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
    buttonsWrapper: {
      display: "flex",
      flexDirection: "row",
      marginRight: "2vh",
      marginLeft: "2vh",
    },
  })
);

const LastStep: React.FC<props> = ({ savedValues, handleBack }) => {
  const classes = useStyles();

  console.log(savedValues[0]);

  return (
    <Grid container item spacing={1} xs={12}  className={classes.wrapper}>
      <h2 className={classes.headings}>Details</h2>
      <p className={classes.infoFields}>
        <span className={classes.fieldTitles}>Name: </span>{" "}
        <span className={classes.fieldInfo}>
          {savedValues[0].firstName} {savedValues[0].lastName}
        </span>
      </p>
      <p className={classes.infoFields}>
        <span className={classes.fieldTitles}>Email: </span>{" "}
        <span className={classes.fieldInfo}>{savedValues[0].email}</span>
      </p>
      <p className={classes.infoFields}>
        <span className={classes.fieldTitles}>Phone: </span>{" "}
        <span className={classes.fieldInfo}>{savedValues[0].phoneNumber}</span>
      </p>
      <p className={classes.infoFields}>
        <span className={classes.fieldTitles}>Occupa: </span>{" "}
        <span className={classes.fieldInfo}>{savedValues[0].occupation}</span>
      </p>
      <p className={classes.infoFields}>
        <span className={classes.fieldTitles}>City: </span>{" "}
        <span className={classes.fieldInfo}>{savedValues[0].city}</span>
      </p>
      <div className={classes.buttonsWrapper}>
        <button className={classes.button} onClick={handleBack}>
          Back
        </button>
        <button
          className={classes.button}
          onClick={() => {
            alert("Thank you for submitting");
          }}
        >
          Submit
        </button>
      </div>
    </Grid>
  );
};

export default LastStep;