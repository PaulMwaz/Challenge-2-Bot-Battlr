import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot, handleSelectBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} handleSelectBot={handleSelectBot} />
      ))}
    </div>
  );
}

export default BotCollection;
