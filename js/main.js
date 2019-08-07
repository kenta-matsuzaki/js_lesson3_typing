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
  const timeLimit = 3 * 1000;
  let startTime;
  
  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');
  

  function updateTarget(){
    let placeHolder = '';
    for(let i = 0; i < loc; i++){
      placeHolder += '_';
    }
    target.textContent = placeHolder + word.substring(loc);
  }

  function updaTimer(){
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);
  }

  window.addEventListener('click', () => {
    updateTarget();
    startTime = Date.now();
    updaTimer();
  });

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