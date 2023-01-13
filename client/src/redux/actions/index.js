
import axios from 'axios';
export const GET_DIETS = 'GET_DIETS';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_RECIPES_NAME = 'GET_RECIPES_NAME';
export const GET_RECIPE = 'GET_RECIPE';
export const CREATE_RECIPES = 'CREATE_RECIPES';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const FILTER_RECIPES_BY_DIET = 'FILTER_RECIPES_BY_DIET';
export const ORDER_RECIPES_BY_SCORE = 'ORDER_RECIPES_BY_SCORE';
export const ORDER_RECIPES_BY_NAME = 'ORDER_RECIPES_BY_NAME';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const RESET_FILTERS = 'RESET_FILTERS'; 
export const FILTER_CREATED_RECIPES='FILTER_CREATED_RECIPES';

export const DELETE_RECIPE = 'DELETE_RECIPE';



export const getDiets = () => async (dispatch) => {
    try {
        const diets = await axios.get('http://localhost:3001/diets');
        dispatch({ type: GET_DIETS, payload: diets.data }); 
    } catch (error) {
        console.log(error)
    }    
    } 





 export const getAllRecipes = () => {
    return async(dispatch) => {
    try {
        const response = await axios.get('http://localhost:3001/recipes')
        dispatch({
            type: GET_ALL_RECIPES,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
} 
}



    

export const getRecipesName = (name) => {
    return async (dispatch) => {
        try {
           const response =  await axios.get(`http://localhost:3001/recipes?name=${name}`)
           dispatch({
            type: GET_RECIPES_NAME,
            payload: response.data
            })
        }catch(error){
            alert("This recipe doesn't exit");
            console.log(error)
        }   
}
}




 export const createRecipes = (payload) => { 
    return async function () {
        let response = await axios.post('http://localhost:3001/recipes', payload) 
    return response 
    } 
 }







export const filterRecipesByDiet = (payload) => (dispatch) => {
    dispatch({
        type: FILTER_RECIPES_BY_DIET,
        payload
    })
}



export const orderRecipesByScore = (payload) => (dispatch) => {
    dispatch({
        type: ORDER_RECIPES_BY_SCORE,
        payload
    })
}

export const orderRecipesByName = (payload) => (dispatch) => {
    dispatch({
        type: ORDER_RECIPES_BY_NAME,
        payload
    })
}


export const changePage = (payload) => (dispatch) => {
    dispatch({
        type: CHANGE_PAGE,
        payload
    })
}

export const cleanDetail = () => (dispatch) => {
    dispatch({
        type: CLEAN_DETAIL,
     
    })
}


export const getRecipe = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/recipes/${id}`)
                dispatch({
                    type: GET_RECIPE,
                    payload: response.data
                })
        } catch (error) {
            console.log(error)
        }
    }
}
export function filterCreatedRecipes (payload) {
    return {
    type: FILTER_CREATED_RECIPES,
    payload
}}
















