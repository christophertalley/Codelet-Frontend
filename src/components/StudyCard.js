import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { api } from "../config";
import ReactCardFlip from "react-card-flip";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  Theme,
  useTheme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    flexGrow: 1,
  },
  card: {
    display: "flex",
    minWidth: 500,
    minHeight: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
  },
  //   cardText: {
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
}));

export default function StudyCard({ cards }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = cards.length;
  const classes = useStyles();

  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={classes.root}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card className={classes.card} onClick={handleClick}>
          <CardContent className={classes.cardText}>
            <Typography component="h3" variant={classes.title}>
              {cards[activeStep].term}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card} onClick={handleClick}>
          <CardContent className={classes.cardText}>
            <Typography component="h3" variant={classes.title}>
              {cards[activeStep].definition}
            </Typography>
          </CardContent>
        </Card>
      </ReactCardFlip>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
