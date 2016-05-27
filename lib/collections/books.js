Books = new Meteor.Collection("books");
Meteor.methods({
  addBook: function(bookData) {
   if (this.userId) {
        bookData.userID = this.userId;
        var bookID = Books.insert(bookData);
        return bookID;
    }
  }
});