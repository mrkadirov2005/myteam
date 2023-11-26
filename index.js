function getShoppingInfo() {
    return fetch('http://localhost:3000/shopping')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Shopping Info:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching shopping info:', error);
        });
}

// Example usage:
getShoppingInfo()
