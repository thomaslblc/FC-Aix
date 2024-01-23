// FILTER //

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