import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';

function BotPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: 'DELETE',
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  };

  const handleSort = (option) => {
    setSortOption(option);
    let sortedBots = [...bots];
    if (option === 'health') {
      sortedBots.sort((a, b) => b.health - a.health);
    } else if (option === 'damage') {
      sortedBots.sort((a, b) => b.damage - a.damage);
    } else if (option === 'armor') {
      sortedBots.sort((a, b) => b.armor - a.armor);
    }
    setBots(sortedBots);
  };

  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToList = () => {
    setSelectedBot(null);
  };

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <SortBar handleSort={handleSort} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} backToList={handleBackToList} enlistBot={enlistBot} />
      ) : (
        <BotCollection bots={bots} enlistBot={enlistBot} handleSelectBot={handleSelectBot} />
      )}
    </div>
  );
}

export default BotPage;

