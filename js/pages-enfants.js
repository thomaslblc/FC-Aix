document.addEventListener("DOMContentLoaded", function() {
    const pagesEnfants = document.querySelector(".pages-enfants");
    const elements = pagesEnfants.querySelectorAll("a");

    // Appliquer le nombre de colonnes en fonction du nombre d'éléments
    const nombreColonnes = elements.length % 2 === 0 ? 2 : 3;
    pagesEnfants.style.gridTemplateColumns = `repeat(${nombreColonnes}, 1fr)`;
});