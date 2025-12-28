import { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

       
        const particleCount = 80;
        const connectionDistance = 150;
        const particles = [];

        
        const colors = ["#b08e55", "#004733", "#555"];
 
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

      
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;  
                this.vy = (Math.random() - 0.5) * 0.5; 
                this.size = Math.random() * 3 + 1;  
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

              
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.8;  
                ctx.fill();
            }
        }

         
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

    
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

        
            particles.forEach((p, index) => {
                p.update();
                p.draw();

              
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = "#c5a365";  
                        ctx.globalAlpha = 1 - distance / connectionDistance;  
                        ctx.lineWidth = 0.8; 
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-[#faf7f3]">
             
            <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f3] via-white to-[#f0efe9] opacity-90"></div>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-100"
            />
        </div>
    );
}
