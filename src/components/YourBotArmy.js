import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <BotCard key={bot.id} bot={bot} releaseBot={releaseBot} dischargeBot={dischargeBot} inArmy />
      ))}
    </div>
  );
}

export default YourBotArmy;
