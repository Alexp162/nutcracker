console.log('text')
let searchButton = document.querySelector('#searchButton')

let appId = '7b436059'
let appkey = '8187f8e18f04f9a8cfed9179fbb66a71'
console.log(document)
let response = {
  "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_ec290b2568b7d745a0762f6d5db4a042",
  "yield" : 15.0,
  "calories" : 367,
  'fat':25,
  'satFat':14,
  'carb':26,
  'sodium':1386,
  'protein': 8.8,
  "dietLabels" : [ "Stuffed Oysters" ],
  "healthLabels" : [ "Dairy Free", "MILK_FREE", "PEANUT_FREE", "TREE_NUT_FREE", "SOY_FREE", "FISH_FREE", "SHELLFISH_FREE" ],
  "cautions" : [ ],
  "totalNutrients" : {
    "ENERC_KCAL" : {
      "label" : "Energy",
      "quantity" : 21814.306200000003,
      "unit" : "kcal"
    },
    "FAT" : {
      "label" : "Fat",
      "quantity" : 1562.5579472000002,
      "unit" : "g"
    },
    "FASAT" : {
      "label" : "Saturated",
      "quantity" : 538.5602623999998,
      "unit" : "g"
    },
    "FATRN" : {
      "label" : "Trans",
      "quantity" : 0.015,
      "unit" : "g"
    },
    "CHOCDF" : {
      "label" : "Carbs",
      "quantity" : 390.41195,
      "unit" : "g"
    },
    "FIBTG" : {
      "label" : "Fiber",
      "quantity" : 48.5609,
      "unit" : "g"
    },
    "SUGAR" : {
      "label" : "Sugars",
      "quantity" : 205.60635,
      "unit" : "g"
    },
    "PROCNT" : {
      "label" : "Protein",
      "quantity" : 1466.6697507999997,
      "unit" : "g"
    },
    "CHOLE" : {
      "label" : "Cholesterol",
      "quantity" : 6153.39888,
      "unit" : "mg"
    },
    "NA" : {
      "label" : "Sodium",
      "quantity" : 14854.027320000001,
      "unit" : "mg"
    },

  },
  
}
searchButton.addEventListener('click',()=>{
    
    let jumbotron = document.querySelector('.jumbotron')
    jumbotron.innerHTML=`
      <h1 id='title' class="display-4 nutrition">${response.dietLabels[0]}</h1>
     <p> <a href="calories.html" id='healthLabels' class="nutrition">${response.healthLabels[0]}</a></p>
      <p> <a href="calories.html" id='calories' class="nutrition">calories: ${response.calories}</a></p>
       <p> <a href="fat.html" id='fat' class="nutrition">fat: ${response.fat}g</a></p>
        <p> <a href="satfat.html" id='satFat' class="nutrition">Saturated Fats:${response.satFat}g</a></p>
         <p> <a href="sodium.html" id='sodium' class="nutrition">Sodium: ${response.sodium}mg</a></p>
          <p> <a href="protein.html" id='protein' class="nutrition">Protein: ${response.protein}g</a></p> 
           <p> <a href="carb.html" id='carb'class="nutrition">Carbohydrates: ${response.carb}g</a></p>
    `
  //   let title = document.querySelector('#title')
  //   title.innerHTML=`${response.dietLabels[0]}`
  //   let calories = document.querySelector('#calories')
  //   calories.innerHTML=` calories: ${response.calories}`
  //   let healthLabels = document.querySelector('#fat')
  //   healthLabels.innerHTML=` Health Labels: ${response.healthLabels[0]}`
  //   let fat = document.querySelector('#fat')
  //   fat.innerHTML=` Fat: ${response.fat}g`
  //   let satFat = document.querySelector('#satFat')
  //   satFat.innerHTML=` Saturated Fat: ${response.satFat}g`
  //   let carb = document.querySelector('#carb')
  //   carb.innerHTML=`Carbohydrates: ${response.carb}g`
  //   let sodium = document.querySelector('#sodium')
  // sodium.innerHTML=` Sodium: ${response.sodium}mg`
  //   let protein = document.querySelector('#protein')
  //   protein.innerHTML=` protein: ${response.protein}g`
    
    let holder = document.querySelector('#holder')
    holder.classList.remove('hidden')
    

    // $.ajax({
    //     url: `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${appKey}`,
    //     type: 'post',
    //     data: {
    //         "title": "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing",
    //         "ingr": [
    //             "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
    //             "7 cloves garlic, minced",
    //             "1 tablespoon caraway seeds, crushed",
    //             "4 teaspoons salt",
    //             "Freshly ground pepper to taste",
    //             "1 teaspoon olive oil",
    //             "1 medium onion, peeled and chopped",
    //             "3 cups sourdough rye bread, cut into 1/2-inch cubes",
    //             "1 1/4 cups coarsely chopped pitted prunes",
    //             "1 1/4 cups coarsely chopped dried apricots",
    //             "1 large tart apple, peeled, cored and cut into 1/2-inch cubes",
    //             "2 teaspoons chopped fresh rosemary",
    //             "1 egg, lightly beaten",
    //             "1 cup chicken broth, homemade or low-sodium canned"
    //         ]
    //     },
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     dataType: 'json',
    //     success: function(data) {
    //         console.info(data);
    //     }
    // });





}) 



