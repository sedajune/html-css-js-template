const { visitFunctionBody } = require("typescript");

console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 1  ┃
┗━━━━━━━━━━━━━━┛

1. Add a headline to the '<div id="root"/>'.
- Do not change the index.html
- Only use JavaScript.
- The Page should show "It works!"
- The Headline should use the tag '<h1/>'

2. Give the headline a className
- The headline should have the className "main-headline"

3. Add a '<style/>' element to the '<head/>'
- Do not change the index.html
- Only use JavaScript.
- The '<style/>' element should have the id "main-style"



4. Add css to the '<style id="main-style"/>' element
- add the following css
- the headline should be blue
`);

// 1.
const root = document.querySelector("#root");

const h1 = document.createElement("h1");

root.append(h1);

h1.innerHTML("It works!");
// 2.
h1.classList = "main-headline";
// 3.
const style = document.createElement("style");

document.head.append(style);

style.id = "main-style";

// 4.
style.innerHTML(`
#main-style {
    color: blue;
} 
`);
