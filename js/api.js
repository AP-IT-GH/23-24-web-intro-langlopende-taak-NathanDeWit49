const diensten = ["encryptie op maat", "consultatie", "implementatie", "sleutelbeheer", "onderhoud/updating", "data-encryptie training", "encryptie op maat, sleutelbeheer", "encryptie op maat, onderhoud/updating", "encryptie op maat, sleutelbeheer, onderhoud/updating", "implementatie, sleutelbeheer", "implementatie, onderhoud/updating", "implementatie, sleutelbeheer, onderhoud/updating"]
function random_item(diensten) {
    return diensten[Math.floor(Math.random() * diensten.length)];
}

fetch('https://fakerapi.it/api/v1/companies?_quantity=8')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })

    .then(function (response) {
        console.log(response);
        let html = '<section class="row">';
        // plaats van de gebruikers met afbeelding, naam,...in HTML
        for (let i = 0; i < response.data.length; i++) {
            const company = response.data[i];
            html += `<div class="card card-blue col-12 col-sm-6 col-md-4 col-lg-3">

			<div class="card-body">
			<p class="card-title text-uppercase h4 fw-bolder pt-3">${company.name}</p>
			<p class="card-text h6 small mt-2">gebruikte diensten: ${random_item(diensten)}</p>
			<p class="card-subtitle text-uppercase h5 fw-bolder pt-2">Contact</p>
            <a href="mailto:${company.email}">
			  ${company.email}
			</a>
            <a href="tel:${company.phone}">
                ${company.phone}
            </a>
            </div>
      </div>`;
        }
        html += '</section>';
        document.getElementById("companies").innerHTML = html;
    })