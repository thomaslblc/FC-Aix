function createPlayerCard(player) {
    const card = document.createElement('div');
    card.classList.add('player-card');

    const flags = player.nationalite.map(flag => `<span class="flag-icon flag-icon-${flag.toLowerCase()}"></span>`).join('');
    const flagIcons = flags || ''; // Si flags est vide, éviter que la description alternative soit "undefined"

    let playerName = '';
    if (player.prenom) {
        playerName += `${player.prenom}`;
    }
    if (player.prenom && player.nom) {
        playerName += ' ';
    }
    if (player.nom) {
        playerName += `<strong>${player.nom}</strong>`;
    }

    playerName = playerName.trim() || 'Nom inconnu';

    card.innerHTML = `
        <div class="visuel">
            <img src="${player.photo}" alt="Photo de ${player.prenom || ''} ${player.nom || ''}">
        </div>
        <div class="contenu">
            <div class="infos">
                <span>${playerName}</span>
                <p>${flagIcons}</p>
            </div>
            <div class="numero">
                <p>${player.numeroMaillot}</p>
            </div>
        </div>
    `;

    return card;
}

// Charger le fichier JSON
fetch('../equipepro.json')
    .then(response => response.json())
    .then(data => {
        // Afficher les joueurs dans les div correspondantes
        data.joueurs.goalkeepers.forEach(player => {
            const card = createPlayerCard(player);
            document.querySelector('.goalkeepers').appendChild(card);
        });

        data.joueurs.defenders.forEach(player => {
            const card = createPlayerCard(player);
            document.querySelector('.defenders').appendChild(card);
        });

        data.joueurs.midfielders.forEach(player => {
            const card = createPlayerCard(player);
            document.querySelector('.midfielders').appendChild(card);
        });

        data.joueurs.forwards.forEach(player => {
            const card = createPlayerCard(player);
            document.querySelector('.forwards').appendChild(card);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
