console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 3  ┃
┗━━━━━━━━━━━━━━┛

1. Add a 4 card elements to the '<div id="root"/>'
- The cards should be displayed in a responsive grid
- Each card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/

2. Add a CSS file to this folder (public/exercises/3/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
`);

function randomN(n) {
  return Math.round(Math.random() * n);
}

function randomItem(array) {
  const randomIndex = array.length - 1;
  return array[randomN(randomIndex)];
}

const firstNames = ["Harry", "Sam", "Emily", "Ken", "Dave"];

const lastNames = ["Fox", "Duck", "Goose", "Beatle", "Catfish"];

const sex = ["women", "men"];

const people = Array.from({ length: 8 }).map(() => ({
  firstName: randomItem(firstNames),
  lastName: randomItem(lastNames),
  photo: `https://randomuser.me/api/portraits/${randomItem(sex)}/${randomN(
    50
  )}.jpg`,
}));

document.querySelector("#root").innerHTML = `

    <div class="Grid">${people
      .map(
        person => `
        <div class="card">
            <header class="card-header">
                <h3> ${person.firstName} ${person.lastName}</h3>
            </header>
            <figure class="card-pic">
                <img src="${person.photo}" alt="Avatar of ${randomItem(
          firstNames
        )}"/>
            </figure>
        </div>
        `
      )

      .join("")}</div>`;
