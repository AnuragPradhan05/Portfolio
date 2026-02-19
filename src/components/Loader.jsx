import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";

export default function Loader({ fadeOut }) {
  return (
    <div
      style={{
        ...styles.container,
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        style={{ width: 220 }}
      />
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    transition: "opacity 0.6s ease", // smooth fade
  },
};