/*Parâmetros da URL*/
const idPaisParam = new URLSearchParams(window.location.search).get("country_id");

/*Sportdata api*/
const url = "https://app.sportdataapi.com/api/v1/soccer";
const apiKey = "dbfdf510-703f-11ed-a203-4fc2193fc871";

const obterTimes = async ()=>{
    try {
        const response = await fetch(`${url}/teams?apikey=${apiKey}&country_id=${idPaisParam}`);
        const times = await response.json();
        criarEstruturaTimes(times);
    } catch (error) {
        console.log(error)
    }
}

const criarEstruturaTimes = (times)=>{
    times.data.forEach((time)=>{
        console.log(time);
        divTimes = document.querySelector("#times").innerHTML += `
            <div class="col-2">
                <div class="card">
                    <img src="${time.logo}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${time.name}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${time.short_code}</li>
                            <li class="list-group-item">${time.name}</li>
                            <li class="list-group-item">${time.country.name}</li>
                            <li class="list-group-item">${time.country.continent}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    })
}
obterTimes();