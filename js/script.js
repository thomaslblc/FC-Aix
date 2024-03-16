// FILTER HOME//

document.addEventListener('DOMContentLoaded', function () {
    var matchFilters = document.querySelectorAll('.matchs-filter');
    var matchMainDivs = document.querySelectorAll('.match-main');

    matchFilters.forEach(function (filter, index) {
        filter.addEventListener('click', function () {

            var activeFilter = document.querySelector('.filter-active');
            if (activeFilter) {
                activeFilter.classList.remove('filter-active');
            }

            filter.classList.add('filter-active');

            matchMainDivs.forEach(function (div) {
                div.classList.remove('filter-active-content');
            });

            var selectedContentClass = 'equipe' + filter.classList[1].substring(6);
            var selectedContentDiv = document.querySelector('.' + selectedContentClass);
            if (selectedContentDiv) {
                selectedContentDiv.classList.add('filter-active-content');
            }
        });
    });
});

// FILTER TEAMS & STAFF //
// Fonction pour masquer tous les éléments avec la classe 'team-layout-container' sauf celui avec la classe 'players'
function showPlayersSection() {
    document.querySelector('.team-layout-container.players').classList.remove('hidden');
    document.querySelector('.team-layout-container.staff').classList.add('hidden');
}

// Fonction pour masquer tous les éléments avec la classe 'team-layout-container' sauf celui avec la classe 'staff'
function showStaffSection() {
    document.querySelector('.team-layout-container.staff').classList.remove('hidden');
    document.querySelector('.team-layout-container.players').classList.add('hidden');
}

// Initialisation : masquer la section staff par défaut
showPlayersSection();

// Ajouter des écouteurs d'événements pour les filtres
document.addEventListener('DOMContentLoaded', function () {
    const filterPlayers = document.querySelector('.filterPlayers');
    const filterStaff = document.querySelector('.filterStaff');

    filterPlayers.addEventListener('click', function () {
        showPlayersSection();
        // Ajouter ou supprimer la classe 'filter-active' selon vos besoins
        filterPlayers.classList.add('filter-active');
        filterStaff.classList.remove('filter-active');
    });

    filterStaff.addEventListener('click', function () {
        showStaffSection();
        // Ajouter ou supprimer la classe 'filter-active' selon vos besoins
        filterStaff.classList.add('filter-active');
        filterPlayers.classList.remove('filter-active');
    });
});
