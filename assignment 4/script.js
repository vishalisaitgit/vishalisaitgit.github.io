const names = [
  "yaakov",
  "John",
  "jen",
  "Jason",
  "Paul",
  "frank",
  "larry",
  "Paula",
  "laura",
  "jim",
];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const firstLetter = name.charAt(0);

  if (firstLetter.toUpperCase() === "J" || firstLetter.toLowerCase() === "j") {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}
