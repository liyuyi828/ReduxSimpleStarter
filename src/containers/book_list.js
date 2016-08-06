import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    })
    }
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
          {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //whatever get return from here will show up as props
  //inside the booklist
  return {
    books: state.books
  }
}

//connect function and component
export default connect(mapStateToProps)(BookList);