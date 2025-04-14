const lstFilms = document.getElementById("filmSelect");
const lstSalles = document.getElementById("salleSelect");
const dateInput = document.getElementById("dateInput");
const btnValider = document.getElementById("btnValider");
const frmPlanification = document.getElementById("planificationForm");
const message = document.getElementById("message");

var date = null;
var salle = null;
var film = null;

var estSelectione = [];

function initPage() {
  estSelectione["film"] = false;
  (estSelectione["salle"] = false), (estSelectione["date"] = false);
  lstFilms.value = 0;
  dateInput.value = null;
  lstSalles.value = 0;
  desactiverElement(lstSalles);
  desactiverElement(btnValider);
}

function activerElement(element) {
  element.removeAttribute("disabled");
}

function desactiverElement(element) {
  element.setAttribute("disabled", "disabled");
}

/* 1- Afficher la page */
function afficherPage() {
  /* Charger la liste des films */
  films.forEach((film) => {
    addFilm(film);
  });

  // État 1 : Page initialisée (bouton et liste des salles désactivés).
  initPage();
}

function addFilm(film) {
  lstFilms.append(newOption(film.id, film.titre));
}

function newOption(value, text) {
  const opt = document.createElement("option");
  opt.value = value;
  opt.textContent = text;
  return opt;
}

document.addEventListener("DOMContentLoaded", afficherPage);

/* 2- Selectionner film */

function rechercherFilm(idFilm) {
  let tFilm = films.filter((film) => film.id == idFilm);
  return tFilm.length > 0 ? tFilm[0] : null;
}

lstFilms.addEventListener("change", function selectionnerFilm() {
  let idFilm = parseInt(this.value);

  film = rechercherFilm(idFilm);

  estSelectione["film"] = film != null;
});

/* 3- Selectionner date */

dateInput.addEventListener("change", function selectionnerDate() {
  date = this.value;

  // Réinitialiser la liste
  lstSalles.innerHTML = '<option value="0">Sélectionnez une salle</option>';

  // Ajouter les salles libres à la liste
  salles.forEach((salle) => {
    if (salle.estLibre(date))
      lstSalles.appendChild(newOption(salle.num, salle.description));
  });

  // État 2 : Date sélectionnée (liste des salles activée).
  estSelectione["date"] = date != null;
  if (estSelectione["date"] && lstSalles.options.length > 1)
    activerElement(lstSalles);
  else message.textContent = `Aucune salle n'est libre à la date : ${date}.`;
});

/* 4- Selectionner salle */

function rechercherSalle(numSalle) {
  let tSalle = salles.filter((salle) => salle.num == numSalle);
  return tSalle.length > 0 ? tSalle[0] : null;
}

lstSalles.addEventListener("change", function selectionnerSalle() {
  let numSalle = parseInt(this.value);

  salle = rechercherSalle(numSalle);

  // État 3 : Salle sélectionnée (bouton de validation activé).
  estSelectione["salle"] = salle != null;
  if (estSelectione["salle"] && lstSalles.options.length > 1)
    activerElement(btnValider);
  else message.textContent = `Vous devez sélectioné une salle.`;
});

/* 4- Valider planification */

frmPlanification.addEventListener("submit", function planifier(e) {
  e.preventDefault();

  if (
    estSelectione["film"] &&
    estSelectione["date"] &&
    estSelectione["salle"]
  ) {
    /* Créer une nouvelle projection */
    let projection = new Projection(film, salle, date);

    /* Sauvegarder la projection*/
    sauvegarderProjection(projection);
    supprimerSalle(salle.num); // Enlever la salle de la liste

    message.textContent = `Projection de "${film.titre}" planifiée dans ${salle.description} le ${date}.`;

    /* Revenir à l'état initial */
    initPage();
  } else {
    message.textContent = "Veuillez remplir tous les champs.";
  }
});

function sauvegarderProjection(projection) {
  projections.push(projection);
  salle.addProjection(projection);
  film.addProjection(projection);
}

function supprimerSalle(num) {
  lstSalles.removeChild(lstSalles[lstSalles.selectedIndex]);
  lstSalles.value = 0;
}
