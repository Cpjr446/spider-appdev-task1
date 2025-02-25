// Sample data for ingredients and recipes
const ingredients = [
    "Tomato",
    "Onion",
    "Garlic",
    "Chicken",
    "Carrot",
    "Potato",
    "Cheese",
    "Rice",
    "Lentils",
    "Coconut",
    "Curry Leaves",
    "Mustard Seeds",
    "Urad Dal",
    "Ginger",
    "Green Chilies",
    "Basil",
    "Mozzarella",
    "Pasta",
    "Bread",
    "Olive Oil",
    "Yoghurt",
    "Tomato Puree", 
    "Ginger-Garlic Paste", 
    "Cashew Nuts",
    "Butter", 
    "Oil",
    "Garam Masala",
    "Cumin Seeds",
    "Tortilla"
];

const recipes = [
    {
        name: "Tomato Soup",
        cuisine: "American",
        ingredients: ["Tomato", "Onion", "Garlic"],
        image: "Images/tomato_soup.jpeg",
        procedure:
       `Saute onions and garlic. 
        Add tomatoes and cook until soft.
        Blend and serve.`,
        preparationTime: "30 minutes",
        dietaryRestrictions: "Vegan"
    },
    {
        name: "Chicken Salad",
        cuisine: "American",
        ingredients: ["Chicken", "Carrot", "Potato"],
        image: "Images/chicken_salad.jpeg",
        procedure: 
        ` Boil chicken and vegetables. 
          Mix with dressing.
          Serve chilled.`,
        preparationTime: "45 minutes",
        dietaryRestrictions: "Gluten-Free"
    },
    {
        name: "Idli",
        cuisine: "South Indian",
        ingredients: ["Rice", "Urad Dal"],
        image: "Images/idli.jpeg",
        procedure: 
       ` Soak rice and urad dal separately for 4-6 hours. 
         Grind to a fine paste and mix. 
         Ferment overnight. 
         Steam in idli molds and serve hot with chutney.`,
        preparationTime: "12 hours (including fermentation)",
        dietaryRestrictions: "Vegan, Gluten-Free"
    },
    {
        name: "Dosa",
        cuisine: "South Indian",
        ingredients: ["Rice", "Urad Dal"],
        image: "Images/dosa.jpg",
        procedure: 
        ` Soak rice and urad dal separately for 4-6 hours. 
          Grind to a fine paste and mix. 
          Ferment overnight.
          Spread batter thinly on a hot griddle and cook until crispy. Serve with chutney and sambar.`,
        preparationTime: "12 hours (including fermentation)",
        dietaryRestrictions: "Vegan, Gluten-Free"
    },
    {
        name: "Sambar",
        cuisine: "South Indian",
        ingredients: ["Lentils", "Tomato", "Onion", "Carrot", "Potato", "Curry Leaves", "Mustard Seeds"],
        image: "Images/sambar.jpg",
        procedure: 
       ` Cook lentils until soft. 
         In a pot, heat oil and add mustard seeds, curry leaves, and chopped vegetables. 
         Add cooked lentils, tamarind juice, and spices.
         Simmer until vegetables are tender. Serve hot.`,
        preparationTime: "1 hour",
        dietaryRestrictions: "Vegan, Gluten-Free"
    },
    {
        name: "Rasam",
        cuisine: "South Indian",
        ingredients: ["Tomato", "Garlic", "Tamarind", "Curry Leaves", "Mustard Seeds"],
        image: "Images/rasam.jpeg",
        procedure: 
        ` In a pot, heat oil and add mustard seeds, curry leaves, and crushed garlic.
          Add chopped tomatoes and tamarind juice.
          Add water and spices, and simmer for 15-20 minutes. Serve hot.`,
        preparationTime: "30 minutes",
        dietaryRestrictions: "Vegan, Gluten-Free"
    },
    {
        name: "Pongal",
        cuisine: "South Indian",
        ingredients: ["Rice", "Lentils", "Ginger", "Green Chilies", "Curry Leaves", "Mustard Seeds"],
        image: "Images/pongal.jpeg",
        procedure:
       `Cook rice and lentils together until soft. 
        In a pan, heat ghee and add mustard seeds, curry leaves, chopped ginger, and green chilies. 
        Mix the tempering with cooked rice and lentils. Serve hot.`,
        preparationTime: "45 minutes",
        dietaryRestrictions: "Vegetarian, Gluten-Free"
    },
    {
        name: "Margherita Pizza",
        cuisine: "Italian",
        ingredients: ["Tomato", "Basil", "Mozzarella", "Olive Oil", "Bread"],
        image: "Images/margherita_pizza.jpeg",
        procedure: 
        ` Spread tomato sauce on pizza dough.
          Add mozzarella cheese and basil leaves. 
          Bake in a preheated oven until crust is golden and cheese is melted.
          Drizzle with olive oil and serve.`,
        preparationTime: "1 hour",
        dietaryRestrictions: "Vegetarian"
    },
    {
        name: "Pasta Primavera",
        cuisine: "Italian",
        ingredients: ["Pasta", "Tomato", "Garlic", "Olive Oil", "Basil"],
        image: "Images/pasta_primavera.jpeg",
        procedure:
         ` Cook pasta according to package instructions.
           Saute garlic in olive oil.
           Add tomatoes and cook until soft.
           Toss cooked pasta with tomato mixture and fresh basil. Serve hot.`,
        preparationTime: "30 minutes",
        dietaryRestrictions: "Vegetarian"
    },
    {
        name: "Butter Chicken (Murg Makhani)",
        cuisine: "North Indian",
        ingredients: [
            "Chicken", "Yogurt", "Tomato Puree", "Ginger-Garlic Paste", 
            "Cashew Nuts", "Butter", "Oil", "Garam Masala", "Cumin Seeds", 
            "Red Chilli Powder", "Turmeric", "Salt", "Onion"
        ],
        image: "Images/butter_chicken.jpg",
        procedure: `
             Mix chicken with yogurt, ginger-garlic paste, lemon juice, and spices. Marinate for 30 minutes.
             Cook marinated chicken in a tandoor or pan until tender.
             Blend cashew nuts, tomatoes, and cream into a smooth paste.
             Heat butter and oil, add cumin seeds until they splutter. Add onions and sauté until translucent.
             Add the cashew paste to the pan, cook until oil separates. Add water or chicken stock and simmer.
             Add cooked chicken, simmer until gravy thickens. Serve with naan or rice.
        `,
        preparationTime: "1 hour",
        dietaryRestrictions: "Non-Vegetarian"
    },
    {
        name: "Saag Paneer",
        cuisine: "North Indian",
        ingredients: [
            "Spinach", "Paneer (Indian Cottage Cheese)", "Tomatoes", "Onion", 
            "Ginger", "Garlic", "Green Chillies", "Cumin Seeds", "Garam Masala", 
            "Turmeric", "Salt", "Oil"
        ],
        image: "Images/saag_paneer.jpeg",
        procedure: `
             Blanch spinach and blend into a smooth puree.
             Heat oil, add cumin seeds until they splutter. Add chopped onions and ginger-garlic paste, sauté until translucent.
             Add chopped tomatoes and cook until softened. Add turmeric, garam masala, and salt.
             Mix in spinach puree and simmer for 5-7 minutes.
             Cube paneer and pan-fry until golden brown. Add to spinach gravy and simmer for a few minutes.
             Serve hot with roti or naan.
        `,
        preparationTime: "45 minutes",
        dietaryRestrictions: "Vegetarian"
    },
    {
        name: "Tacos",
        cuisine: "Mexican",
        ingredients: ["Tortilla", "Chicken", "Tomato", "Lettuce", "Cheese", "Onion", "Garlic"],
        image: "Images/tacos.jpeg",
        procedure: `
            Marinate chicken with your favorite spices and let it sit for at least 15 minutes.
            Cook the marinated chicken in a pan with a little oil until done. Make sure it's thoroughly cooked.
            Dice tomatoes, shred lettuce, grate cheese, and finely chop onions and garlic.
            Warm tortillas on a griddle or in a microwave until soft and pliable.
            Lay out the warm tortillas and evenly distribute the cooked chicken on each.
            Add diced tomatoes, shredded lettuce, grated cheese, chopped onions, and garlic on top of the chicken.
            Serve the tacos with salsa and lime wedges on the side for added flavor.
        `,
        preparationTime: "30 minutes",
        dietaryRestrictions: "Non-Vegetarian"
    },
    {
        name: "Guacamole",
        cuisine: "Mexican",
        ingredients: ["Avocado", "Tomato", "Onion", "Lime", "Garlic", "Cilantro"],
        image: "Images/guacamole.jpeg",
        procedure: `
             Mash avocados in a bowl.
             Add chopped tomatoes, onions, garlic, and cilantro.
             Mix in lime juice and season with salt.
             Serve with tortilla chips.
        `,
        preparationTime: "15 minutes",
        dietaryRestrictions: "Vegan, Gluten-Free"
    }
];

