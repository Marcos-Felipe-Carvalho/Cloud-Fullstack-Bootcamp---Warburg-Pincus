const url = "https://app.sportdataapi.com/api/v1/soccer"; //url da API SportData
const apikey = "dbfdf510-703f-11ed-a203-4fc2193fc871"; // chave de acesso da API SportData

const obterPaises = async () =>{ 
    try{
        const response = await fetch(`${url}/countries?apikey=${apikey}`); 
        const paises = await response.json();
        criarEstruturaPaises(paises);
    }catch(error){
        console.error(error);
    }
}

const criarEstruturaPaises = (paises) =>{
    console.log(paises.data);

    paises.data.forEach(element =>{
        let div = document.querySelector("#paises");
        let button = document.createElement("button");
        button.classList.add("list-group-item");
        button.classList.add("list-group-item-action");
        let texto = document.createTextNode(element.name);
        button.appendChild(texto);
        div.appendChild(button);

        button.addEventListener('click', ()=>{
            window.location.href = `times.html?country_id=${element.country_id}&country_name=${element.name}`
        })
    })
}

obterPaises();