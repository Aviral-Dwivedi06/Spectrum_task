import React, { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create stars
    const colors = ["#ffffff", "#ffd1dc", "#a0e9ff", "#fbc2eb", "#d4a5ff", "#ffe066"];
    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 1.5 + 0.8, // 🚀 faster speed
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = star.color;
        ctx.fill();

        // Move the star
        star.y += star.speed;

        // Reset when star goes off-screen
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
          star.color = colors[Math.floor(Math.random() * colors.length)];
        }
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default StarsBackground;
