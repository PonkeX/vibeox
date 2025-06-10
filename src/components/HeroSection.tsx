
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Mascot/Logo */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-neon-purple via-neon-blue to-neon-green rounded-full flex items-center justify-center animate-float neon-border">
            <div className="text-6xl md:text-8xl animate-glitch">🐸</div>
          </div>
          <div className="absolute -top-4 -right-4 text-2xl animate-bounce">✨</div>
          <div className="absolute -bottom-2 -left-6 text-xl animate-pulse">🚀</div>
        </div>

        {/* Token Name */}
        <h1 className="text-6xl md:text-8xl retro-title mb-4 text-gradient neon-glow">
          VibeOX
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-3xl font-russo font-medium mb-2 text-neon-blue neon-glow">
          Catch the Vibe. Trade the Meme.
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 font-space">
          AI-powered vibes on MultiversX 🤖⚡
        </p>

        {/* Main CTA Button */}
        <div className="mb-8">
          <a 
            href="https://swap.onedx.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="neon-button text-xl md:text-2xl px-12 py-6 font-russo font-bold">
              Buy on OneDex
              <ExternalLink className="ml-3 w-6 h-6" />
            </Button>
          </a>
        </div>

        {/* Meme taglines */}
        <div className="space-y-2 text-sm md:text-base text-gray-400 font-space">
          <p>0 utility. 100% vibe. Perfectly useless and proud. 😎</p>
          <p>To the moon? Maybe. To the memes? Definitely. 🌙</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
