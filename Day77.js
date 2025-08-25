//! ❓ College-Level OOP Question
// *Design a system for a Library:
// *Create a base class Person with name and id.
// *Create two subclasses:
// *Student (extra property: course)
// *Librarian (extra property: section)
// *Create a Book class with title, author, and isAvailable.
// *Create a Library class that:
// *Stores books in an array.
// *Has methods addBook(book), borrowBook(title, person), returnBook(title, person).
// *Demonstrate OOP principles:
// *Encapsulation: private array of books.
// *Inheritance: Student and Librarian from Person.
// *Polymorphism: If a student borrows a book, print one type of message; if a librarian borrows, print another.

class Person {
  constructor(name, id) {
    (this.name = name), (this.id = id);
  }
  borrowBook(bookTitle) {
    console.log(`${this.name} borrowed: ${bookTitle}`);
  }

  returnBook(bookTitle) {
    console.log(`${this.name} returned: ${bookTitle}`);
  }
}
class Student extends Person {
  constructor(name, id, course) {
    super(name, id);
    this.course = course;
  }
  // Polymorphism → overrides borrowBook
  borrowBook(bookTitle) {
    console.log(`Student ${this.name} borrowed: ${bookTitle}`);
  }
  returnBook(bookTitle) {
    console.log(`Student ${this.name} returned: ${bookTitle}`);
  }
}

class Librarian extends Person {
  constructor(name, id, section) {
    super(name, id);
    this.section = section;
  }
  // Polymorphism → overrides borrowBook
  borrowBook(bookTitle) {
    console.log(`Librarian ${this.name} borrowed: ${bookTitle}`);
  }
  returnBook(bookTitle) {
    console.log(`Librarian ${this.name} returned: ${bookTitle}`);
  }
}

class Book {
  constructor(title, author, isAvailable) {
    this.title = title;
    this.author = author;
    this.isAvailable = true
  }
}

class Library {
  #books; // private array
  constructor(book) {
    this.#books = [];
  }
  addBook(book) {
    this.#books.push(book);
    console.log(`Book added: ${book.title} by ${book.author}`);
  }
  borrowBook(title, person) {
    const book = this.#books.find((book) => book.title === title);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      person.borrowBook(book.title);
    } else {
      console.log(`Book is already borrowed: ${title}`);
    }
  }
  returnBook(title, person) {
    const book = this.#books.find((b) => b.title === title);

    if (book && !book.isAvailable) {
      book.isAvailable = true;
      person.returnBook(book.title); // Polymorphism in action
    } else {
      console.log(`Book was not borrowed: ${title}`);
    }
  }
}

console.log("\n--- Test Run 1 ---");
const lib1 = new Library();
lib1.addBook(new Book("JavaScript Basics", "John Doe"));
lib1.addBook(new Book("Data Structures", "Jane Smith"));

const student1 = new Student("Alice", 101, "CS");
const librarian1 = new Librarian("Mr. Robert", 201, "Reference");

lib1.borrowBook("JavaScript Basics", student1);
lib1.borrowBook("Data Structures", librarian1);
lib1.returnBook("JavaScript Basics", student1);
lib1.borrowBook("Data Structures", student1);

// ---------------------
// 🔹 Test Run 2
// ---------------------
console.log("\n--- Test Run 2 ---");
const lib2 = new Library();
lib2.addBook(new Book("Operating System", "Silberschatz"));
lib2.addBook(new Book("Database Management", "Korth"));
lib2.addBook(new Book("Computer Networks", "Tanenbaum"));

const student2 = new Student("Bob", 102, "IT");
const student3 = new Student("Alice", 103, "CSE");
const librarian2 = new Librarian("Mr. Robert", 202, "Science Section");

lib2.borrowBook("Operating System", student2);
lib2.borrowBook("Database Management", student3);
lib2.borrowBook("Computer Networks", librarian2);
lib2.borrowBook("Operating System", student3);
lib2.returnBook("Database Management", student3);
lib2.returnBook("Computer Networks", librarian2);
lib2.returnBook("Operating System", student2);