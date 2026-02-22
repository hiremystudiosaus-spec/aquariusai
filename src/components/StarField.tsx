"use client";

import React, { useEffect, useRef } from "react";

export const StarField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const starCount = 150;

        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars(canvas.width, canvas.height);
        };

        class Star {
            x: number;
            y: number;
            width: number;
            speed: number;
            opacity: number;
            factor: number;
            increment: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.width = Math.random() * 2;
                this.speed = Math.random() * 0.2;
                this.opacity = Math.random();
                this.factor = 1;
                this.increment = Math.random() * 0.03;
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                context.arc(this.x, this.y, this.width, 0, Math.PI * 2);
                context.fillStyle = `rgba(255, 59, 59, ${this.opacity})`;
                context.shadowBlur = 5;
                context.shadowColor = "#ff3b3b";
                context.fill();
            }

            update(w: number, h: number) {
                this.y -= this.speed;
                if (this.y < 0) {
                    this.y = h;
                    this.x = Math.random() * w;
                }

                if (this.opacity > 1) this.factor = -1;
                else if (this.opacity <= 0) {
                    this.factor = 1;
                    this.x = Math.random() * w;
                    this.y = Math.random() * h;
                }
                this.opacity += this.increment * this.factor;
            }
        }

        const initStars = (w: number, h: number) => {
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push(new Star(w, h));
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                star.draw(ctx);
                star.update(canvas.width, canvas.height);
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
        />
    );
};
