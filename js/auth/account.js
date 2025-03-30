// Fonction pour mettre à jour la photo de profil
function updateProfilePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const profilePhoto = document.getElementById('profilePhoto');
        const profileIcon = document.getElementById('profileIcon');
        profilePhoto.src = URL.createObjectURL(file);
        profilePhoto.classList.remove('d-none');
        profileIcon.classList.add('d-none');
    }
}

// Fonction pour supprimer la photo de profil
function removeProfilePhoto() {
    const profilePhoto = document.getElementById('profilePhoto');
    const profileIcon = document.getElementById('profileIcon');
    profilePhoto.src = '';
    profilePhoto.classList.add('d-none');
    profileIcon.classList.remove('d-none');
}

let vehicleCount = 1;

function addVehicleSection(event) {
    event.preventDefault();

    const vehicleContainer = document.getElementById('vehicleContainer');
    const newVehicle = document.createElement('fieldset');
    newVehicle.className = 'border rounded-3 p-3 mt-3';
    newVehicle.innerHTML = `
        <legend>Véhicule ${++vehicleCount}</legend>
        <div class="mb-3">
            <label for="LicensePlateInput${vehicleCount}" class="form-label">Plaque d'immatriculation</label>
            <input type="text" class="form-control" id="LicensePlateInput${vehicleCount}">
        </div>
        <div class="mb-3">
            <label for="LicenseDateInput${vehicleCount}" class="form-label">Date de première immatriculation</label>
            <input type="date" class="form-control" id="LicenseDateInput${vehicleCount}">
        </div>
        <div class="mb-3">
            <label for="VehicleBrandInput${vehicleCount}" class="form-label">Marque du véhicule</label>
            <input type="text" class="form-control" id="VehicleBrandInput${vehicleCount}">
        </div>
        <div class="mb-3">
            <label for="VehicleModelInput${vehicleCount}" class="form-label">Modèle du véhicule</label>
            <input type="text" class="form-control" id="VehicleModelInput${vehicleCount}">
        </div>
        <div class="mb-3">
            <label for="VehicleColorInput${vehicleCount}" class="form-label">Couleur du véhicule</label>
            <input type="text" class="form-control" id="VehicleColorInput${vehicleCount}">
        </div>
        <div class="mb-3">
            <label for="VehicleEnergyInput${vehicleCount}" class="form-label">&Eacute;nergie du véhicule</label>
            <select id="VehicleEnergyInput${vehicleCount}" class="form-select">
                <option value="">--- Choisir ---</option>
                <option value="Electrique">Electrique</option>
                <option value="Hybride">Hybride</option>
                <option value="Essence">Essence</option>
                <option value="Diesel">Diesel</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="AvailablePlacesInput${vehicleCount}" class="form-label">Nombres de places disponibles</label>
            <input type="number" class="form-control" id="AvailablePlacesInput${vehicleCount}" placeholder="Combien vous êtes habituellement ?" value="4" name="NbConvives">
        </div>
    `;
    vehicleContainer.appendChild(newVehicle);
}