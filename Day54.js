// ! Practical Question: File Manager with OOP
// * Create a FileManager class in Node.js that uses the fs module to perform the following operations:

//? Create a File: Method to create a new file with the given content.
//? Read a File: Method to read and display the contents of a file.
//? Update a File: Method to append new content to an existing file.
//? Delete a File: Method to delete a specified file.
//? List Files in Directory: Method to list all files in a specified directory.

//? Constraints:

//? Use classes and encapsulate the functionality inside methods.
//? Handle errors using try-catch blocks.
//? Use both fs's synchronous and asynchronous methods where appropriate.

const fs = require("fs");
const path = require("path");

const filePath  = (dirName, fileName) => path.join(dirName, fileName);

class FileManager {
  constructor(directory) {
    this.directory = directory;
    if (!fs.existsSync(this.directory)) {
      fs.mkdirSync(this.directory);
    }
  }

  createFile(fileName, content) {
    try {
      fs.writeFileSync(filePath(this.directory,fileName), content, "utf8");
      console.log(`File "${fileName}" created successfully!`);
    } catch (err) {
      console.error(`Error creating file: ${err.message}`);
    }
  }

  readFile(fileName) {
    
    try {
      const data = fs.readFileSync(filePath(this.directory,fileName), "utf8");
      console.log(`Content of "${fileName}":\n${data}`);
    } catch (err) {
      console.error(`Error reading file: ${err.message}`);
    }
  }

  updateFile(fileName, content) {
    try {
      fs.appendFileSync(filePath(this.directory,fileName), content, "utf8");
      console.log(`File "${fileName}" updated successfully!`);
    } catch (err) {
      console.error(`Error updating file: ${err.message}`);
    }
  }

  deleteFile ( fileName ) {
    try {
        fs.unlinkSync(filePath(this.directory,fileName));
        console.log(`File "${fileName}" updated successfully!`);
    } catch (err) {
        console.error(`Error updating file: ${err.message}`);
    }
  }

  listFiles() {
    try {
      const files = fs.readdirSync(this.directory);
      console.log(`Files in directory "${this.directory}":`, files);
    } catch (err) {
      console.error(`Error listing files: ${err.message}`);
    }
  }

}

const directory = new FileManager("Practice");
directory.createFile("user2.txt", "hello world ?");
directory.readFile("user2.txt");
directory.updateFile("user2.txt","how are you ?");
directory.deleteFile("user.txt");