
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
        <div className="bg-card-gradient p-3 rounded-lg border border-neon-purple/30">
          <p className="text-white font-russo">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl retro-title text-center mb-16 text-gradient neon-glow">
          Tokenomics
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="relative">
            <div className="bg-card-gradient rounded-3xl p-8">
              <h3 className="text-2xl font-russo font-bold text-center mb-8 text-neon-purple">
                Token Distribution
              </h3>
              <div className="h-80">
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
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div className="bg-card-gradient rounded-2xl p-6">
              <h3 className="text-3xl font-russo font-bold mb-4 text-gradient">
                Total Supply
              </h3>
              <p className="text-4xl font-bold text-neon-yellow">
                100,000,000 VibeOX
              </p>
              <p className="text-gray-400 mt-2 font-space">
                Round numbers because we're simple like that 🤯
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card-gradient rounded-xl p-4 border-l-4 border-neon-purple">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-russo font-bold text-neon-purple">
                    Liquidity Pool
                  </h4>
                  <span className="text-2xl font-bold text-neon-purple">90%</span>
                </div>
                <p className="text-gray-300 font-space text-sm">
                  90M tokens paired with 90 EGLD. LP tokens burned forever. 
                  No rug, just vibes. 🔒
                </p>
              </div>

              <div className="bg-card-gradient rounded-xl p-4 border-l-4 border-neon-blue">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-russo font-bold text-neon-blue">
                    Controlled Chaos
                  </h4>
                  <span className="text-2xl font-bold text-neon-blue">10%</span>
                </div>
                <p className="text-gray-300 font-space text-sm">
                  10M for team, airdrops, and whatever chaos the community decides. 
                  Democracy in action. 🗳️
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-xl p-4 border border-neon-purple/30">
              <p className="text-center font-russo font-bold text-lg text-gradient">
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
