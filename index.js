const personagensContador = document.getElementById("personagens");

preencherContadores();

function preencherContadores() {
    Promise.all([swapiGet("people/")
])
  .then(function(results) {
   console.log(results);
  
  personagensContador.innerHTML = results[0].data.count

  })
}
function swapiGet(param) {

   return axios.get(`https://swapi.dev/api/${param}`);
  
}

