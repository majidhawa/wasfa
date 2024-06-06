document.addEventListener('DOMContentLoaded', function() {
    const recipeList = document.getElementById('recipe-list');

    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Display each recipe
    storedRecipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';

        const nameHeading = document.createElement('h3');
        nameHeading.textContent = recipe.name;
        recipeDiv.appendChild(nameHeading);

        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem); // Fixed missing closing parenthesis here
        });
        recipeDiv.appendChild(ingredientsList);

        const methodParagraph = document.createElement('p');
        methodParagraph.textContent = recipe.method;
        recipeDiv.appendChild(methodParagraph);

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeDiv.appendChild(recipeImage);

        // Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            alert(`Editing recipe ${recipe.name}: Ingredients: ${recipe.ingredients.join(', ')}, Method: ${recipe.method}`);
            // Implement your edit logic here
        };
        recipeDiv.appendChild(editButton);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            recipeDiv.remove();
            
            const updatedRecipes = storedRecipes.filter(r => r.name!== recipe.name);
            localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
        };
        recipeDiv.appendChild(deleteButton);

        recipeList.appendChild(recipeDiv);
    });
});
