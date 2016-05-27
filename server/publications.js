Meteor.publish('books', function() {
  return Books.find({userID: this.userId});
});

