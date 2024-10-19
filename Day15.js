//  Question: Create a class named Book with properties title, author, and yearPublished. 
//  Include a method named getBookInfo that returns a string with the book's details in the format:
//  "Title: [title], Author: [author], Year: [yearPublished]". Create an object of the Book class and call the method.

class Book{
    constructor(title,author,yearPublished){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished
    }
    getBookInfo(){
        return `Title: [${this.title}], Author: [${this.author}], Year: [${this.yearPublished}].`
    }
}

// create an object 
const book1 = new Book('Making India Awesome','Chetan Bhagat ',1995);
console.log(book1);