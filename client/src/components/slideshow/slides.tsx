"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import { Button as MuiButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

interface SlidesProps {
  items: {
    title: React.ReactNode;
    description: string;
    bg: any;
    more: string;
  }[];
}

function Slides({ items }: SlidesProps) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [transitionProgress, setTransitionProgress] = React.useState(0);

  const showNext = () => {
    setTransitionProgress(0);
    setActiveSlide((prevSlide) =>
      prevSlide === items.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const showPrevious = () => {
    setTransitionProgress(0);
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? items.length - 1 : prevSlide - 1,
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      showNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <React.Fragment>
      <div className="relative w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative w-full md:h-[558px] xs:h-[300px] sm:h-[400px] transition-all duration-500 ${
              activeSlide === index ? "block" : "hidden xl:block"
            }`}
            style={{
              backgroundImage: `url(${item.bg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
              <h1 className="text-[18px] sm:text-[24px] md:text-[36px] text-center leading-[18px] md:leading-[36px] sm:leading-[24px]">
                {item.title}
              </h1>
              <p className="xs:text-[12px] sm:text-[14px] md:text-[16px] text-center mt-4 w-[80%]">
                {item.description}
              </p>
              <MuiButton variant="contained" className="mt-4">
                {item.more}
              </MuiButton>
            </div>
          </div>
        ))}

        <div className="absolute top-[50%] transform -translate-y-1/2 left-0 w-full flex justify-between items-center z-20">
          <IconButton
            aria-label="previous slide"
            size="large"
            className="text-white pointer-events-auto z-30"
            onClick={showPrevious}
            style={{ visibility: "visible" }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="next slide"
            size="large"
            className="text-white pointer-events-auto z-30"
            onClick={() => {
              showNext();
            }}
            style={{ visibility: "visible" }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </div>

        <div>
          <LinearProgress
            variant="determinate"
            value={transitionProgress}
            sx={{
              height: 5,
              borderRadius: 0,
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: "#538CC6",
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 0,
                backgroundColor: "#DAAA00",
              },
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Slides;
