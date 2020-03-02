const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "ls_key"; /* localStorage의 key와 연결이 되어있음 */
SHOWING_CN = "showing"; /*showing은 css .showing과 연결되어 있음 */

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(ls_value) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${ls_value}`; /*text는 localStorage의 value이다.*/
}

function loadName() {
  const key = localStorage.getItem(USER_LS); /** key는 결국 value값이다.*/
  if (key === null) {
    askForName();
  } else {
    paintGreeting(key);
  }
}

function init() {
  loadName();
}

init();
