import React from 'react';

function BotCard({ bot, enlistBot, releaseBot, dischargeBot, handleSelectBot, inArmy }) {
  const { id, name, health, damage, armor, avatar_url, bot_class, catchphrase } = bot;

  return (
    <div className="bot-card" onClick={() => handleSelectBot && handleSelectBot(bot)}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Class: {bot_class}</p>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>{catchphrase}</p>
      {inArmy ? (
        <>
          <button onClick={() => releaseBot(bot)}>Release</button>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
        </>
      ) : (
        <button onClick={() => enlistBot(bot)}>Enlist</button>
      )}
    </div>
  );
}

export default BotCard;
