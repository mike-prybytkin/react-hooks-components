import React from 'react';
import CreateCards from 'components/create-cards/create-cards';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Главная</h1>
        <div className="cards-wrapper">
          <CreateCards />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
