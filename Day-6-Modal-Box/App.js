// vars
const btn = document.getElementById('btn')
const modalSec = document.getElementById('modal-sec')
const closeBtn = document.getElementById('close')
const recipeTitle = document.querySelector('.recipe-title')
const recipeImg = document.querySelector('.img')
const recipeDes = document.querySelector('.desc')

btn.addEventListener('click', () => {
    modalSec.style.display = 'block'
  const r = fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(res => res.json())
    .then(data => {
        // title of the recipe
        recipeTitle.innerHTML = data.meals[0].strMeal
        recipeImg.src = data.meals[0].strMealThumb
        recipeDes.innerHTML = data.meals[0].strInstructions
        console.log(data.meals[0])
    })
});

closeBtn.addEventListener('click', () => modalSec.style.display = 'none')
