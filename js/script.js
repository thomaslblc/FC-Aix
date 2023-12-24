// FILTER //

document.addEventListener('DOMContentLoaded', function () {
    var matchFilters = document.querySelectorAll('.matchs-filter');
    var matchMainDivs = document.querySelectorAll('.match-main');

    // Ajoute un gestionnaire d'événement à chaque élément li
    matchFilters.forEach(function (filter, index) {
        filter.addEventListener('click', function () {
            // Retire la classe .filter-active de l'élément actuellement actif
            var activeFilter = document.querySelector('.filter-active');
            if (activeFilter) {
                activeFilter.classList.remove('filter-active');
            }

            // Ajoute la classe .filter-active à l'élément cliqué
            filter.classList.add('filter-active');

            // Masque tous les contenus alternatifs
            matchMainDivs.forEach(function (div) {
                div.classList.remove('filter-active-content');
            });

            // Affiche le contenu alternatif correspondant
            var selectedContentClass = 'equipe' + filter.classList[1].substring(6);
            var selectedContentDiv = document.querySelector('.' + selectedContentClass);
            if (selectedContentDiv) {
                selectedContentDiv.classList.add('filter-active-content');
            }
        });
    });
});