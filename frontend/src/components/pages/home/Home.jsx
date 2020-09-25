import React from 'react';
import { connect } from 'react-redux';

import Banner from './Banner';
import Card from './Card';

import { cards } from 'data/HomeCardsDB';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
