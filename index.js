/////////////////
//  variables //
/////////////// 
const pokemonContainer = document.querySelector(".pokemon-container");
const formEl = document.querySelector('form');
const bodyEl = document.getElementById('color');
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input[type=text]');
const Submit = document.querySelector('input[type=submit]');

/////////////////
//  Listeners //
///////////////

formEl.addEventListener( "submit", (e)=>{
    e.preventDefault();
    pokemonContainer.innerHTML = "",
    getPokemon(inputEl.value)
})


//////////////////
///dark mode/////
////////////////


function black(){
    console.log(bodyEl.id)
    if(bodyEl.id === "color"){
        bodyEl.id = 'black'
        bodyEl.style.color = 'white';
        formEl.style.background = "#1c0346";
        inputEl.style.background = "black"
        inputEl.style.color = "white"
        buttonEl.innerHTML = "Daymode"
        Submit.style.background ="#6ac96f"

    }else if(bodyEl.id === "black"){
        bodyEl.id = 'color';
        bodyEl.style.color = 'black';
        formEl.style.background = "#56cfe1";
        inputEl.style.background = "#80ffdb"
        inputEl.style.color = "white"
        buttonEl.innerHTML = "NigthMode"
    }
    
    
}

/////////////////
//  GET DATA  //
///////////////

async function getPokemon( name ="bulbasaur"){
    const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const pokemon = await res.json();
    



/////////////////
/// show info //
///////////////

const pokemonEl = document.createElement('div');
pokemonEl.classList.add('pokemon');



//////////////////////
///  div innerHTML //
////////////////////

pokemonEl.innerHTML = `
   
    <div class="info">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${
        pokemon.id}.png" width="200">
        <h2 class="animate__backInUp" >${pokemon.name}</h2>
    </div>

    <div class="stats">
    ${pokemon.stats
    .map((stat) => {
    return `<p class="animate__fadeInLeftBig l2">${stat.stat.name}: ${stat.base_stat}</p>`;
    }).join("")}
    </div>

    <div class="abilities">
        <h4 class="animate__bounce">ability<h4>
        ${pokemon.abilities
        .map((ability) => {
        return `<p class="animate__fadeInDown l1">${ability.ability.name}</p>`;
        })
        .join("")}
        <div>
      

`

////////////////////
//// black mode ///
//////////////////





pokemonContainer.appendChild(pokemonEl)

}


getPokemon();







