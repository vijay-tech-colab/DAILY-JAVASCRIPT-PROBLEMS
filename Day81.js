//! Q. Nested Object Transformation
// You have an object of students with nested details:
// 👉 Write a function that returns a new object where each student’s name maps to their average marks.

const students = {
  s1: { name: "Alice", marks: { math: 85, english: 92 } },
  s2: { name: "Bob", marks: { math: 78, english: 81 } },
  s3: { name: "Charlie", marks: { math: 90, english: 87 } },
};

const studentMapMarks = (students) => {
  return Object.values(students).reduce((acc, curr) => {
    if (curr.marks) {
      const marksArr = Object.values(curr.marks);
      const total = marksArr.reduce((sum, mark) => sum + mark, 0);
      const avg = total / marksArr.length;
      acc[curr.name] = avg;
    } else {
      acc[curr.name] = null;
    }
    return acc;
  }, {});
};

console.log(studentMapMarks(students));
// * Expected Output: { Alice: 88.5, Bob: 79.5, Charlie: 88.5 }
 

