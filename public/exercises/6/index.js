console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 6  ┃
┗━━━━━━━━━━━━━━┛

1. Fetch 10 users from https://randomuser.me/api/
- you can request a speciffic number of results with a query-parameter
  Use https://randomuser.me/api/?results=10 (you can adjust the number '10')
- Look up how the fetch api works: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

2. Display all user names in a list.
`);

const getData = fetch("https://randomuser.me/api/?results=1000");

getData
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const names = data.results.map(person => {
      return `${person.name.first} ${person.name.last}`;
    });
    console.log(names);
    document.querySelector("#root").innerHTML = /*html*/ `
    <ul>
    ${names
      .map(name => {
        return `<li>${name}</li>`;
      })
      .join("")}    
    </ul>
    
    `;
  });
