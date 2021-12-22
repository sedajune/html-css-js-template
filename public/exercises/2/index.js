console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 2  ┃
┗━━━━━━━━━━━━━━┛

1. Add a card element to the '<div id="root"/>'
- The card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/
- The card should have a content area
- The content area should have a '<h4/>'
- The '<h4/>' should read "My hobbies"
- The content area should have a '<ul/>' with an '<li/>' for each hobby

2. Add a CSS file to this folder (public/exercises/2/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
- the card should have a dark-mode and light-mode
- When you change your preferred color-mode in your macOS preferences, the card should adjust to the mode
- Choose a font from https://fonts.google.com/
- Use the font for your card
`);

function randomN(n) {
  return Math.round(Math.random() * n);
}

const firstNames = ["Berry", "Sam", "Laura", "Bruno", "Cat"];
const lastNames = ["Schuster", "Smith", "Green", "Lang", "Becker"];

function randomItem(array) {
  const randomIndex = array.length - 1;
  return array[randomN(randomIndex)];
}
const firstName = randomItem(firstNames);
const secondName = randomItem(lastNames);

const genderMapping = {
  men: 99,
  women: 99,
  lego: 9,
};

const genders = Object.keys(genderMapping);
console.log(
  genders,
  Object.values(genderMapping),
  Object.entries(genderMapping)
);

const gender = randomItem(genders);
const maxIndex = genderMapping[gender];
const randomImageIndex = randomN(maxIndex);

console.log(gender, firstName, secondName, maxIndex, randomImageIndex);

document.querySelector("#root").innerHTML += `
    <div class="card">
        <header class="card-header">
            <h3 class="card-names">${randomItem(firstNames)} ${randomItem(
  lastNames
)} </h3>
           <figure class="card-pic"> 
        <img src="https://randomuser.me/api/portraits/${gender}/${randomImageIndex}.jpg", alt="Avatar of ${randomItem(
  firstNames
)} ${randomItem(lastNames)}">
    </img>
        </figure>
        </header>
        <div class="card-content"> 
            <h4 class="Hobbies-header">My Hobbies</h4>
                <ul class="List-hobbies">
                <li class="First-hobby">Ice Skating</li>
                <li class="Second-hobby">Singing</li>
                <li class="Third-hobby">Running</li>
                <li class="Fourth-hobby">Cooking</li>
                </ul>
            </div>
        </div>
        `;
