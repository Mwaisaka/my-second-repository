const h2 = document.createElement('h2');
h2.textContent = `This content is added by JavaScript`;

const h3 = document.createElement('h3');
h3.textContent = "Welcome to JavaScript";

document.querySelector("body").appendChild(h2);
document.querySelector("body").appendChild(h3);