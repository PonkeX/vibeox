
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {['🤖', '🚀', '💎', '⚡', '🌟', '🛸'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl retro-title text-center mb-16 text-gradient neon-glow animate-fade-in-up">
          What is VibeOX?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="meme-card text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl mb-4 floating-element group-hover:animate-spin-slow transition-all duration-300">🤖</div>
            <h3 className="text-2xl font-russo font-bold mb-4 text-neon-purple">
              AI-Powered Vibes
            </h3>
            <p className="text-gray-300 font-space">
              An experimental memecoin powered by pure AI energy and community-driven chaos. 
              We're not solving anything, we're just vibing.
            </p>
          </div>

          {/* Card 2 */}
          <div className="meme-card text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-6xl mb-4 floating-element group-hover:animate-bounce-slow transition-all duration-300" style={{ animationDelay: '2s' }}>
              🎭
            </div>
            <h3 className="text-2xl font-russo font-bold mb-4 text-neon-blue">
              Meme-Centric Community
            </h3>
            <p className="text-gray-300 font-space">
              Built by degens, for degens. Our community speaks fluent meme and broken English. 
              Join us for the culture, stay for the chaos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="meme-card text-center md:col-span-2 lg:col-span-1 group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-6xl mb-4 floating-element group-hover:animate-pulse-intense transition-all duration-300" style={{ animationDelay: '4s' }}>
              💎
            </div>
            <h3 className="text-2xl font-russo font-bold mb-4 text-neon-green">
              Diamond Hands Energy
            </h3>
            <p className="text-gray-300 font-space">
              No roadmap. No promises. Just pure diamond hands energy and the occasional 
              "this is the way" in the Telegram chat.
            </p>
          </div>
        </div>

        {/* Enhanced Meme quotes section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card-gradient rounded-3xl p-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-300 group">
            <h3 className="text-3xl font-russo font-bold mb-6 text-gradient group-hover:animate-text-glow">
              The VibeOX Philosophy
            </h3>
            <div className="space-y-4 text-lg font-space">
              <p className="text-neon-blue font-bold animate-type-writer">"Vibe it. Trade it. Forget it." 🔥</p>
              <p className="text-gray-300">
                We're not here to change the world. We're here to change your portfolio. 
                Maybe. No financial advice. DYOR. NFA. 🤷‍♂️
              </p>
              <p className="text-neon-green font-bold">
                "If you're not confused, you're not paying attention." 🧠
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
