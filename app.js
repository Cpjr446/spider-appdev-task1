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
        image: "tomato_soup.jpeg",
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
        image: "chicken_salad.jpeg",
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
        image: "idli.jpeg",
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
        image: "dosa.jpg",
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
        image: "sambar.jpg",
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
        image: "rasam.jpeg",
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
        image: "pongal.jpeg",
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
        image: "margherita_pizza.jpeg",
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
        image: "pasta_primavera.jpeg",
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
        image: "butter_chicken.jpg",
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
        image: "saag_paneer.jpeg",
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
        image: "tacos.jpeg",
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
        image: "guacamole.jpeg",
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
    ingredients.forEach(ingredient => {
        const label = document.createElement('label');
        label.classList.add('ingredient');
        label.innerHTML = `<input type="checkbox" value="${ingredient}"> ${ingredient}`;
        ingredientsList.appendChild(label);
    });
}

// Helper function to check preparation time
function isTimeWithinRange(preparationTime, timeRange) {
    const timeInMinutes = parseInt(preparationTime);
    switch (timeRange) {
        case "under 30 mins":
            return timeInMinutes < 30;
        case "30 mins to 1 hr":
            return timeInMinutes >= 30 && timeInMinutes <= 60;
        case "1 hr to 2 hrs":
            return timeInMinutes > 60 && timeInMinutes <= 120;
        case "More than 2 hrs":
            return timeInMinutes > 120;
        default:
            return true;
    }
}
// Function to check if the recipe meets the dietary restrictions
function matchesDietaryRestrictions(recipe, dietary) {
    if (dietary === "") return true;
    const restrictions = dietary.split(", ").map(d => d.trim());
    return restrictions.every(restriction => recipe.dietaryRestrictions.includes(restriction));
}

// Function to find recipes
function findRecipes(selectedIngredients, cuisine, time, dietary) {
    return allRecipes.filter(recipe =>
        (cuisine === "" || recipe.cuisine === cuisine) &&
        (time === "" || isTimeWithinRange(recipe.preparationTime, time)) &&
        (dietary === "" || matchesDietaryRestrictions(recipe, dietary)) &&
        (selectedIngredients.length === 0 || selectedIngredients.some(ingredient => recipe.ingredients.includes(ingredient)))
    );
}

// Function to display recipes
function displayRecipes(recipes, containerId) {
    const recipesContainer = document.getElementById(containerId);
    recipesContainer.innerHTML = '';
    if (recipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found</p>';
    } else {
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            // Split the procedure into steps and create an ordered list
            const procedureSteps = recipe.procedure.split('\n').map(step => step.trim()).filter(step => step.length > 0);
            const procedureList = document.createElement('ol'); // Changed to ordered list
            procedureSteps.forEach(step => {
                const listItem = document.createElement('li');
                listItem.textContent = step;
                procedureList.appendChild(listItem);
            });

            // Create a list of ingredients
            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient;
                ingredientsList.appendChild(listItem);
                
            });

            // Check if the recipe is in the list of favorite recipes
            const isFavorite = favoriteRecipes.some(favRecipe => favRecipe.name === recipe.name);

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
            if (isFavorite) {
                recipeDiv.innerHTML += `<button class="delete-favorite" onclick="deleteFavorite('${recipe.name}')">Delete Favorite</button>`;
            } else {
                recipeDiv.innerHTML += `<button class="save-favorite" onclick="saveFavorite('${recipe.name}')">Save as Favorite</button>`;
            }

            recipesContainer.appendChild(recipeDiv);
        });
    }
}

// Add CSS styles for the Save as Favorite and Delete Favorite buttons
const style = document.createElement('style');
style.innerHTML = `
    .save-favorite {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        font-family: 'Raleway', serif;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 10px;
    }

    .save-favorite:hover {
        background-color: #45a049;
    }

    .delete-favorite {
        background-color: #f44336;
        color: white;
        border: none;
        padding: 10px 20px;
        font-family: 'Raleway', serif;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 10px;
    }

    .delete-favorite:hover {
        background-color: #d32f2f;
    }
`;
document.head.appendChild(style);

// Add the function to delete a recipe from favorites
function deleteFavorite(recipeName) {
    favoriteRecipes = favoriteRecipes.filter(recipe => recipe.name !== recipeName);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    alert(`${recipeName} removed from favorites!`);
    displayFavoriteRecipes();
    displayRecipes(allRecipes, 'recipes'); // Refresh the displayed recipes to update buttons
}

// Function to save a recipe as favorite
function saveFavorite(recipeName) {
    const recipe = allRecipes.find(r => r.name === recipeName);
    if (!favoriteRecipes.some(r => r.name === recipe.name)) {
        favoriteRecipes.push(recipe);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
        alert(`${recipeName} added to favorites!`);
        displayFavoriteRecipes();
        displayRecipes(allRecipes, 'recipes'); // Refresh the displayed recipes to update buttons
    } else {
        alert(`${recipeName} is already in favorites.`);
    }
}


// Function to display favorite recipes
function displayFavoriteRecipes() {
    displayRecipes(favoriteRecipes, 'favorite-recipes');
}

// Event listener for form submission
document.getElementById('ingredient-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredients-list input:checked')).map(input => input.value);
    const cuisine = document.getElementById('cuisine-filter').value;
    const time = document.getElementById('time-filter').value;
    const dietary = document.getElementById('dietary-filter').value;
    const foundRecipes = findRecipes(selectedIngredients, cuisine, time, dietary);
    displayRecipes(foundRecipes, 'recipes');
});

// Initialize ingredients and favorite recipes
displayIngredients();
displayRecipes(allRecipes, 'recipes');  // Display all recipes initially
displayFavoriteRecipes();
