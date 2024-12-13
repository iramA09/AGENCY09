// Clock.js
import React, { useEffect, useRef } from 'react';

const Clock = ({ timezone, canvasId }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const radius = canvas.height / 3;
    ctx.translate(radius, radius);
    const adjustedRadius = radius * .90;

    const drawClock = () => {
      drawFace(ctx, adjustedRadius);
      drawNumbers(ctx, adjustedRadius);
      drawTime(ctx, adjustedRadius, timezone);
    };

    const drawFace = (ctx, radius) => {
      const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
      grad.addColorStop(0, '#006dea');
      grad.addColorStop(0.5, '#006dea');
      grad.addColorStop(1, '#006dea');

      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius * 0.0;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
    };

    const drawNumbers = (ctx, radius) => {
      ctx.font = radius * 0.15 + "px Arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (let num = 1; num < 13; num++) {
        const ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
    };

    const drawTime = (ctx, radius, timezone) => {
      const getTime = (timezone) => {
        const time = new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: timezone
        });
        return time.split(":");
      };

      const time = getTime(timezone);
      const hour = time[0];
      const minute = time[1];
      const second = time[2];

      const drawHand = (ctx, pos, length, width) => {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
      };

      // hour
      let h = hour % 12;
      h = (h * Math.PI / 6) +
          (minute * Math.PI / (6 * 60)) +
          (second * Math.PI / (360 * 60));
      drawHand(ctx, h, radius * 0.5, radius * 0.07);

      // minute
      let m = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
      drawHand(ctx, m, radius * 0.8, radius * 0.07);

      // second
      let s = second * Math.PI / 30;
      drawHand(ctx, s, radius * 0.9, radius * 0.02);
    };

    const interval = setInterval(drawClock, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <canvas
      ref={canvasRef}
      id={canvasId}
      width="100"
      height="100"
      style={{display:'block'}}
    />
  );
};

export default Clock;
