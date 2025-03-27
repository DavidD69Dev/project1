// Sélection des éléments des filtres
const categoryFilters = document.querySelectorAll('input[name="category"]');
const priceFilters = document.querySelectorAll('input[name="price"]');
const ratingFilters = document.querySelectorAll('input[name="rating"]');

// Sélection des vignettes des restaurants
const restaurants = document.querySelectorAll(".thumbnail");

// Fonction pour appliquer les filtres
function applyFilters() {
	// Données filtres.
	const filterCategory = getSelectedFilter(categoryFilters);
	const filterCategoryValue = filterCategory ? filterCategory.value : null;
	const filterPrice = getSelectedFilter(priceFilters);
	const filterPriceValue = filterPrice ? filterPrice.value : null;
	const filterPriceMin = filterPrice ? Number(filterPrice.getAttribute("data-price-min")) : null;
	const filterPriceMax = filterPrice ? Number(filterPrice.getAttribute("data-price-max")) : null;
	const filterRating = getSelectedFilter(ratingFilters);
	const filterRatingValue = filterRating ? filterRating.value : null;

	restaurants.forEach((restaurant) => {
		// Données restaurant.
		const restoCategory = restaurant.querySelector(".resto-type").textContent.trim();
		const restoPrices = restaurant.querySelector(".resto-price");
		const restoPriceMin = Number(restoPrices.getAttribute("data-prix-min"));
		const restoPriceMax = Number(restoPrices.getAttribute("data-prix-max"));
		const restoRating = Number(restaurant.querySelector(".resto-stars").textContent.trim());

		// Vérification de la correspondance des filtres.
		const matchesCategory = filterCategory ? restoCategory.includes(filterCategoryValue) || filterCategoryValue == "None" : true;
		const matchesPrice = (
			filterPriceValue == "None"
			?
            true
			:
            (
                (filterPriceMin ? filterPriceMin <= restoPriceMin : true)
                &&
			    (filterPriceMax ? restoPriceMax <= filterPriceMax : true)
            )
        );
		const matchesRating = filterRating ? restoRating == filterRatingValue.length || filterRatingValue == "None": true;

		// Affichage ou masquage de la vignette selon les filtres
		if (matchesCategory && matchesPrice && matchesRating) {
			restaurant.style.display = "block";
		} else {
			restaurant.style.display = "none";
		}
	});
}

// Fonction pour obtenir la valeur sélectionnée d'un groupe de filtres
function getSelectedFilter(filters) {
	let selectedFilter = "";
	filters.forEach((filter) => {
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


/* carousel  */

const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

buttons.forEach((button) => {
	button.addEventListener("click", (btn) => {
		const calculNextSlide = btn.target.id === "next" ? 1 : -1;
		const slideActive = document.querySelector(".active");

		newIndex = [...slides].indexOf(slideActive) + calculNextSlide;

		if (newIndex < 0) newIndex = [...slides].length - 1;
		if (newIndex >= [...slides].length) newIndex = 0;

		slides[newIndex].classList.add("active");

		slideActive.classList.remove("active");
	});
});
