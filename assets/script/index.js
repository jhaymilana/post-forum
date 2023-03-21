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
});