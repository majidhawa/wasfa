document.getElementById('add-recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value.split('\n');
    const method = document.getElementById('recipe-method').value;
    const image = document.getElementById('recipe-image').value

    
    localStorage.setItem('recipes', JSON.stringify([...JSON.parse(localStorage.getItem('recipes') || '[]'), {name, ingredients, method,image}]));
    displayRecipe({name, ingredients, method,image}); // Displaying the newly added recipe

    document.getElementById('add-recipe-form').reset();
});

