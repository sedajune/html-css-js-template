console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 4  ┃
┗━━━━━━━━━━━━━━┛

1. Add a '<form />' to the '<div id="root"/>'
- The form should have an '<input type="email"/>'
- The form should have a '<button type="submit" />'
- The '<button type="submit" />' should read 'Subscribe'

2. Handle the '<form />' via JavaScript
- Log the email-address in the browser console when the form is submitted

3. save the email-address in the 'localStorage'
- Show a text that reads "Thank you for subscribing"
- Remove the form

4. On reload show a text "You are subscribed" if the localStorage key exists
- The form should not be visible
`);

const root = document.querySelector("#root");
const stored = window.localStorage.getItem("email");

if (stored) {
  root.innerHTML = /*html*/ `
    <div class="subscribed">You are subscribed</div>
    `;
} else {
  const form = document.createElement("form");

  root.append(form);

  form.innerHTML = /*html*/ `
    <label>Email:
        <input name="email" type="email" required/>
            </label>
            <button type="submit">Subscribe</button>



`;

  form.addEventListener("submit", function (event_) {
    event_.preventDefault();
    const formData = new FormData(event_.target); // event_.target === form
    const email = formData.get("email");

    //if (Boolean(email)) {
    window.localStorage.setItem("email", formData.get("email"));
    root.innerHTML = /*html*/ `
    <div class= "subscribing-msg">Thank you for subscribing!</div>
    
  `;
    //}
  });
}
