function filterRestaurants() {
    // Récupérer les valeurs sélectionnées
    const selectedCategory = document.querySelector('input[name="category"]:checked')?.value;
    const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;
    const selectedRating = document.querySelector('input[name="rating"]:checked')?.value;

    // Filtrer les restaurants
    const filteredRestaurants = restaurants.filter(restaurant => {
        return (
            (!selectedCategory || restaurant.category === selectedCategory) &&
            (!selectedPrice || checkPriceRange(restaurant.price, selectedPrice)) &&
            (!selectedRating || restaurant.rating >= parseInt(selectedRating))
        );
    });

    // Afficher les résultats
    displayRestaurants(filteredRestaurants);
}