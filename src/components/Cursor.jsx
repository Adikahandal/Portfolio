"use client";

import React, { useEffect, useRef } from 'react';

const ParticleTrail = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.zIndex = -1; // Ensures the canvas blends under other content

        const particles = [];

        class Particle {
            constructor(x, y, speedX, speedY, size, opacity) {
                this.x = x;
                this.y = y;
                this.speedX = speedX;
                this.speedY = speedY;
                this.size = size;
                this.opacity = opacity;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.size *= 0.97;
                this.opacity -= 0.01;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(152,231,239, ${this.opacity})`; // Silvery, translucent color
                ctx.fill();
            }
        }

        const handleParticles = (e) => {
            for (let i = 0; i < 5; i++) { 
                const speedX = (Math.random() - 0.5) * 1;
                const speedY = (Math.random() - 0.5) * 1;
                const size = Math.random() * 2 + 0.5; 
                const opacity = 1;
                particles.push(new Particle(e.clientX, e.clientY, speedX, speedY, size, opacity));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();

                if (particle.size < 0.2 || particle.opacity <= 0) {
                    particles.splice(index, 1);
                }
            });

            requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('mousemove', handleParticles);
        window.addEventListener('resize', resizeCanvas);

        animate();

        return () => {
            window.removeEventListener('mousemove', handleParticles);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default ParticleTrail;
