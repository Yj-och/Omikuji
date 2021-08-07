'use strict';


{
  const btn = document.getElementById('btn');
  const results = ['大吉', '中吉', '凶', '末吉', '小吉'];
  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];
  }
  )

}