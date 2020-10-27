
console.log('ok')
function fetchSimpsonQote() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(pokemon) {
        console.log('data decoded from JSON:', pokemon);
  
        // Build a block of HTML
        const pokemonHtml = `
          <p><strong>${pokemon[0].quote}</strong></p>
          <p><strong>${pokemon[0].character}</strong></p>
          <img src="${pokemon[0].image}" />
        `;
        document.querySelector('.content').innerHTML = pokemonHtml;
      });
  }
  
  fetchSimpsonQote();