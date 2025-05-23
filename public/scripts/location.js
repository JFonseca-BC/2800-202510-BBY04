/**
 * Retrieves the user's current geographic location using the Geolocation API,
 * performs reverse geocoding with OpenStreetMap's Nominatim API to get a readable
 * city and country, and displays it in the element with ID 'userLocation'.
 * 
 * Displays appropriate messages if location access is denied, unsupported, or fails.
 */
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    // Use OpenStreetMap Nominatim API for reverse geocoding
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();
                    
                    let locationText = '';
                    if (data.address) {
                        const city = data.address.city || data.address.town || data.address.village || '';
                        const country = data.address.country || '';
                        locationText = `${city}${city && country ? ', ' : ''}${country}`;
                    }
                    
                    if (locationText) {
                        document.getElementById('userLocation').textContent = locationText;
                    } else {
                        document.getElementById('userLocation').textContent = 'Location unavailable';
                    }
                } catch (error) {
                    console.error('Error getting location:', error);
                    document.getElementById('userLocation').textContent = 'Location unavailable';
                }
            },
            (error) => {
                console.error('Geolocation error:', error);
                document.getElementById('userLocation').textContent = 'Location access denied';
            }
        );
    } else {
        document.getElementById('userLocation').textContent = 'Geolocation not supported';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', getUserLocation);