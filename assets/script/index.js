/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Assignment 4
Jayvee Milana

Fakebook

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

let post = document.querySelector('.post');
let storage = document.querySelector('.storage');
let text = document.querySelector('.text');
let image = document.querySelector('.image');
let user = document.querySelector('.user');
let userInfo = document.querySelector('.user-info');

function createPost() {
  let newPost = document.createElement('div');
  let postText = document.createElement('p');
  let imageFile = document.createElement('img');

  newPost.className = `posts`;

  postText.innerHTML = `${text.value}`;
  imageFile.src = `${image.value}`;

  storage.appendChild(newPost);
  newPost.appendChild(postText);
  newPost.appendChild(imageFile);
}

post.addEventListener('click', function() {
  createPost();
  text.value = '';
});

user.addEventListener('click', function() {
  userInfo.classList.toggle('hidden');
});

class User {
  #id;
  #name;
  #userName;
  #email;

  constructor (id, name, userName, email) {
    this.#id = id;
    this.#name = name;
    this.#userName = userName;
    this.#email = email;
  }
}

class Subscriber extends User {
  #pages;
  #groups;
  #canMonotize;

  constructor (id, name, userName, email, pages, groups, canMonotize) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonotize = canMonotize
  }
}