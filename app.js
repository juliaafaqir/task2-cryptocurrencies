'use strict';

async function getCurrency() {
  let url = 'https://api.coincap.io/v2/assets';
  try {
      let res = await fetch(url);  
      return await res.json();

  } catch (error) {
      console.log(error);
  }
}

async function render() {
  let currencies = await getCurrency();
  let html = '';
  currencies.data.forEach(currency => {
    let priceUsd= currency.priceUsd;
    let parsed= parseFloat(priceUsd);
    let price = parsed.toFixed(2);
    
      let htmlSegment = `<div class="currency">
                          <h2>${currency.rank}</h2>
                          <h2>${currency.name}</h2>
                          <p> valued at: ${price}</p>
                         </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
  
}

render();