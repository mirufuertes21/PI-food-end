import { GET_DIETS, GET_ALL_RECIPES, GET_RECIPES_NAME, GET_RECIPE, CREATE_RECIPES } from '../actions/index.js';
import { FILTER_RECIPES_BY_DIET, ORDER_RECIPES_BY_NAME, ORDER_RECIPES_BY_SCORE, CHANGE_PAGE, CLEAN_DETAIL,FILTER_CREATED_RECIPES } from '../actions/index.js';

 const initialState = {

    diets: [],  
    recipes: [],  
    allRecipes : [],
    recipe: {},  
    createdRecipe: [],  

   
    recipesPerPage: 9, 
    currentPage: 1, 
};



export default function rootReducer(state = initialState, action) {
    switch (action.type) {
  
        case GET_DIETS: //
     
            return {
                ...state,
                diets: action.payload,
            }
        case GET_ALL_RECIPES: 
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload,
            }  
        case GET_RECIPES_NAME: 
            return {
                ...state,
                recipes: action.payload,
                allrecipes : state.allRecipes, 
                currentPage : 1,
            }
        case GET_RECIPE: 
            return {
                ...state,
                recipe: action.payload,
            }
        case CREATE_RECIPES: 
            return {
                ...state,
                createdRecipe: [...state.createdRecipe, action.payload], 
            }


      
        case FILTER_RECIPES_BY_DIET: 
         let filterDiet=[]
          filterDiet = state.recipes.filter((recipe)=> recipe.diets.find((e)=> e.name === action.payload))
            return {
                ...state,
                recipes: filterDiet,
                currentPage:1,
            }
            
        case ORDER_RECIPES_BY_SCORE: 
             
           const orderByScore = action.payload === 'up' ? state.recipes.sort((a, b) => a.healthScore > b.healthScore ? -1 : b.healthScore > a.healthSocre ? 1 : 0) :
            state.recipes.sort((a, b)=> a.healthScore > b.healthScore ?  1 : b.healthScore > a.healthScore ? -1 : 0)
           
            return {
                ...state,
                recipes: orderByScore,
      
               // currentPage: 1,
            } 
            case ORDER_RECIPES_BY_NAME: 
          
            const orderByName = action.payload === 'asc' ? state.recipes.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0) :
            state.recipes.sort((a, b)=> a.name > b.name ?  -1 : b.name > a.name ? 1 : 0)
           
            return {
                ...state,
                recipes: orderByName,  
    
               // currentPage: 1,
            } 
        case CHANGE_PAGE: 
           
            return {
                ...state,
                currentPage: Number(action.payload)? parseInt(action.payload) : action.payload === 'Next' ? (parseInt(state.currentPage) + 1 )  : (parseInt(state.currentPage) - 1 )
            }
            case CLEAN_DETAIL:
                return {
                    ...state, 
                    recipe: {}
                }

         case FILTER_CREATED_RECIPES:
            const apiDb = action.payload
            const copy = [...state.allRecipes]
            if(apiDb === 'created'){
            return {
             ...state,
              recipes: copy.filter(recipe => recipe.createdInDb)
        }
      }
      if (apiDb === 'api'){
        return {
        ...state,
        recipes: copy.filter(recipe=> !(recipe.createdInDb))
      }}
      if( apiDb === 'all'){
        return{
            ...state,
            recipes: copy,
        }
      }



            
                   

        default:
            return {...state}
    }
}



