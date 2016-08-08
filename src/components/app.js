import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
import GameBoard from '../containers/game_board';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
        <GameBoard />
      </div>
    );
  }
}
