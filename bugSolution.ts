function greet(person: string, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
}

greet("world", new Date()); // Works fine

// Correct way to pass a date from string
const dateString = "2023-12-25";
const date = new Date(Date.parse(dateString));
greet("TypeScript", date); // Works fine now