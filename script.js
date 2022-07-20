import { meal } from "./recipies";
const printMeals = document.querySelector('#food');
const printMeals1 = document.querySelector('#food-1');
const printMeals2 = document.querySelector('#food-2');
const printMeals3 = document.querySelector('#food-3');
const printMeals4 = document.querySelector('#food-4');
const printMeals5 = document.querySelector('#food-5');
const printMeals6 = document.querySelector('#food-6');
const printMeals7 = document.querySelector('#food-7');
const printMeals8 = document.querySelector('#food-8');
const printMeals9 = document.querySelector('#food-9');
const printMeals10 = document.querySelector('#food-10');
const printMeals11 = document.querySelector('#food-11');
const printMeals12 = document.querySelector('#food-12');
const printCard = document.querySelector('#title-food');
const videoCard = document.querySelector('#video-for');
const refreshButton = document.querySelector('#refresh');

console.log(meal)




var math = Math.floor(Math.random() * 21);
var youtubeVid = meals[math].youtube
printMeals.append(meals[math].title);
printMeals1.append(meals[math].desc);
printMeals2.append(meals[math].course);
printMeals3.append(meals[math].cuisine);
printMeals4.append(meals[math].prepTime);
printMeals5.append(meals[math].cookTime);
printMeals6.append(meals[math].totalTime);
printMeals7.append(meals[math].servings);
printMeals8.append(meals[math].calories);
printMeals9.append(meals[math].tellIngredients);
printMeals11.append(meals[math].tellInstructions);
videoCard.setAttribute('src', youtubeVid)


for (i = 0; i < meals[math].ingredients.length; i++ ) {
    let allIngred = document.createElement('li');
    allIngred.textContent = meals[math].ingredients[i]
    printMeals10.append(allIngred)
}

for (i = 0; i < meals[math].instructions.length; i++ ) {
    let allInstr = document.createElement('li');
    allInstr.textContent = meals[math].instructions[i]
    printMeals12.append(allInstr)
}


printCard.classList.add('food-background');
console.log(meals);

console.log(math);


function refresher() {
   let info = confirm('Are you sure you want to a new recipe?')

   if(info) {
       location.reload()
   }else {
       return;
   }

}

refreshButton.addEventListener('click', refresher)