let allRecipes = recipes;
let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

// Function to display ingredients
function displayIngredients() {
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = ''; // Clear existing content
    ingredients.forEach(ingredient => {
        const label = document.createElement('label');
        label.classList.add('ingredient');
        label.innerHTML = `<input type="checkbox" value="${ingredient}"> ${ingredient}`;
        ingredientsList.appendChild(label);
    });
}

function findRecipes(selectedIngredients, cuisine, dietary) {
    return allRecipes.filter(recipe => {
        const cuisineMatch = cuisine === "" || recipe.cuisine === cuisine;
        const dietaryMatch = dietary === "" || recipe.dietaryRestrictions.includes(dietary);
        const ingredientMatch = selectedIngredients.length === 0 || 
            recipe.ingredients.some(ingredient => selectedIngredients.includes(ingredient));
        return cuisineMatch && dietaryMatch && ingredientMatch;
    });
}
// Function to display recipes
function displayRecipes(recipes, containerId, selectedIngredients = []) {
    const recipesContainer = document.getElementById(containerId);
    recipesContainer.innerHTML = '';
    
    if (recipes.length === 0) {
        recipesContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No recipes found</p>';
    } else {
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            const procedureSteps = recipe.procedure.split('\n').map(step => step.trim()).filter(step => step.length > 0);
            const procedureList = document.createElement('ol');
            procedureSteps.forEach(step => {
                const listItem = document.createElement('li');
                listItem.textContent = step;
                procedureList.appendChild(listItem);
            });

            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient;
                if (selectedIngredients.includes(ingredient)) {
                    listItem.style.fontWeight = 'bold';
                }
                ingredientsList.appendChild(listItem);
            });

            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                <p><strong>Preparation Time:</strong> ${recipe.preparationTime}</p>
                <p><strong>Dietary Restrictions:</strong> ${recipe.dietaryRestrictions}</p>
                <img src="${recipe.image}" alt="${recipe.name}">
                <p><strong>Ingredients:</strong></p>
            `;
            recipeDiv.appendChild(ingredientsList);
            recipeDiv.innerHTML += `<p><strong>Procedure:</strong></p>`;
            recipeDiv.appendChild(procedureList);
            
            if (containerId === 'favorite-recipes') {
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete Favorite';
                deleteButton.classList.add('delete-favorite');
                deleteButton.onclick = () => deleteFavorite(recipe.name);
                recipeDiv.appendChild(deleteButton);
            } else {
                const saveButton = document.createElement('button');
                saveButton.textContent = 'Save as Favorite';
                saveButton.classList.add('save-favorite');
                saveButton.onclick = () => saveFavorite(recipe.name);
                recipeDiv.appendChild(saveButton);
            }

            recipesContainer.appendChild(recipeDiv);
        });
    }
}
// Function to save a recipe as favorite
function saveFavorite(recipeName) {
    const recipe = allRecipes.find(r => r.name === recipeName);
    if (!favoriteRecipes.some(r => r.name === recipe.name)) {
        favoriteRecipes.push(recipe);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
        alert(`${recipeName} added to favorites!`);
        displayFavoriteRecipes();
    } else {
        alert(`${recipeName} is already in favorites.`);
    }
}

// Function to delete a recipe from favorites
function deleteFavorite(recipeName) {
    favoriteRecipes = favoriteRecipes.filter(r => r.name !== recipeName);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    alert(`${recipeName} removed from favorites.`);
    displayFavoriteRecipes();
}

// Function to display favorite recipes
function displayFavoriteRecipes() {
    displayRecipes(favoriteRecipes, 'favorite-recipes');
}

// Function to display favorite recipes
function displayFavoriteRecipes() {
    displayRecipes(favoriteRecipes, 'favorite-recipes');
}

// Event listener for form submission
document.getElementById('recipe-finder-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredients-list input:checked')).map(input => input.value);
    const cuisine = document.getElementById('cuisine-input').value;
    const dietary = Array.from(document.querySelectorAll('input[name="dietary-restrictions"]:checked')).map(input => input.value)[0] || "";
    const foundRecipes = findRecipes(selectedIngredients, cuisine, dietary);
    displayRecipes(foundRecipes, 'recipe-results');
});

// Initialize ingredients and recipes
window.onload = function() {
    displayIngredients();
    displayRecipes(allRecipes, 'recipe-results');
    displayFavoriteRecipes();
};
