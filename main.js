const container = document.querySelector('.container')

const getFormData = async (e) => {
    e.preventDefault();
    const pokemon = e.target.pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    const res = await fetch(url)
    const data = await res.json();

    render(data)

};  

const render = (data) => {
    container.innerHTML = ' '
    let newHtml;
    if(data.status ==' ok') {
        const pokemon = data.pokemon
        newHtml = document.createElement('div')
        newHtml.innerHTML = `
         <div class="card">
    <div class="container">
        <img src="{{pokemon.name}}" width="250" height="250">
        <h3>Name : {{pokemon.sprite}}</h3>
    </div>
</div>
`
    }
    else {
        const errorMessage = document.createElement('h2')
        errorMessage.innerText = dataMessage
        search.append(errorMessage)
        
    }
    container.append(newHtml)
};


const form = document.querySelector('form');
form.addEventListener('submit', getFormData)