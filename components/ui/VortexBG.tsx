"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "motion/react";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const particleCount: number = props.particleCount ?? 700;
  const particlePropCount = 9 as const;
  const particlePropsLength: number = particleCount * particlePropCount;
  const rangeY: number = props.rangeY ?? 100;
  const baseTTL = 50 as const;
  const rangeTTL = 150 as const;
  const baseSpeed: number = props.baseSpeed ?? 0.0;
  const rangeSpeed: number = props.rangeSpeed ?? 1.5;
  const baseRadius: number = props.baseRadius ?? 1;
  const rangeRadius: number = props.rangeRadius ?? 2;
  const baseHue: number = props.baseHue ?? 220;
  const rangeHue = 100 as const;
  const noiseSteps = 3 as const;
  const xOff = 0.00125 as const;
  const yOff = 0.00125 as const;
  const zOff = 0.0005 as const;
  const backgroundColor: string = props.backgroundColor ?? "#000000";

  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps: Float32Array = new Float32Array(particlePropsLength);
  const center: [number, number] = [0, 0];

  const TAU: number = 2 * Math.PI;

  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const setup = (): void => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = (): void => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x: number = rand(canvas.width);
    const y: number = center[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl: number = baseTTL + rand(rangeTTL);
    const speed: number = baseSpeed + rand(rangeSpeed);
    const radius: number = baseRadius + rand(rangeRadius);
    const hue: number = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);

    animationFrameId.current = window.requestAnimationFrame(() =>
      draw(canvas, ctx),
    );
  };

  const drawParticles = (ctx: CanvasRenderingContext2D): void => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const i2 = 1 + i;
    const i3 = 2 + i;
    const i4 = 3 + i;
    const i5 = 4 + i;
    const i6 = 5 + i;
    const i7 = 6 + i;
    const i8 = 7 + i;
    const i9 = 8 + i;

    const x: number = particleProps[i];
    const y: number = particleProps[i2];
    const n: number = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    const vx: number = lerp(particleProps[i3], Math.cos(n), 0.5);
    const vy: number = lerp(particleProps[i4], Math.sin(n), 0.5);
    let life: number = particleProps[i5];
    const ttl: number = particleProps[i6];
    const speed: number = particleProps[i7];
    const x2: number = x + vx * speed;
    const y2: number = y + vy * speed;
    const radius: number = particleProps[i8];
    const hue: number = particleProps[i9];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D,
  ): void => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement): boolean =>
    x > canvas.width || x < 0 || y > canvas.height || y < 0;

  const resize = (canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D): void => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const handleResize = (): void => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      resize(canvas, ctx);
    }
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
