const container = document.querySelector('.container')

const getFormData = async (e) => {
    e.preventDefault();
    const pokemon = e.target.pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    const res = await fetch(url)
    const data = await res.json();

    render(data)
//Check if valid up here before passing data

};  

const render = (data) => {
    container.innerHTML = ' '
    let newHtml;
    console.log(data)
    if(data) {
        const pokemon = data
        newHtml = document.createElement('div')
        newHtml.innerHTML = `
        <div class="card">
            <h2>${pokemon.name}</h2>
            <img id="image" src="${pokemon.sprites.front_default}" width="200" height="200">
        </div>
        `

    }
    else {
        newHtml = document.createElement('h2')
        newHtml.innerText = "Cannot find that pokemon"
        
    }
    container.append(newHtml)
};


const form = document.querySelector('#form');
form.addEventListener('submit', getFormData)