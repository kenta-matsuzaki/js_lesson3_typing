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
  let isPlaying = false;
  
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

  function showResult(){
    const accuracy = score + miss ===0 ? 0 : score / (score + miss) * 100;
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`)
  }

  function updateTimer(){
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 10);

    if (timeLeft < 0){
      isPlaying = false;
      clearTimeout(timeoutId);
      timerLabel.textContent = '0.00';
      setTimeout(() => {
        showResult();
      }, 100);
    }
  }

  window.addEventListener('click', () => {
    if (isPlaying === true){
      return;
    }
    isPlaying = true;
    updateTarget();
    startTime = Date.now();
    updateTimer();
  });

  window.addEventListener('keyup', e => {
    if (isPlaying !== true){
      return;
    }
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