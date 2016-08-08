export default function (state = null, action) {
  //reducer function take in two argument: state and action
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;    
  }

  return state;
}