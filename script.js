function ajouterPanier(nom, prix) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push({ nom, prix });
  localStorage.setItem("panier", JSON.stringify(panier));
  alert("Article ajouté au panier !");
}

function afficherPanier() {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  let liste = document.getElementById("listePanier");
  let total = 0;

  liste.innerHTML = "";

  panier.forEach(article => {
    let li = document.createElement("li");
    li.textContent = article.nom + " - " + article.prix + " DT";
    liste.appendChild(li);
    total += article.prix;
  });

  document.getElementById("total").textContent =
    "Total : " + total + " DT";
}
