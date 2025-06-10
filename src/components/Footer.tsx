
import React from 'react';
import { ExternalLink, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const contractAddress = "erd1qqqqqqqqqqqqqpgq...placeholder...contract...address";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  return (
    <footer className="py-16 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl retro-title text-gradient mb-4">
              VibeOX
            </h3>
            <p className="text-gray-400 font-space mb-4">
              The memecoin that's perfectly useless and proud of it. 
              Powered by pure vibe energy.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Powered by</span>
              <span className="text-neon-blue font-bold">MultiversX</span>
              <span>⚡</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-russo font-bold text-neon-purple mb-4">
              Quick Actions
            </h4>
            <div className="space-y-3">
              <a 
                href="https://swap.onedx.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:scale-105 transition-all duration-300">
                  Trade on OneDex
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a 
                href="https://explorer.multiversx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full border-neon-green text-neon-green hover:bg-neon-green/10">
                  View on Explorer
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-xl font-russo font-bold text-neon-blue mb-4">
              Join the Chaos
            </h4>
            <div className="space-y-3">
              <a 
                href="https://t.me/vibeox_community" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-card-gradient rounded-lg hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl">📱</span>
                <span className="font-space">Telegram</span>
              </a>
              <a 
                href="https://x.com/vibeox_meme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-card-gradient rounded-lg hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl">🐦</span>
                <span className="font-space">X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="bg-card-gradient rounded-xl p-6 mb-8">
          <h4 className="text-lg font-russo font-bold text-center mb-4 text-neon-yellow">
            Contract Address
          </h4>
          <div className="flex items-center justify-between bg-black/50 rounded-lg p-4">
            <code className="text-sm text-gray-300 font-mono break-all">
              {contractAddress}
            </code>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(contractAddress)}
              className="ml-4 text-neon-blue hover:bg-neon-blue/10"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            Always verify the contract address before trading!
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>and</span>
              <span className="text-neon-green">🧠</span>
              <span>by the VibeOX community</span>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p>
                This is a meme coin with no intrinsic value or expectation of financial return.
              </p>
              <p>
                Not financial advice. DYOR. NFA. May cause excessive vibing. 🤪
              </p>
            </div>

            <p className="text-lg font-russo font-bold text-gradient">
              "Stay Vibing, Stay Based" 🚀✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
