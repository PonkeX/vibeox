
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const TokenomicsSection = () => {
  const data = [
    { name: 'Liquidity Pool (LP Burned)', value: 90, color: '#8B5CF6' },
    { name: 'Team / Airdrop / Controlled Chaos', value: 10, color: '#06B6D4' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card-gradient p-3 rounded-lg border border-neon-purple/30 animate-subtle-bounce">
          <p className="text-white font-russo">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 px-4 bg-black/20 relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl opacity-10 animate-spin-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            💰
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl retro-title text-center mb-16 text-gradient neon-glow animate-fade-in-up">
          Tokenomics
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Chart */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-500 group">
              <h3 className="text-2xl font-russo font-bold text-center mb-8 text-neon-purple group-hover:animate-text-glow">
                Token Distribution
              </h3>
              <div className="h-80 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                      className="hover:scale-110 transition-transform duration-300"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                {/* Animated center decoration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-pulse">
                  🚀
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Details */}
          <div className="space-y-8">
            <div className="bg-card-gradient rounded-2xl p-6 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-3xl font-russo font-bold mb-4 text-gradient">
                Total Supply
              </h3>
              <p className="text-4xl font-bold text-neon-yellow animate-pulse-intense">
                100,000,000 VibeOX
              </p>
              <p className="text-gray-400 mt-2 font-space">
                Round numbers because we're simple like that 🤯
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card-gradient rounded-xl p-4 border-l-4 border-neon-purple animate-fade-in-up hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-russo font-bold text-neon-purple group-hover:animate-bounce-subtle">
                    Liquidity Pool
                  </h4>
                  <span className="text-2xl font-bold text-neon-purple animate-pulse">90%</span>
                </div>
                <p className="text-gray-300 font-space text-sm">
                  90M tokens paired with 90 EGLD. LP tokens burned forever. 
                  No rug, just vibes. 🔒
                </p>
              </div>

              <div className="bg-card-gradient rounded-xl p-4 border-l-4 border-neon-blue animate-fade-in-up hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-russo font-bold text-neon-blue group-hover:animate-bounce-subtle">
                    Controlled Chaos
                  </h4>
                  <span className="text-2xl font-bold text-neon-blue animate-pulse">10%</span>
                </div>
                <p className="text-gray-300 font-space text-sm">
                  10M for team, airdrops, and whatever chaos the community decides. 
                  Democracy in action. 🗳️
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-xl p-4 border border-neon-purple/30 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '1s' }}>
              <p className="text-center font-russo font-bold text-lg text-gradient animate-text-glow">
                "Sir, this is a casino. But a very organized one." 🎰
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
