'use strict';

{
  const word = 'apple';
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
    console.log(e.key);
    if (e.key === word[loc]){
      loc++;
      score++;
      scoreLabel.textContent = score;
      updateTarget();
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
}