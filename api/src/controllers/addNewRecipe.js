const {Recipe, Diet} = require('../db.js');


const addNewRecipe = async (name, summary, healthScore, steps, createdInDB, diets,image) => {
    try{
        const newRecipe = await Recipe.create({
        name,
        summary,
        healthScore,
        steps,
        createdInDB,
        image,
        });
    
        if(diets){  
            const dietsDB = await Diet.findAll({ 
                 where : {
                    name : diets
                }
                });
        await newRecipe.addDiet(dietsDB);
    }
    
    return newRecipe; 
} catch(error){
    console.log(error);
}
}


module.exports = {addNewRecipe};


    