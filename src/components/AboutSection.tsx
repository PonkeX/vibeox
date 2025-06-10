
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl retro-title text-center mb-16 text-gradient neon-glow">
          What is VibeOX?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="meme-card text-center">
            <div className="text-6xl mb-4 floating-element">🤖</div>
            <h3 className="text-2xl font-russo font-bold mb-4 text-neon-purple">
              AI-Powered Vibes
            </h3>
            <p className="text-gray-300 font-space">
              An experimental memecoin powered by pure AI energy and community-driven chaos. 
              We're not solving anything, we're just vibing.
            </p>
          </div>

          {/* Card 2 */}
          <div className="meme-card text-center">
            <div className="text-6xl mb-4 floating-element" style={{ animationDelay: '2s' }}>
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
          <div className="meme-card text-center md:col-span-2 lg:col-span-1">
            <div className="text-6xl mb-4 floating-element" style={{ animationDelay: '4s' }}>
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

        {/* Meme quotes section */}
        <div className="mt-16 text-center">
          <div className="bg-card-gradient rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-russo font-bold mb-6 text-gradient">
              The VibeOX Philosophy
            </h3>
            <div className="space-y-4 text-lg font-space">
              <p className="text-neon-blue font-bold">"Vibe it. Trade it. Forget it." 🔥</p>
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
