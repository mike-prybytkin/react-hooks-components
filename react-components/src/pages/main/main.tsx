import CreateCards from 'components/create-cards/create-cards';
import React from 'react';

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
