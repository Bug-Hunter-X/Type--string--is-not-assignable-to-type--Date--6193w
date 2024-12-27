function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
}

greet("world", new Date()); // Works fine

// ERROR: Argument of type 'string' is not assignable to parameter of type 'Date'.
greet("TypeScript", "2023-12-25");