/*Parâmetros da URL*/
const idPaisParam = new URLSearchParams(window.location.search).get("country_id");
const nomePaisParam = new URLSearchParams(window.location.search).get("country_name");

document.querySelector("#nome_pais").innerHTML = nomePaisParam;

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
            <tr>
                <td style="text-align: center;"><img class="img-responsive mx-auto text-center" width="30px" height="30px" src="${time.logo}" alt="..."></td>
                <td class="text-center">${time.name}</td>
                <td class="text-center">${time.short_code}</td>
                <td class="text-center">${time.country.name}</td>
                <td class="text-center">${time.country.continent}</td>
            </tr>
        `;
    })
}
obterTimes();