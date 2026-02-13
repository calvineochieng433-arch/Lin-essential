// src/loader/FullScreenLoader.jsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FullScreenLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .to(logoRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
      })
      .to(maskRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      });

  }, [onComplete]);

  return (
    <div ref={loaderRef} style={styles.container}>
      <div ref={maskRef} style={styles.mask} />
      
      <div style={styles.content}>
        <img
          ref={logoRef}
          src="/favicon_io/logo.png"
          alt="Logo"
          style={styles.logo}
        />
        <p style={styles.text}>Loading...</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    overflow: "hidden",
  },
  content: {
    textAlign: "center",
    zIndex: 2,
  },
  mask: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#000", // Change to brand color
    zIndex: 1,
  },
  logo: {
    width: "300px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.5rem",
    fontFamily: "IM Fell French Canon, serif",
    fontWeight: "500",
  },
};