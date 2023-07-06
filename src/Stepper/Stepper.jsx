import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import ziraat from "../images/ziraat.jpg";
import spotify from "../images/spotify.jpg";
import netflix from "../images/netflix.jpg";
import udemy from "../images/udemy.jpg";
import "./stepper.css";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: ziraat,
  },
  {
    label: "Bird",
    imgPath: spotify,
  },
  {
    label: "Bali, Indonesia",
    imgPath: netflix,
  },
  {
    label: "Goč, Serbia",
    imgPath: udemy,
  },
];

export default function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative", top: "60px" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "255px",
                  width: "100%",
                  zIndex: -1,
                  objectFit: "cover",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Button
        size="small"
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: "white", fontSize: 40 }} />
      </Button>

      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translate(0, -50%)",
        }}
      >
        <ArrowForwardIosIcon sx={{ color: "white", fontSize: 40 }} />
      </Button>
     
    </Box>

  );
}

