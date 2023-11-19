// FILTER //

document.addEventListener('DOMContentLoaded', function () {
    var matchFilters = document.querySelectorAll('.matchs-filter');

    // Ajoute un gestionnaire d'événement à chaque élément li
    matchFilters.forEach(function (filter) {
        filter.addEventListener('click', function () {
            // Retire la classe .filter-active de l'élément actuellement actif
            var activeFilter = document.querySelector('.filter-active');
            if (activeFilter) {
                activeFilter.classList.remove('filter-active');
            }

            // Ajoute la classe .filter-active à l'élément cliqué
            filter.classList.add('filter-active');
        });
    });
});