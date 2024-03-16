function createstaffCard(staff) {
    const card = document.createElement('div');
    card.classList.add('player-card', 'staff');

    const flags = staff.nationalite.map(flag => `<span class="flag-icon flag-icon-${flag.toLowerCase()}"></span>`).join('');
    const flagIcons = flags || ''; // Si flags est vide, éviter que la description alternative soit "undefined"

    let staffName = '';
    if (staff.prenom) {
        staffName += `${staff.prenom}`;
    }
    if (staff.prenom && staff.nom) {
        staffName += ' ';
    }
    if (staff.nom) {
        staffName += `<strong>${staff.nom}</strong>`;
    }

    staffName = staffName.trim() || 'Nom inconnu';

    card.innerHTML = `
        <div class="visuel">
            <img src="${staff.photo}" alt="Photo de ${staff.prenom || ''} ${staff.nom || ''}">
        </div>
        <div class="contenu">
        <div class="role">
        <p>${staff.role}</p>
        </div>
            <div class="infos">
                <span>${staffName}</span>
                <p>${flagIcons}</p>
            </div>
            
        </div>
    `;

    return card;
}

// Charger le fichier JSON
fetch('../equipefem.json')
    .then(response => response.json())
    .then(data => {
        // Afficher les joueurs dans les div correspondantes
        data.staff.technique.forEach(staff => {
            const card = createstaffCard(staff);
            document.querySelector('.technique').appendChild(card);
        });

        data.staff.medical.forEach(staff => {
            const card = createstaffCard(staff);
            document.querySelector('.medical').appendChild(card);
        });

        data.staff.video.forEach(staff => {
            const card = createstaffCard(staff);
            document.querySelector('.video').appendChild(card);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
