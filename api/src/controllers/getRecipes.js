const {Recipe, Diet} = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env;
//'fed26ff856154a5ab03b66799dadcb48'
//'55e11173334d4fc4b0086e1c27008ca1'
// //'ba81b4d07ca94195ba7811151d17dcdf'
// //'4603e2f310c74051b391a45322c829ef'
//'8561b93b557045c786eca613763754d1'
// //'ea5da3e101df459dbc0c70e189320e34'
// //'07369c7acacf42bfb527ffc6c4bd8511'
// //'07369c7acacf42bfb527ffc6c4bd8511'
//'ac95bcea9277480d80c33e317725650a'
const getRecipesApi = async ()=> {
    try {
    const recipesApi= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
    //const recipesApi = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
    const recipesApi2 = recipesApi.data.results?.map((element)=>{ 
        return {
            id: element.id,
            name: element.title,
            summary: element.summary,
            healthScore: element.healthScore,
            steps : element.analyzedInstructions[0]?.steps.map((e)=> e.step), 
            image: element.image,
            diets: element.diets.map((element) => ({name:element})),
        }
    });
  
        return recipesApi2; 
    } catch (error) {
        console.log(error) 
    }
};


const getRecipesDb = async () => {
    try {
        const recipesDb = await Recipe.findAll({ 
            
            include: {                           
                model: Diet,            
                attributes: ['name'],             
                through: {attributes: []} 
            }
        });
        
        return recipesDb; 
    } catch (error) {
        console.log(error);  
    }
}



const getAllRecipes = async () => {
    const api_recipes = await getRecipesApi(); 
    const db_recipes = await getRecipesDb(); 
    const allrecipes = api_recipes.concat(db_recipes); 
    return allrecipes; 

}






module.exports = {getRecipesApi, getRecipesDb, getAllRecipes};