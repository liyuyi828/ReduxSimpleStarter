export default function ( state = {
    gameStart: false
  }, action) {
  switch(action.type){
    case 'GAME_CHANGE':
      return action.payload;
      break;
  }

  return state;
}