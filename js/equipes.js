fetch('../equipea.json')
    .then(response => response.json())
    .then(data => {
        // Sélectionnez les conteneurs dans le DOM
        var goalkeepersContainer = document.querySelector('.goalkeepers .team-cards-display');
        var defendersContainer = document.querySelector('.defenders .team-cards-display');
        var midfieldersContainer = document.querySelector('.midfielders .team-cards-display');
        var forwardsContainer = document.querySelector('.forwards .team-cards-display');

        // Parcourez la liste des joueurs dans le JSON
        data.joueurs.forEach(function(joueur) {
            // Créez des éléments HTML dynamiquement
            var joueurElement = document.createElement('div');
            joueurElement.innerHTML = `
                <h2>${joueur.prenom ? joueur.prenom + ' ' : ''}${joueur.nom}</h2>
                <p>${joueur.nationalite.map(nation => `<span class="flag-icon flag-icon-${nation.toLowerCase()}"></span>`).join(' ')}</p>
                <p>${joueur.numeroMaillot}</p>
                <!-- Ajoutez d'autres détails du joueur au besoin -->
            `;

            // Sélectionnez le conteneur approprié en fonction de la position du joueur
            var container;
            switch (joueur.position) {
                case 'Gardien de But':
                    container = goalkeepersContainer;
                    break;
                case 'Défenseur':
                    container = defendersContainer;
                    break;
                case 'Milieu de Terrain':
                    container = midfieldersContainer;
                    break;
                case 'Attaquant':
                    container = forwardsContainer;
                    break;
                default:
                    // Si la position n'est pas reconnue, ignorez ce joueur
                    return;
            }

            // Ajoutez l'élément du joueur au conteneur approprié
            container.appendChild(joueurElement);
        });
    })
    .catch(error => console.error('Erreur de chargement du fichier JSON:', error));
