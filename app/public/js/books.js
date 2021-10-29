//connect to addNewBook line 43 in books.html
addNewBook(evt) {
    this.bookForm.bookId = this.selectedBook.id;        
    
    console.log("Posting!", this.bookForm);

    fetch('api/student/create.php', {
        method:'POST',
        body: JSON.stringify(this.bookForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.books = json;
        
        // reset the form
        this.bookForm = {};
      });
  }
},
created() {
    this.fetchUserData();