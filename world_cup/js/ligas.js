//query string
const urlParam = new URLSearchParams(window.location.search); 
const paisId = urlParam.get("country_id");

//sport API
const url = "https://app.sportdataapi.com/api/v1/soccer";
const apikey = "dbfdf510-703f-11ed-a203-4fc2193fc871";

const obterLigas = async () =>{
    try{
        const response = await fetch(`${url}/leagues?apikey=${apikey}&country_id=${paisId}`);
        let ligas = await response.json();
        ligas = await ligas.data;
        criarEstruturaLigas(ligas);
    }catch(error){
        console.error(error);
    }
}

const criarEstruturaLigas = (ligas) => {
    let div = document.querySelector("#ligas");
   for(let i in ligas){
    let button = document.createElement("button");
    button.classList.add("list-group-item");
    button.classList.add("list-group-item-action");


    let texto = document.createTextNode(ligas[i].name);
    button.appendChild(texto);
    div.appendChild(button);
   }
}

obterLigas();