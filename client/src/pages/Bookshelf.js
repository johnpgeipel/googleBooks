import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import BookCard from '../components/BookCard';

class Bookshelf extends Component {
  state = {books: []};

  // Method to Query the API/Database to GET all the books in the database.
  loadBookshelf = () => {
    API.getBookshelf()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // Method to DELETE a particular book from the database.
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBookshelf())
      .catch(err => console.log(err))
  };

  // Lifecycle Method - once the Bookshelf Component mounts it runs the 'loadBookshelf' method.
  componentDidMount() {
    this.loadBookshelf()
  }

  render() {
    return (
      
      <div>
        <Jumbotron
          title="Saved Books"
          lead="All of Your Saved Books in One Convenient Location."
          instructions="View your book at Google, or remove it from your Libray."
          image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=853&q=80"
        />
        <div className="container">
        <BookCard
          books={this.state.books}
          buttonAction={this.deleteBook}
          buttonType="btn btn-danger mt-2"
          buttonText="Delete Book"
        />
        </div>
       </div>
    )
  }
}

export default Bookshelf;