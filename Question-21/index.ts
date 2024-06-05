/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items. */

interface Person {
    name: string;
    age: number;
    isOnsiteStudent: boolean;
    course: string;
  }

  let person : Person= {
    name: "kapil",
    age: 23,
    isOnsiteStudent:true,
    course: "Generative ai",
  }

  console.log (person)
  