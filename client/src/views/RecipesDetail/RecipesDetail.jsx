import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getRecipe} from '../../redux/actions/index.js'
import { cleanDetail } from '../../redux/actions/index.js'
import style from'./RecipeDetail.module.css'
import Loading from '../../components/Loading/Loading.jsx'
import {Link} from 'react-router-dom'

export default function RecipesDetail(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const recipe = useSelector((state) => state.recipe);
 

  useEffect(() => {
    dispatch(getRecipe(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
         {!recipe.name && <Loading />}

      <div className={style.recipeDetail}>
   
      <div className="recipeDetail__img">
          {recipe.image ? (
            <img className="img" src={recipe.image} alt={recipe.name} />
          ) : null}
        </div>

        <div className="recipeDetail__info">
          <h1 className={style.title}>{recipe.name}</h1>

          <div className="recipeDetail__info__row">
            <div className={style.score__circle}><p className="score">{recipe.healthScore}</p></div>
            {recipe.diets ? ( recipe.diets.map((diet) => <p className={style.diet}>{diet.name}</p>)) : null}
          </div>
          <h1>Summary</h1>
          {recipe.summary ? (recipe.summary.replace(/<[^>]+>/g, '')) : null}
          <h1>Steps</h1>
          <p className={style.steps}>{recipe.steps}</p> 
           <Link to='/home'><button className={style.backButton}>Back</button></Link>
        </div>

      </div>
      

    </div>
  );
}
