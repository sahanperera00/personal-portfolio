"use client";
import React from "react";
import { useEffect, useRef } from "react";

export default function CircularText({
  radius,
  fontSize,
  width,
  height,
  text,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let angle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the black dot in the middle
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = "black";

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charAngle = (i / text.length) * Math.PI * 2;
        ctx.save();
        ctx.rotate(charAngle);
        ctx.translate(0, -radius);
        ctx.fillText(char, 0, 0);
        ctx.restore();
      }

      ctx.restore();

      angle -= 0.01;
      requestAnimationFrame(animate);
    };

    animate();
  }, [radius, fontSize, width, height, text]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}
