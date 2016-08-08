export function selectBook(book) {
  console.log('book has been changed');   
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

export function gameStatusChange(gameStatus) {
  console.log('game just started');
  return {
    type: 'GAME_CHANGE',
    payload: gameStatus
  }
}