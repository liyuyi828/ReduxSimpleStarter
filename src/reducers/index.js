import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import GameStatus from './game_reducer'

const rootReducer = combineReducers({
  books: BooksReducer, 
  activeBook: ActiveBook, 
  gameStatus: GameStatus
});
// any key pass in root reducer will be available to global

export default rootReducer;
