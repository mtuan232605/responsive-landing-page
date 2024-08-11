import React from 'react';
import { motion } from 'framer-motion';
import "./Games.css"
import { gameList } from '../../data/data';
import { useTranslation } from 'react-i18next';

const GameCard = ({ title, img, description }) => (
  <motion.div
    className="game-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="image-wrapper">
      <img src={require(`../../assets/imgs/${img}`)} alt={title} />
    </div>
    <div className="game-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

const GameList = () => {
  const { t } = useTranslation();

  const firstHalfGames = gameList.filter((_, index) => index % 2 === 0);
  const secondHalfGames = gameList.filter((_, index) => index % 2 !== 0);

  return (
    <div id="games">
      <div className="title">
        <h1>{t('games.title')}</h1>
        <p>
          {t('games.description')}
        </p>
      </div>

      <div className="game-list">
        <div className="game-list-1">
          {firstHalfGames.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              img={game.img}
              description={game.description}
            />
          ))}
        </div>
        <div className="game-list-2">
          {secondHalfGames.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              img={game.img}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;
