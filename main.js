
/*
async function fetchData() {
    const url='https://hp-api.onrender.com/api/characters';

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log('error al consultar datos');
    }
}*/

    fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
      let html = '';
      data.forEach(item => {
        html += `
        
    <div class="card" style="padding: 10px; width: 230px" >
        <img src="${item.image}" style="width:auto; height:300px;>
        <div class="container">
            <h3>${item.name}</h3>
            <div>
                <p> Interpretado por: <h5>${item.actor}</h5></p>
            </div>
            <div clas "row">
                <p>Genero: ${item.gender.charAt(0).toUpperCase()}</p>
            </div>
            <div>
                <p>Casa: ${item.house}</p>
            </div>
        </div>
    </div>
    <br>
        `
        ;
      });
      document.getElementById('container').innerHTML = html;
    });

