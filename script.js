function afficherTitre(data) {
    //Affichage pour la présentation de la boutique
    let h1 = document.createElement("h1");
    h1.textContent = data.nomEntreprise;

    let p = document.createElement("p");
    p.setAttribute("id", "slogan");
    p.textContent = data.slogan;

    let button = document.createElement("button");
    button.setAttribute("id", "btnDevis");
    button.textContent = data.bouton;

    //Placer les éléments créés
    sctPresentation.appendChild(h1);
    sctPresentation.appendChild(p);
    sctPresentation.appendChild(button);
}

function afficherTemoignages(data) {
    //Récupération du tableau d'objet des produits
    const temoignages = data.listeBeneficesClients;

    //Boucle pour afficher les témoignages des clients
    temoignages.forEach(element => {
        console.log(element);
        
        let p = document.createElement("p");
        p.setAttribute("class", "engagement");
        p.textContent = element;
        sctTemoignages.appendChild(p);
    });
}

function afficherProduits (data) {
    //Récupération du tableau d'objet des produits
    const produits = data.produits;

    //Boucle pour afficher chaque produit dans une carte
    produits.forEach(element => {
        console.log(element);
        
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let img = document.createElement("img");
        // img.src = element[image-url];
        img.setAttribute("src", `${element["image-url"]}`)

        let h3 = document.createElement("h3");
        h3.textContent = `${element.titre}`;

        let p = document.createElement("p");
        p.textContent = `${element.presentation}`;

        //Placer les éléments créés
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        sctProduits.appendChild(div);

    });
    
}

function afficherCommentaire(data) {
    //Récupération du tableau d'objet des clients
    const clients = data.clients;

    //Boucle pour afficher chaque commentaire des clients dans un bloc
    clients.forEach(element => {
        let div = document.createElement("div");
        div.setAttribute("class", "comments");

        let h3 = document.createElement("h3");
        h3.textContent = `De ${element.nom}`;

        let h4 = document.createElement("h4");
        h4.textContent = `Type de prestation : ${element.typePrestation}`;

        let p = document.createElement("p");
        p.textContent = `"${element.commentaire}"`;

        let h5 = document.createElement("h5");
        h5.textContent = `Note : ${element.note} étoiles`;

        //Placer les éléments créés
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(h5);
        sctCommentaires.appendChild(div);
    });
}

//Liaison des éléments HTML au JavaScript
const main = document.getElementById("main");
const sctPresentation = document.getElementById("presentation");
const sctTemoignages = document.getElementById("temoignages");
const sctProduits = document.getElementById("produits");
const sctCommentaires = document.getElementById("commentaires");

fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json")
.then(response => response.json())
.then(data => {
    console.log(data);

    afficherTitre(data);
    afficherTemoignages(data);
    afficherProduits(data);
    afficherCommentaire(data);
})


//Gestion de la map à l'aide de leaflet.js

var map = L.map('map').setView([45.741429346346024, 4.839417331016642], 17);
var marker = L.marker([45.741429346346024, 4.839417331016642]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);