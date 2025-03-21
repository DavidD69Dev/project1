// Sélection des éléments des filtres
const categoryFilters = document.querySelectorAll('input[name="category"]');
const priceFilters = document.querySelectorAll('input[name="price"]');
const ratingFilters = document.querySelectorAll('input[name="rating"]');

// Sélection des vignettes des restaurants
const restaurants = document.querySelectorAll('.thumbnail');

// Fonction pour appliquer les filtres
function applyFilters() {
    
    const selectedCategory = getSelectedFilter(categoryFilters);
    const selectedCategoryValue = (selectedCategory ? selectedCategory.value : null);
    const selectedPrice = getSelectedFilter(priceFilters);
    const selectedPriceMin = (selectedPrice ? selectedPrice.getAttribute("data-price-min") : null);
    const selectedPriceMax = (selectedPrice ? selectedPrice.getAttribute("data-price-max") : null);
    const selectedRating = getSelectedFilter(ratingFilters);
    const selectedRatingValue = (selectedRating ? selectedRating.value : null);

    console.log("==============================")
    console.log("selectedCategoryValue = " + selectedCategoryValue);
    console.log("selectedPriceMin = " + selectedPriceMin);
    console.log("selectedPriceMax = " + selectedPriceMax);
    console.log("selectedRatingValue = " + selectedRatingValue);

    

    restaurants.forEach(restaurant => {
        const category = restaurant.querySelector('.resto-type').textContent.trim();
        /*const priceRange = restaurant.querySelector('.resto-price').textContent.trim();*/
        const rating = restaurant.querySelector('.resto-stars').textContent.trim();
        console.log("|" + category + "|");
        console.log("|" + selectedCategory + "|");


        // Vérification de la correspondance des filtres
        const matchesCategory = selectedCategory ? category.includes(selectedCategoryValue) : true;
        /*const matchesPrice = selectedPrice ? priceRange.includes(selectedPrice) : true;*/
        const matchesRating = selectedRating ? Number(rating) == selectedRatingValue.length : true;
        console.log("matchesCategory = " + matchesCategory);
        console.log("matchesRating = " + matchesRating);

        // Affichage ou masquage de la vignette selon les filtres
        if (matchesCategory /*&& matchesPrice*/ && matchesRating) {
            restaurant.style.display = 'block';
        } else {
            restaurant.style.display = 'none';
        }
    });
}

// Fonction pour obtenir la valeur sélectionnée d'un groupe de filtres
function getSelectedFilter(filters) {
    let selectedFilter = '';
    filters.forEach(filter => {
        if (filter.checked) {
            selectedFilter = filter;
        }
    });
    return selectedFilter;
}

// Ajout des événements aux filtres
document.getElementById("categoryList").addEventListener("change", applyFilters);
document.getElementById("priceList").addEventListener("change", applyFilters);
document.getElementById("ratingList").addEventListener("change", applyFilters);

// Initialisation des filtres au chargement de la page
applyFilters();
