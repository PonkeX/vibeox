
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        {/* Additional animated stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-neon-yellow animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 10 + 8}px`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-green/20 animate-gradient-shift"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Enhanced Mascot/Logo with new astronaut image */}
        <div className="mb-8 relative group">
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto relative animate-float neon-border rounded-full overflow-hidden bg-gradient-to-br from-neon-purple via-neon-blue to-neon-green p-2">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/20 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/bea56b82-0d72-48e6-af8a-e448ab2d2e0a.png" 
                alt="VibeOX Astronaut Mascot" 
                className="w-full h-full object-cover animate-subtle-bounce group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          {/* Dynamic floating elements around logo */}
          <div className="absolute -top-6 -right-6 text-3xl animate-bounce-slow">🚀</div>
          <div className="absolute -bottom-4 -left-8 text-2xl animate-pulse">⚡</div>
          <div className="absolute top-1/2 -right-12 text-xl animate-spin-slow">🌟</div>
          <div className="absolute top-1/4 -left-10 text-lg animate-float" style={{ animationDelay: '1s' }}>🛸</div>
        </div>

        {/* Enhanced Token Name with more dynamic effects */}
        <h1 className="text-6xl md:text-9xl retro-title mb-4 text-gradient neon-glow animate-text-glow">
          <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0s' }}>V</span>
          <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.1s' }}>i</span>
          <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.2s' }}>b</span>
          <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.3s' }}>e</span>
          <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.4s' }}>O</span>
          <span className="inline-block animate-letter-bounce" style={{ animationDelay: '0.5s' }}>X</span>
        </h1>

        {/* Enhanced Tagline with typing effect */}
        <p className="text-xl md:text-4xl font-russo font-medium mb-2 text-neon-blue neon-glow animate-type-writer">
          Catch the Vibe. Trade the Meme.
        </p>

        {/* Enhanced Subtitle */}
        <p className="text-lg md:text-2xl text-gray-300 mb-8 font-space animate-fade-in-up" style={{ animationDelay: '1s' }}>
          AI-powered vibes on MultiversX 🤖⚡
        </p>

        {/* Enhanced Main CTA Button */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <a 
            href="https://swap.onedex.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <Button className="neon-button text-xl md:text-3xl px-16 py-8 font-russo font-bold relative overflow-hidden group-hover:animate-pulse-intense">
              <span className="relative z-10">Buy on OneDex</span>
              <ExternalLink className="ml-4 w-7 h-7 animate-bounce-subtle" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </a>
        </div>

        {/* Enhanced Meme taglines with staggered animations */}
        <div className="space-y-3 text-sm md:text-lg text-gray-400 font-space">
          <p className="animate-fade-in-up" style={{ animationDelay: '2s' }}>
            0 utility. 100% vibe. Perfectly useless and proud. 😎
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '2.3s' }}>
            To the moon? Maybe. To the memes? Definitely. 🌙
          </p>
          <p className="animate-fade-in-up text-neon-green font-bold" style={{ animationDelay: '2.6s' }}>
            "Vibe it. Trade it. Forget it." 🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
