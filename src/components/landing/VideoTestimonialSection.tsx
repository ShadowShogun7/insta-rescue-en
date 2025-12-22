import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface VideoTestimonialProps {
  videoUrl: string;
  name: string;
  delay: number;
}

const VideoTestimonial = ({ videoUrl, name, delay }: VideoTestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotate: 1 }}
      className="relative group cursor-pointer"
      onClick={togglePlay}
    >
      {/* Neo-brutalist Card Frame */}
      <div className="bg-card border-4 border-foreground rounded-[2.5rem] p-3 shadow-[12px_12px_0px_0px_hsl(var(--foreground))] group-hover:shadow-[16px_16px_0px_0px_hsl(var(--foreground))] transition-all overflow-hidden">
        <div className="aspect-[9/16] bg-muted rounded-[2rem] overflow-hidden relative">
          {/* Video */}
          <video 
            ref={videoRef}
            src={videoUrl} 
            className="w-full h-full object-cover" 
            loop 
            playsInline
            onEnded={() => setIsPlaying(false)}
          />
          {/* Play/Pause Icon Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity pointer-events-none ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
            <svg width="80" height="80" viewBox="0 0 100 100">
              <path d="M30,20 L80,50 L30,80 Z" fill="hsl(var(--primary))" stroke="hsl(var(--foreground))" strokeWidth="4" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="pt-4 pb-2 px-4 text-center">
          <h4 className="font-black text-lg text-foreground">{name}</h4>
          <div className="flex justify-center mt-1">
            {/* Doodle Stars */}
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" className="text-primary">
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoTestimonialSection = () => {
  const testimonials = [
    { name: "用戶成功回饋 A", url: "/videos/testimonial-1.mp4" },
    { name: "用戶成功回饋 B", url: "/videos/testimonial-1.mp4" },
    { name: "用戶成功回饋 C", url: "/videos/testimonial-1.mp4" },
    { name: "用戶成功回饋 D", url: "/videos/testimonial-1.mp4" },
    { name: "用戶成功回饋 E", url: "/videos/testimonial-1.mp4" },
    { name: "用戶成功回饋 F", url: "/videos/testimonial-1.mp4" },
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Section Title */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative">
        <h2 className="text-4xl md:text-6xl font-black text-center text-foreground relative z-10">
          聽聽他們怎麼說
          <motion.svg 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-64 h-4 text-primary" 
            viewBox="0 0 200 20"
          >
            <path d="M0,10 Q50,0 100,10 T200,10" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
          </motion.svg>
        </h2>
      </div>

      {/* 3x2 Grid on desktop, Scrollable on mobile */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
        {testimonials.map((t, i) => (
          <VideoTestimonial key={i} name={t.name} videoUrl={t.url} delay={i * 0.1} />
        ))}
      </div>
      
      {/* Floating Background Doodles */}
      <div className="absolute top-40 left-10 opacity-20 rotate-12">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M20,50 Q50,10 80,50 T50,90" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" strokeDasharray="5 5" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 -rotate-12">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" strokeDasharray="8 4" />
        </svg>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
