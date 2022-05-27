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



const meals = [




    {
        title: "Title: Kare Kare",
        desc: "Description: This is a recipe for Kare-kare or ox tripe stew",
        course: 'Course: Beef, Main Dish',
        cuisine:'Cuisine: Filipino',
        prepTime:'Prep Time: 10 minutes',
        cookTime:'Cook Time: 2 hours 30 minutes',
        totalTime:'Total Time: 2 hours 40 minutes',
        servings:'Servings: 6 people',
        calories:'Calories: 934 kcal',
        tellIngredients: 'Ingredients: ',
        ingredients: ['3 lbs oxtail cut in 2 inch slices you an also use tripe or beef slices',
        '1 piece small banana flower bud sliced',
        '1 bundle pechay or bok choy',
        '1 bundle string beans cut into 2 inch slices',
       '4 pieces eggplants sliced',
        '1 cup ground peanuts',
        '1/2 cup peanut butter',
         '1/2 cup shrimp paste',
        '34 Ounces water about 1 Liter',
       '1/2 cup annatto seeds soaked in a cup of water',
        '1/2 cup toasted ground rice',
        '1 tbsp garlic minced',
        '1 piece onion chopped',
        'salt and pepper'],
        tellInstructions: 'Instructions: ',
        instructions: [
            '1. In a large pot, bring the water to a boil',
            '2. Put in the oxtail followed by the onions and simmer for 2.5 to 3 hrs or until tender (35 minutes if using a pressure cooker)',
            '3. Once the meat is tender, add the ground peanuts, peanut butter, and coloring (water from the annatto seed mixture) and simmer for 5 to 7 minutes',
            '4. Add the toasted ground rice and simmer for 5 minutes',
            '5. On a separate pan, saute the garlic then add the banana flower, eggplant, and string beans and cook for 5 minutes',
            '6. Transfer the cooked vegetables to the large pot (where the rest of the ingredients are)',
            '7. Add salt and pepper to taste',
            '8. Serve hot with shrimp paste. Enjoy!'
        ],
        youtube: 'https://www.youtube.com/embed/ll0lufTkGq4'

    },
    {title: "Filipino-style Chicken Adobo",
     desc: "Description: Chicken slices cooked in soy sauce and vinegar with garlic. This is a delicious Filipino chicken dish that you can eat for lunch with warm white rice.",
     course: 'Course: Main Course',
     cuisine: 'Cuisine: Filipino',
     prepTime: 'Prep Time: 5 minutes',
     cookTime: 'Cook Time: 35 minutes',
     totalTime: 'Total Time: 40 minutes',
     servings: 'Serving Size: 4 people',
     calories: 'Calories: 607 kcal',
     tellIngredients: 'Ingredients',
     ingredients: ['2 lbs chicken cut into serving pieces',
    '3 pieces dried bay leaves',
    '8 tablespoons soy sauce',
    '4 tablespoons white vinegar',
    '5 cloves garlic crushed',
    '1 1/2 cups water',
    '3 tablespoons cooking oil',
    '1 teaspoon sugar',
    '1/4 teaspoon salt optional',
    '1 teaspoon whole peppercorn'
    ],
     tellInstructions: 'Instructions',
     instructions: [
         '1. Combine chicken, soy sauce, and garlic in a large bowl. Mix well. Marinate the chicken for at least 1 hour. Note: the longer the time, the better',
         '2. Heat a cooking pot. Pour cooking oil.',
         '3. When the oil is hot enough, pan-fry the marinated chicken for 2 minutes per side.',
         '4. Pour-in the remaining marinade, including garlic. Add water. Bring to a boil',
         '5. Add dried bay leaves and whole peppercorn. Simmer for 30 minutes or until the chicken gets tender',
         '6. Add vinegar. Stir and cook for 10 minutes.',
         '7. Put-in the sugar, and salt. Stir and turn the heat off.Serve hot. Share and Enjoy!'
     ],
     youtube: 'https://www.youtube.com/embed/a-R4-vaqcOg'
},
    {title: "Sinangag",
    desc: 'Description: (Filipino Fried Rice)',
    course: 'Course: 10 minutes',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 5 minutes',
    cookTime: 'Cook Time: 15 minutes',
    totalTime: 'Total Time: 25 minutes',
    servings: 'Serving Size: 3',
    calories: 'Calories: 998 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '3 cups cooked white rice leftover Jasmine rice is preferred',
        '5 cloves crushed garlic',
        '2 1/2 tablespoons cooking oil',
        '1/2 teaspoon sea salt'
    ],
    tellInstructions: 'Instructions',
    instructions: [
        '1. Heat the cooking oil in a wide pan.',
        `2. While the cooking oil is being heated, add the crushed garlic.
         Note: make sure that the oil is not hot when you add the garlic. Let the garlic slowly cook while the oil gets heated until it becomes golden brown and crisp.`,
         '3. Add-in the rice; gently stir to distribute the ingredients. Continue to cook for 3 minutes.',
         '4. Sprinkle the salt over the rice and continue to mix all the ingredients gently. Cook for another 3 to 5 minutes.',
         '5. Transfer to a serving plate. Serve with your favorite entrée.',
         '6. Share and Enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/O1iZ5e_Grzc'
},
    {
    title: "Beef Mechado Recipe",
    desc: 'Description: This is a recipe for beef mechado.',
    course: 'Course: Beef Recipe',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 minutes',
    cookTime: 'Cook Time: 1 hour 30 minutes',
    totalTime: 'Total Time: 1 hour 40 minutes',
    servings: 'Serving Size: 6 people',
    calories: 'Calories: 361 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '3 cloves garlic crushed',
        '1 piece large onion sliced',
        '2 lbs beef chuck cubed',
        '8 ounces tomato sauce',
        '1 cup water',
        '3 tbsp cooking oil',
        '1 slice lemon with rind',
        '1 piece large potato sliced',
        '1/4 cup soy sauce',
        '1/2 tsp. ground black pepper',
        '2 pieces bay leaves laurel',
        'salt to taste',
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Heat cooking oil in a pan then saute the garlic and onion.',
        '2. Put-in the beef and saute for about 3 minutes or until color turns light brown',
        '3. Add the tomato sauce and water then simmer until the meat is tender. Add water as needed. Note this can take 60 to 120 minutes depending on the quality of the beef.',
        '4. Add the soy sauce, ground black pepper, lemon rind, laurel leaves, and salt then simmer until excess liquid evaporates',
        '5. Put-in the potatoes and cook until the potatoes are soft',
        '6. Place in a serving plate then serve hot with rice. Share and Enjoy!',
    ],
    youtube: 'https://www.youtube.com/embed/kEakYl5pDEM' 
},
    {
        title: "Beef Pares",
        desc: 'Description: Beef stewed in soy sauce with star anise. This dish is best enjoyed with garlic fried rice and a bowl of beef stock on the side.',
        course: 'Course: Main Course',
        cuisine: 'Cuisine: Filipino',
        prepTime: 'Prep Time: 10 minutes',
        cookTime: 'Cook Time: 45 minutes',
        totalTime: 'Total Time: 55 minutes',
        servings: 'Serving Size: 6',
        calories: 'Calories: 3622 kcal',
        tellIngredients: 'Ingredients: ',
        ingredients: [
            '2 ½ lbs. beef cubed',
            '1 piece Knorr Beef Cube',
            '2 pieces star anise',
            '¼ cup brown sugar',
            '½ cup scallions chopped',
            '2 thumbs ginger minced',
            '6 tablespoons soy sauce',
            '1 piece onion chopped',
            '5 cloves garlic crushed',
            '2 ½ cups water',
            '3 tablespoons cooking oil',
            'Salt and ground black pepper to taste'
        ],
        tellInstructions: 'Instructions: ',
        instructions:[
            '1. Heat oil in a cooking pot or pressure cooker. Saute onion, garlic, and ginger.',
            '2. Add the beef once onion softens. Cook until light brown.',
            '3. Pour soy sauce and water. Stir.',
            '4. Add Knorr Beef Cube and star anise. Cover the pressure cooker and pressure cook for 15 minutes.',
            '5. Add brown sugar and season with salt and ground black pepper. Cook for 8 to 10 minutes more or until the sauce reduces a bit.',
            '6. Top with chopped scallions and serve with sinangag and beef stock. Share and enjoy.',
        ],
        youtube: 'https://www.youtube.com/embed/fVpdPTTgGKo' 
},
    {
    title: "Arroz Caldo",
    desc: 'Description: Chicken congee with boiled eggs. This arroz caldo recipe is a winner.',
    course: 'Course: Snack',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 minutes',
    cookTime: 'Cook Time: 45 minutes',
    totalTime: 'Total Time: 55 minutes',
    servings: 'Serving Size: 6 people',
    calories: 'Calories: 584 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '1 ½ lbs chicken cut into serving pieces',
        '1 ½ cups rice uncooked',
        '34 ounces water about 1 liter',
        '2 Tablespoons fish sauce',
        '1 teaspoon garlic',
        '1/4 teaspoon ground black pepper',
        '1 cup onion minced',
        '4 eggs hard boiled',
        '1 cup scallions green onions, minced',
        '2 knobs ginger julienned',
        '3 tbsp safflower kasubha',
        '1 chicken cube bouillon',
        '1 lemon or 4 pieces calamansi',
        '2 Tablespoon cooking oil'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. In a pot, heat the cooking oil then saute the garlic, onion, and ginger',
        '2. Dash-in some ground black pepper',
        '3. Add the chicken cube and cook until the cube melts',
        '4. Put-in the chicken and cook until outer layer color turns golden brown',
        '5. Add the fish sauce and uncooked rice then mix and cook for a few minutes',
        '6. Pour-in the water and bring to a boil',
        '7. Stir occasionally and simmer until the rice is fully cooked (about 30 to 40 minutes)',
        '8. Put-in the hard boiled eggs',
        '9. Add the safflower for additional color and aroma',
        '10. Serve hot with garlic, minced scallions, and lemon. Share and Enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/7lka80ZAays' 
},
{
    title: "Leche Flan",
    desc: 'Description: This is a simple and easy version of a famous Filipino dessert known as Leche Flan.',
    course: 'Course: Dessert',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 minutes',
    cookTime: 'Cook Time: 45 minutes',
    totalTime: 'Total Time: 55 minutes',
    servings: 'Serving Size: 6 people',
    calories: 'Calories: 369 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '10 pieces eggs',
        '1 can condensed milk (14 oz)',
        '1 cup fresh milk or evaporated milk',
        '1 cup granulated sugar',
        '1 teaspoon vanilla extract'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Using all the eggs, separate the yolk from the egg white (only egg yolks will be used).',
        '2. Place the egg yolks in a big bowl then beat them using a fork or an egg beater',
        '3. Add the condensed milk and mix thoroughly',
        '4. Pour-in the fresh milk and Vanilla. Mix well',
        '5. Put the mold (llanera) on top of the stove and heat using low fire',
        `6. Put-in the granulated sugar on the mold and mix thoroughly until the solid sugar turns into liquid 
        (caramel) having a light brown color. Note: Sometimes it is hard to find a Llanera (Traditional flan mold) 
        depending on your location. I find it more convenient to use individual Round Pans in making leche flan.`,
        '7. Spread the caramel (liquid sugar) evenly on the flat side of the mold',
        '8. Wait for 5 minutes then pour the egg yolk and milk mixture on the mold',
        '9. Cover the top of the mold using an Aluminum foil',
        '10. Steam the mold with egg and milk mixture for 30 to 35 minutes.',
        '11. After steaming, let the temperature cool down then refrigerate',
        '12. Serve for dessert. Share and Enjoy!',
    ],
    youtube: 'https://www.youtube.com/embed/vN5G2iBUHO0' 
},
{
    title: "Pan De Sal",
    desc: 'Description: Filipino bread rolls',
    course: 'Course: Side',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 1 hour 30 minutes',
    cookTime: 'Cook Time: 15 minutes',
    totalTime: 'Total Time: 1 hour 45 minutes',
    servings: 'Serving Size: 8',
    calories: 'Calories: 113 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '2 cups all purpose flour',
        '2 cups bread flour',
        '1/2 cup white sugar',
        '5 tbsp butter melted',
        '1 tsp baking powder',
        '1 1/4 cup fresh milk warm',
        '1 pouch rapid rise yeast',
        '1 tsp salt',
        '1 cup bread crumbs',
        '1 piece raw egg',
        '1 tbsp cooking oil'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Combine the yeast, sugar, and warm milk and stir until the yeast and sugar are fully dissolved',
        '2. In the mixing bowl, combine the dry ingredients starting with the flour then the sugar, salt, and baking powder . Mix well by stirring',
        '3. Add the egg, butter, cooking oil, and yeast-sugar-milk mixture in the mixing bowl with the dry ingredients then mix again until a dough is formed. Use your clean hands to effectively mix the ingredients.',
        '4. In a flat surface, knead the dough until the texture becomes fine. For faster and easier kneading, you may use a Stand Mixer with dough hook.',
        '5. Mold the dough until shape becomes round then put back in the mixing bowl. Cover the mixing bowl with damp cloth and let the dough rise for at least 1 hour',
        '6. Put the dough back to the flat surface and divide into 4 equal parts using a dough slicer',
        '7. Roll each part until it forms a cylindrical shape',
        '8. Slice the cylindrical dough diagonally (These slices will be the individual pieces of the pandesal)',
        '9. Roll the sliced dough over the breadcrumbs and place in a baking tray with wax paper (makes sure to provide gaps between dough as this will rise later on)',
        '10. Leave the sliced dough with breadcrumbs in the tray for another 10 to 15 minutes to rise',
        '11. Pre-heat the oven at 375 degrees Fahrenheit for 10 minutes',
        '12. Put the tray with dough in the oven and bake for 15 minutes',
        '13. Turn off the oven and remove the freshly baked pandesal.',
        '14. Serve hot. Share and enjoy!',
    ],
    youtube: 'https://www.youtube.com/embed/xGt2Zew6lrY' 
},
{
    title: "Pininyahang Manok",
    desc: 'Description: Philippine dish consisting of chicken braised in a milk or coconut milk-based sauce with pineapples, carrots, potatoes, and bell peppers.',
    course: 'Course: Main Course',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 minutes',
    cookTime: 'Cook Time: 45 minutes',
    totalTime: 'Total Time: 55 minutes',
    servings: 'Serving Size: 6 people',
    calories: 'Calories: 439 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '2 lbs chicken cut into serving pieces',
        '12 ounces pineapple chunks canned',
        '2 pieces tomato chopped',
        '1 cup bell pepper cut into thick strips',
        '1 piece carrot wedged',
        '2 1/2 tablespoon fish sauce patis',
        '1/2 cup fresh milk',
        '2 tablespoon garlic minced',
        '1 piece onion sliced',
        '2 tablespoon cooking oil'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Marinate the chicken in pineapple juice/concentrate (derived from the can of pineapple chunks) for 20 to 30 minutes',
        '2. Pour the cooking oil in a cooking pot / casserole then apply heat',
        '3. Sauté the garlic, onion, and tomatoes',
        '4. Put-in the chicken and cook until color of the outer part turns light brown',
        '5. Add the pineapple juice/concentrate marinade and fresh milk then bring to a boil',
        '6. Add the pineapple chunks and simmer until the chicken is tender and half of the liquid evaporates (about 20 to 30 minutes).',
        '7. Put-in the carrots and simmer for 5 minutes',
        '8. Add the bell pepper and fish sauce then simmer for 3 minutes',
        '9. Remove from the cooking pot / casserole and transfer to a serving dish.',
        '10. Serve hot. Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/abtlWWY-6Y8' 
},
{
    title: "Eggplant Omelette",
    desc: 'Description: This is a recipe for Eggplant Omelette',
    course: 'Course: Eggplant',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 minutes',
    cookTime: 'Cook Time: 8 minutes',
    totalTime: 'Total Time: 18 minutes',
    servings: 'Serving Size: 2 servings',
    calories: 'Calories: 147 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '3 pieces eggs',
        '1 medium eggplant',
        '1/4 teaspoon garlic powder',
        '1/4 teaspoon salt',
        'A dash of ground black pepper',
        '4 tablespoons olive oil',
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        'Beat the eggs in a large bowl. Add salt, ground black pepper, and garlic powder. Continue to beat until all ingredients are well blended. Set aside.',
        'Use a fork to create tiny holes all over the eggplant. Cook the eggplant by either baking it in the oven at 400F for 20 to 25 minutes, or exposing it in fire over a stove top until the skin gets burnt and turns black.',
        'Let the eggplant cool down. Peel the skin then cut the stalk off. Arrange the eggplant flat in a plate. Gently mash using a fork.',
        'Transfer the mashed eggplant to the bowl with beaten egg. Beat until the eggplant is well incorporated with all the ingredients.',
        'Meanwhile, heat olive oil in a pan. Once the oil gets hot, pour the mixture into the pan. Continue to cook in low to medium heat for 3 to 5 minutes.',
        `Flip the eggplant omellette using a plate. Do this by lifting the pan and tilt it towards the plate until the content slides into the plate 
        (you can also use a spatula). Make sure that the cooked part is facing down. Now, hold the plate with one hand and the pan with the other. 
        Cover the plate with pan and then quickly flip it over in a way that the top part of the omellete (which is still uncooked) touches the base of the pan. 
        Continue to cook for 3 minutes.`,
        'Transfer to a serving plate. Serve with your favorite condiment.',
        'Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/JPLRM4yVkX0' 
},
{
    title: "Adobong Balut",
    desc: 'Description: Adobong Balut is uniquely Filipino, easy to prepare and highly nutritious.  Balut is boiled fertilized duck egg with a 9 to 14 day old embryo inside. It is commonly sold as a street food during night time.',
    course: 'Course: Appetizer',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 mins',
    cookTime: 'Cook Time: 25 mins',
    totalTime: 'Total Time: 35 mins',
    servings: 'Serving Size: 1 egg',
    calories: 'Calories: 188 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '4 Balut eggs peeled',
        '1 tsp sugar',
        '3 tbsp Canola Oil',
        '2 cloves garlic finely minced',
        '1 small sized Onion',
        '½ cup soy sauce sliced',
        '½ cup vinegar',
        '3 pcs bay leaf',
        'freshly ground black pepper',
        'Thinly sliced Scallions for garnish'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Remove the Balut Egg shells, then set aside.',
        "2. Add Canola oil into the Frying pan, when Canola oil is heated enough saute' Onion and the minced garlic until oil gets infused with the flavor of garlic.",
        '3. Add Balut and fry for a few seconds then add Soy sauce and Vinegar in the Pan. Depending on your own taste you can increase or decrease the amount of vinegar .',
        '4. Bring to a boil without stirring. Simmer for a few seconds, then swirl the pan so that the eggs are coated with the sauce.',
        '5. Add bay leaf, sugar and freshly ground black pepper.',
        '6. Simmer for another minute. Swirl once more. Turn off the heat. Let sit for about 10 minutes.',
        '7. Give the eggs a final swirl and, for the ultimate experience.',
        '8. Best serve with garlic fried rice.'
    ],
    youtube: 'https://www.youtube.com/embed/8rk9Jc9MXaA' 
},
{
    title: "Crispy Pork Belly Chicharon",
    desc: 'Description: Crunchy deep-fried pork belly that tastes even better when dipped in spicy vinegar. Snack on it or consume it as a main dish with rice.',
    course: 'Course: Main Course',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 1 hour',
    cookTime: 'Cook Time: 1 hour 20 minutes',
    totalTime: 'Total Time: 2 hours 20 minutes',
    servings: 'Serving Size: 5 people',
    calories: 'Calories: 1031 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '2 lbs. pork belly',
        '6 cups water',
        '2 cups cooking oil',
        '1 1/2 tablespoons whole peppercorn',
        '8 pieces dried bay leaves',
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Boil water in a cooking pot. Add salt, bay leaves, whole peppercorn, and pork. Cover and continue to boil for 60 minutes.',
        '2. Remove from the pot and let pork cool down. Poke holes on the skin using a toothpick. Slice the pork in half for a thinner piece.',
        '3. Rub salt all over the pork belly. Air dry for 1 hour. Note: placing the pork in front of an electric fan is a good idea.',
        '4. Heat oil on a cooking pot. Deep fry pork belly until crispy and golden brown. Note: be extra careful when doing this step. Use of splatter screen is recommended.',
        '5. Remove crispy pork belly from the cooking pot and place over a wire rack. Let it cool down.',
        '6. Transfer to a serving plate. Serve with spicy vinegar.',
        '7. Serve! Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/pdS9hDBrzqE' 
},
{
    title: "Beef Pochero",
    desc: 'Description: Filipino stew made of pork belly, saba bananas, beans, and vegetables.',
    course: 'Course: Main Course',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 12 minutes',
    cookTime: 'Cook Time: 1 hour',
    totalTime: 'Total Time: 1 hour 12 minutes',
    servings: 'Serving Size: 6 servings',
    calories: 'Calories: 91 kcal per serving',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '2 lbs beef short ribs or cubed sirloin',
        '1/2 medium cabbage quartered',
        '1 bunch Bok choy pechay',
        '1 bundle long green beans about 15 pieces',
        '1 medium sized potato cubed',
        '2 large plantains saba banana, sliced',
        '3 pieces chorizo sliced thinly',
        '1 large tomato diced',
        '1 medium sized onion diced',
        '2 tbsp whole pepper corn',
        '2 tbsp fish sauce',
        '1 tsp garlic',
        '1 small can tomato sauce',
        '3 cups water',
        '1 cup garbanzos'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Heat oil in the pot and fry the banana until color turns golden brown. Once done, set the bananas aside',
        '2. Put in the chorizo in the same pot and fry for about 3 to 5 minutes then set aside',
        '3. Sauté the garlic, onion, and tomato',
        '4. Add the beef and cook for 5 minutes',
        '5. Add the fish sauce, tomato sauce, and whole pepper corn and mix well',
        '6. Add the water and simmer until meat is tender (about 35 minutes in pressure cooker)',
        '7. Put-in the fried chorizo, fried banana, potato, and garbanzos and simmer for 7 minutes',
        '8. Add the cabbage, long green beans and simmer for 5 minutes',
        '9. Add the bok choy and turn off the heat. Cover the pot for 5 minutes to cook the bok choy',
        '10. Serve hot. Share and Enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/DZF2auvxZ4Y' 
},
{
    title: "Dinuguan",
    desc: "Description: Pork Dinuguan is a classic Filipino stew made of diced pork, pork blood, and spices. Also known as chocolate meat.",
    course: 'Course: Main Course',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 20 mins',
    cookTime: 'Cook Time: 40 mins',
    totalTime: 'Total Time: 1 hr',
    servings: 'Serving Size: 6 servings',
    calories: 'Calories: 857 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '10 ounces pork blood',
        '1 cup vinegar',
        '1 tablespoon canola oil',
        '1 onion, peeled and chopped',
        '4 cloves garlic, peeled and minced',
        '1 thumb-size ginger (about 1 tablespoon), peeled and minced',
        '2 pounds pork belly, cut into 1/2-inch strips',
        '1 tablespoon fish sauce',
        '1 cup water',
        '1 tablespoon brown sugar',
        '2 finger chilies (siling haba)',
        'salt and pepper to taste'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        "1. In a bowl, combine pig's blood and about 2 tablespoons of the vinegar. Stir well.",
        '2. In a pot over medium heat, heat oil. Add onions, garlic, and ginger and cook until softened.',
        '3. Add pork and cook, stirring occasionally, until lightly browned.',
        '4. Add fish sauce and cook for about 1 to 2 minutes.',
        '5. Add vinegar and bring to a boil. Cook, uncovered and without stirring, for about 3 to 5 minutes or until slightly reduced.',
        '6. Add water and bring to a boil. Lower heat, cover, and continue to cook for about 15 to 20 minutes or until meat is tender.',
        '7. Add pork blood, stirring to disperse and prevent lumps.',
        '8. Add brown sugar and stir to dissolve.',
        '9. Add chili peppers.',
        '10. Continue to simmer for about 10 minutes or until sauce is thickened.',
        '11. Season with salt and pepper to taste. Serve hot with rice or puto.'
    ],
    youtube: 'https://www.youtube.com/embed/a0101E0EuEk' 
},
{
    title: "Lumpiang Shanghai",
    desc: 'Description: This is a recipe for Fiipino Lumpia or deep fried spring rolls.',
    course: 'Course: Appetizer',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 15 minutes',
    cookTime: 'Cook Time: 8 minutes',
    totalTime: 'Total Time: 23 minutes',
    servings: 'Serving Size: 6 people',
    calories: 'Calories: 619 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '2 1/2 lbs. ground pork',
        '1 piece Knorr Pork Cube',
        '50 pieces lumpia wrapper',
        '3/4 cup carrot minced',
        '2 pieces onions minced',
        '2 pieces eggs',
        '¼ cup parsley minced',
        '½ teaspoon ground black pepper',
        '1 teaspoon salt',
        '1 teaspoon Sesame oil',
        '1 teaspoon garlic powder',
        '2 cups cooking oil'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Combine ground pork, carrot, onion, and parsley in a bowl. Mic well.',
        '2. Add egg, ground black pepper, salt, garlic, powder, and Sesame oil. Continue to mix until the ingredients are well blended.',
        '3. Crush the Knorr pork cube and add it into the mixture. Blend the ingredients altogether completely.',
        '4. Put 1 to 1 1/2 tablespoons of meat mixture over a piece of lumpia wrapper. Wrap and roll to secure the mixture. Continue this step until the mixture is completely consumed. Note: watch the video below to see how.',
        '5. Heat oil in a cooking pot in low to medium heat. Deep fry the lumpia until it turns golden brown. Remove from the pot and place in a plate lined with paper towel.',
        '6. Transfer to a serving plate. Serve with sweet and sour sauce. Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/Xm7kzBzXNzQ' 
},
{
    title: "Banana Fritters",
    desc: `Description: Mashed bananas combined with flour and other ingredients to make a batter and then fried until golden brown. 
    It is best when rolled in granulated white sugar after frying.`,
    course: 'Course: Dessert',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 15 minutes',
    cookTime: 'Cook Time: 10 minutes',
    totalTime: 'Total Time: 25 minutes',
    servings: 'Serving Size: 6 people',
    calories: 'Calories: 460 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '6 pieces banana saba or plantain variety, ripe (mashed)',
        '1 cup all-purpose flour',
        '1 1/2 teaspoon vanilla extract',
        '1 piece egg beaten',
        '1 teaspoon baking powder',
        '3/4 cup granulated white sugar',
        '1 cup fresh milk',
        '3/4 cups cooking oil',
        '1/2 teaspoon salt'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. In a large bowl, combine flour, baking powder, salt, and 1/2 cup sugar. Mix well.',
        '2. Gradually add the mashed bananas while mixing.',
        '3. Add the egg, vanilla extract, and milk. Mix to incorporate all the ingredients.',
        '4. Heat half of the oil in a pan.',
        '5. When the oil becomes hot, scoop about 1/2 cup of the mixture and then pour in the pan (add the remaining oil in the next batches).',
        '6. Fry both sides until the color turns golden brown.',
        '7. Sprinkle the remaining sugar on both sides.',
        '8. Serve. Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/zVCUMZ03V6c' 
},
{
    title: "Buko Pie",
    desc: 'Description: This is a recipe for Buko Pie',
    course: 'Course: Dessert',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 minutes',
    cookTime: 'Cook Time: 55 minutes',
    totalTime: 'Total Time: 1 hour 5 minutes',
    servings: 'Serving Size: 6 people',
    calories: 'Calories: 290 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '2 cups all-purpose flour',
        '1/3 cup butter',
        '1 teaspoon salt',
        '1/3 cup vegetable shortening',
        '6 to 8 tablespoons cold water',
        '2 cups young coconut meat',
        '3/4 cup granulated white sugar',
        '1/2 cup cornstarch diluted in 1/2 cup young coconut water',
        '1/2 cup evaporated milk'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        `1. Create the crust. Combine flour and salt then mix using a balloon whisk. Add butter and shortening then mix using a pastry mixer.
         Gradually add cold water a tablespoon at a time while mixing the ingredients. When everything is completely mixed, 
         gather the mixture and divide into two equal parts. In a flat surface flatten each of the dough and roll using a rolling pin until wide enough to fit an eight or nine inch cake pan.
          Note: Sprinkle flour over the flat surface to prevent the dough from sticking or use a silicon mat. Arrange the first dough over the cake pan. This will be the base. 
          Set the second flattened dough aside. This will be needed after arranging the filling in the cake pan.`,
        '2. Make the filling by heating a saucepan and pour-in the milk. Let boil.',
        '3. Add the granulated white sugar and stir.',
        '4. Put-in the young coconut meat and cook for 3 minutes.',
        '5. Pour-in the cornstarch diluted in young coconut water and stir thoroughly while cooking. Cook until the texture thickens.',
        '6. Turn-off the heat and allow the mixture to cool down.',
        '7. Preheat oven to 375 degrees Fahrenheit.',
        '8. Arrange the cooked filling in the cake pan.',
        '9. Put the second crust over the filling and seal the sides.',
        '10. Create holes on the secondary crust using a fork. This will serve as exhaust vents that will prevent the crust from deforming.',
        '11. Bake for 45 to 55 minutes or until the color turns golden brown. Note: Baking time may vary; make sure to check the color of the crust to determine if baking is complete.',
        '12. Let cool and serve. Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/sx0O7x-t0p0' 
},
{
    title: "Sizzling Crispy Sisig",
    desc: "Description: Filipino dish made from parts of a pig's face and belly, and chicken liver which is usually seasoned with calamansi, onions, and chili peppers.",
    course: 'Course: Main Course',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 1 hour',
    cookTime: 'Cook Time: 30 minutes',
    totalTime: 'Total Time: 1 hour 30 minutes',
    servings: 'Serving Size: 4 people',
    calories: 'Calories: 1269 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '1 ½ lbs. pork belly boiled for 1 hour',
        "½ cup Lady's Choice Mayonnaise",
        '2 pieces onion chopped',
        '4 pieces Thai chili pepper chopped',
        '2 pieces long green pepper chopped',
        '16 grams Knorr SavorRich Pork equivalent to 1 sachet',
        '½ teaspoon ground black pepper',
        '2 tablespoons soy sauce',
        '¼ cup margarine',
        '2 cups cooking oil'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Heat oil in a deep cooking pot or deep fryer. Fry the boiled pork belly until golden brown and crispy. Chop the crispy pork belly into small pieces. Set aside.',
        '2. Heat half of the margarine in a pan. Sauté half of the onions until soft. Add chopped pork. Saute for 30 seconds.',
        '3. Add Knorr SavorRich. Stir and then add chili peppers and season with ground black pepper and soy sauce. Cook for 1 minute.',
        "4. Add Lady's Choice Mayonnaise. Stir and add remaining onion. Set aside.",
        '5. Heat a metal plate (sizzling plate) on a stovetop. Melt remaining margarine. Transfer the crispy pork sisig into the metal plate. Let it stay for 30 seconds.',
        '6. Serve with warm rice and your favorite beverage. Enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/kapD-91ZUH8' 
},
{
    title: "Cheese Puto",
    desc: 'Description: This is a Recipe for a Filipino rice cake called Puto Cheese or Cheesy Puto',
    course: 'Course: Cake',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 5 minutes',
    cookTime: 'Cook Time: 30 minutes',
    totalTime: 'Total Time: 35 minutes',
    servings: 'Serving Size: 3 ',
    calories: 'Calories: 100 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '1 cup all-purpose flour',
        '1/2 cup granulated white sugar',
        '3 teaspoons baking powder',
        '1 cup fresh milk',
        '1/4 teaspoon vanilla extract',
        '3/4 cup shredded sharp cheddar cheese',
        '5 cups water for steaming'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Pour the water into a steamer or cooking pot. Let boil.',
        '2. Sift flour, sugar, and baking powder. Combine in a bowl. Mix well.',
        '3. Gradually add the milk while stirring. Continue to stir until the texture of the mixture becomes smooth.',
        '4. Stir-in the vanilla extract and half of the cheese.',
        '5. Pour the mixture into small to medium sized molds. Arrange in a steamer. Cover and steam for 25 minutes. Top each puto with the remaining cheese. Steam for 5 minutes more.',
        '6. Take the steamed cheese puto out of the steamer. Let it cool down.',
        '7. Gently remove the puto from the mold with the help of a spatula.',
        '8. Arrange in serving plate. Serve.',
        '9. Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/e4L_nyVdDL8' 
},
{
    title: "Filipino-Style Spaghetti",
    desc: 'Description: Feature the sweet and spicy banana ketchup-based sauce and sliced hot dogs that are at the core of what Filipino spaghetti is',
    course: 'Course: Main course',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 minutes',
    cookTime: 'Cook Time: 45 minutes',
    totalTime: 'Total Time: 55 minutes',
    servings: 'Serving Size: 6',
    calories: 'Calories: 300 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '2 lbs. Spaghetti noodles',
        '1 lb. ground pork',
        '6 ounces luncheon meat minced',
        '4 pieces hotdogs or beef franks',
        '35 ounces Filipino Style Spaghetti Sauce',
        '1/2 cup shredded cheddar cheese',
        '1 1/2 cups beef broth',
        '1 medium onion minced',
        '1 teaspoon minced garlic',
        'Salt and pepper to taste',
        '3 tablespoons cooking oil'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Cook the Spaghetti noodles according to package instructions. Once cooked, transfer to a bowl. Set aside.',
        '2. Heat the oil in a Pan.',
        '3. Saute the onion and garlic.',
        '4. Once the onions becomes soft, add the ground pork. Cook until the color turns light brown.',
        '5. Add the luncheon meat and hotdog. Stir and cook for 2 to 3 minutes.',
        '6. Pour-in the Spaghetti sauce and beef broth. Stir and let boil. Cover and simmer for 30 minutes.',
        '7. Try to taste the sauce and add salt and pepper if needed.',
        '8. Pour the Filipino Style Spaghetti sauce over the Spaghetti. Top with shredded cheese.',
        '9. Serve. Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/fjjsPR6Zc6s' 
},
{
    title: "Tinolang Manok sa Upo",
    desc: 'Description: This is a recipe for Tinolang Manok sa Upo or Chicken in Ginger Broth with Opo Squash.',
    course: 'Course: Main Course',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 10 minutes',
    cookTime: 'Cook Time: 50 minutes',
    totalTime: 'Total Time: 1 hour',
    servings: 'Serving Size: 4',
    calories: 'Calories: 213 kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '1 1/2 lbs. chicken cut into serving pieces',
        '1 Knorr Chicken cube',
        '1 small opo squash upo, peeled and sliced into huge chunks',
        '3/4 cups hot pepper leaves',
        '3/4 cups malunggay leaves',
        '2 thumbs ginger sliced into thin strips',
        '2 long green chili pepper siling pansigang',
        '1 medium yellow onion minced',
        '3 cloves garlic minced',
        '3 tablespoons fish sauce',
        '1/4 teaspoon ground black pepper',
        '8 cups rice washing water used to rinse rice',
        '3 tablespoons cooking oil'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Heat oil in a cooking pot.',
        '2. Once the oil gets hot, saute garlic and onion.',
        '3. Add chicken pieces. Continue to cook until all side of the chicken turns light brown.',
        '4. Add ginger. Stir and cook for 1 minute.',
        '5. Pour rice washing into the pot. Let boil. Note: You can also use water, if rice washing is not available.',
        '6. Add Knorr chicken cube. Stir. Cover and continue to cook in medium heat for 25 to 30 minutes. Add more water if needed.',
        '7. Put the upo and siling pansigang into the pot. Cover and cook for 5 to 7 minutes.',
        '8. Add hot pepper leaves and malunggay leaves. Stir.',
        '9. Season with ground black pepper and fish sauce.',
        '10. Transfer to a serving bowl. Serve!',
        '11. Share and enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/uetB_d2VgO0' 
},
{
    title: "Taisan",
    desc: 'Description: Filipino chiffon cake',
    course: 'Course: Cake',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 25 minutes',
    cookTime: 'Cook Time: 35 minutes',
    totalTime: 'Total Time: 1 hour',
    servings: 'Serving: 16',
    calories: 'Calories: 247',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '7 egg yolks from large eggs',
        '2 cups all-purpose flour',
        '1 and 1/2 cups sugar',
        '3 tsp baking powder',
        '1 tsp salt',
        '3/4 cup water',
        '1/2 cup oil',
        '2 tsp vanilla extract',
        '7 egg whites',
        '1/2 tsp cream of tartar'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Preheat oven to 350 F. Line two 9x5 loaf pans with parchment paper. In a medium bowl, combine flour, salt and baking powder. Set aside.',
        '2. In another bowl, beat the egg yolks until it is slightly thicker. Add the sugar and mix until incorporated. Add water, oil and vanilla extract. Mix well.',
        '3. Add the flour mixture gradually and use a hand whisk to blend the ingredients well, until smooth.',
        '4. Meanwhile, in the bowl of a stand mixer, whisk the egg whites on medium speed until frothy. Add the cream of tartar and continue to whisk until egg whites form firm peaks that hold its shape when the whisk is lifted.',
        '5. Gently fold the egg whites to the yolk batter in three additions until batter is uniform and well mixed. Pour batter into two 9x5 inch loaf pans. Bake for 30-35 minutes, or until a toothpick inserted in the middle of the cake comes out clean. Brush the cakes with melted butter.',
        '6. Once they have cooled slightly, take them out of the pan. Sprinkle sugar and shredded cheese on top.'
    ],
    youtube: 'https://www.youtube.com/embed/LmHfyaWJl94' 
},
{
    title: "Coconut Macaroon",
    desc: 'Description: This is a recipe for Coconut Macaroon',
    course: 'Course: Dessert',
    cuisine: 'Cuisine: Filipino',
    prepTime: 'Prep Time: 15 minutes',
    cookTime: 'Cook Time: 30 minutes',
    totalTime: 'Total Time: 45 minutes',
    servings: 'Serving: 4 people',
    calories: 'Calories: 1125kcal',
    tellIngredients: 'Ingredients: ',
    ingredients: [
        '14 ounces sweet shredded coconut or desiccated coconut',
        '1/2 cup butter',
        '1/2 cup brown sugar',
        '3 pieces raw eggs',
        '14 ounces condensed milk'
    ],
    tellInstructions: 'Instructions: ',
    instructions:[
        '1. Place the butter in a big bowl and cream using a fork',
        '2. Add-in the brown sugar and mix well',
        '3. Add the eggs and condensed milk then stir/beat until all ingredients are blended',
        '4. Put-in the Sweetened Shredded Coconut and distribute evenly with the other ingredient in the mixture',
        '5. In a mold (with paper cups if possible), place 1 tablespoon of the mixture on each of the cups',
        '6. Pre-heat oven at 370 degrees Fahrenheit for 10 minutes',
        '7. Bake the Coconut Macaroon mixture for 20 to 30 minutes or until color turns golden brown.',
        '8. Serve during dessert or snack time. Share and Enjoy!'
    ],
    youtube: 'https://www.youtube.com/embed/_hG1AABb48M' 
}
 ];

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