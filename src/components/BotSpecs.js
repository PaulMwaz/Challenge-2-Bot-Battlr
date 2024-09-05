import React from 'react';

function BotSpecs({ bot, backToList, enlistBot }) {
  const { id, name, health, damage, armor, avatar_url, bot_class, catchphrase } = bot;

  return (
    <div className="bot-specs">
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Class: {bot_class}</p>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>{catchphrase}</p>
      <button onClick={backToList}>Back to List</button>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
