import React from 'react';
import { connect } from 'react-redux';
import { gameStatusChange } from '../actions/index';
import { bindActionCreators } from 'redux';

class GameBoard extends React.Component {
  render () {
    if(this.props.game.gameStart){
      return (
        <div>
          <button onClick={() => this.props.gameStatusChange({gameStart: false})}>
            Click To End Game
          </button>
          <from>
            <input type='text' name='answer' />
            <input type='submit' value='submit' />
          </from>
        </div>
      );    
    } else {
      return (
        <div>
          <button onClick={()=> this.props.gameStatusChange({gameStart: true})}>
            Click To Start Game
          </button>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    game: state.gameStatus
  }
}

function mapDispatchToProps(dispatch) {
  // whenever select book is called, the result should be passed to all our reducers
  return bindActionCreators( { gameStatusChange: gameStatusChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
