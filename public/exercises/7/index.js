console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 7  ┃
┗━━━━━━━━━━━━━━┛

1. Fetch all Marvel characters from '/api/marvel.json'
- use async and  await
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
- List all names of the characters

2. Create a simple card for each character
- Add a simple styling for each card
- Display all cards in a responsive grid 
`);

const getData = fetch("/api/marvel.json");

getData
  .then(response => response.json())

  .then(data => console.log(data));
const names = data.results.map(character => {
  return `${character.names}`;
});
console.log(names);

document.querySelector("#root").innerHTML += /*html*/ `
    <div class="cards">
    
    </div>
    
    `;
