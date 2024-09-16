document.addEventListener('DOMContentLoaded', function() {

  const amount = document.getElementById('amount');
  const currency = document.getElementById('currency');
  const convert = document.getElementById('convert');
  const result = document.getElementById('result');

  var apiKey="lgLTzF+fAxOprxQjirC6yQ==Et8KxUfa2H7IeuwO";
  var apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=GBP_AUD";

    convert.addEventListener('click', () => {
      console.log('h1')
      const amountTotal = amount.value;
      console.log('total', amountTotal)
      const currencyTotal = currency.value;
      const url = apiUrl + currencyTotal;
      console.log('url', url)

      fetch(apiUrl, {
          headers: {
            'X-Api-Key' : apiKey
          }
      })
      .then(response => response.json())
      .then(data => {
          const rate = data.exchange_rate;
          console.log('rate', rate)
          const resultPrice = amountTotal * rate;
          console.log('result', resultPrice)
          result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
      })
      .catch(error => {
        console.error('Request failed:', error);
        result.innerHTML = 'An error ocurred please try again later.'
      })

    })

});
