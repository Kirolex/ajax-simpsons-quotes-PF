function fetchSimpsonsJSON() {
    
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;

    axios.get(url).then(function (response) {
        console.log(response.data[0])
        return response.data[0]; // response.data instead of response.json() with fetch

    })

        .then(function (Simpsons) {

            console.log('data decoded from JSON:', Simpsons);


            // Build a block of HTML

            const SimpsonsHtml = `
  
          <p><strong>${Simpsons.quote}</strong></p>
  
          <img src="${Simpsons.image}" />
  
        `;

            document.querySelector('#simpsons').innerHTML = SimpsonsHtml;

        });

}


fetchSimpsonsJSON();