'use strict';

{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set'
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  let loc = 0;
  let score = 0;
  let miss = 0;
  
  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  
  target.textContent = word;

  function updateTarget(){
    let placeHolder = '';
    for(let i = 0; i < loc; i++){
      placeHolder += '_';
    }
    target.textContent = placeHolder + word.substring(loc);
  }

  window.addEventListener('keyup', e => {
    if (e.key === word[loc]){
      loc++;
      if (loc === word.length){
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      score++;
      scoreLabel.textContent = score;
      updateTarget();
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
}