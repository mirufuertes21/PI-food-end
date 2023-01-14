import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import {createRecipes} from '../../redux/actions';
import {getDiets, getAllRecipes} from '../../redux/actions/index.js';
import style from'./RecipeCreate.module.css';
import {Link} from 'react-router-dom';


export default function RecipeCreate() {
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);
    const allDiets= useSelector((state)=> state.allDiets)
    const history = useHistory();

    function validate (input){
        let errors = {};
    
        switch (true) {
           
            case !input.name || input.name.length < 3  ||  !/^[a-zA-Z\s]+$/.test(input.name) :
                errors.name = 'Name is required and must be alphanumeric';
                break;
            case !input.healthScore || input.healthScore < 0 || input.healthScore > 100 :
                errors.healthScore = 'Health Score is required, must be a number between 0 and 100.';
                break;
            case isNaN(input.healthScore):
                errors.healthScore = 'Must to be a Number'
                break;
            case  !(/^\d+$/.test(input.healthScore)):
                errors.healthScore = 'Must to be Integer';
                break;
            case input.diets.length < 1:
                errors.diets = 'Diets is required';
                break; 
            case !input.summary || input.summary.length < 10:
                errors.summary = 'Summary is required';
                break;
            case !input.steps || input.steps.length < 10:
                errors.steps = 'Steps is required';
                break;
            case !input.name === allDiets:
                errors.name='This name already exist'
                break;
           
            default:
                break;
        } 
        return errors;
     }

    const [input, setInput] = useState({
        name: '',
        healthScore: '',
        diets: [],
        summary: '',
        steps: '',
        
       
      
    });

    const [errors, setErrors] = useState({
        name: '',
        healthScore: '',
        diets: [],
        summary: '',
        steps: '',
    
    });
    
    useEffect(() => {
        dispatch(getDiets()); 
        dispatch(getAllRecipes())
    }, [dispatch]);
    
  
    function handleChange(e) {
        setInput({...input,[e.target.name]: e.target.value,}); 
        setErrors(validate({...input,[e.target.name]: e.target.value,})); 
    }

     function handleCheck(e) {
        setInput({...input, diets: [...input.diets, e.target.value]});
        setErrors(validate({...input, diets: [...input.diets, e.target.value]}));
    }

   async function handleSubmit(e) {
        e.preventDefault(); 

        const errorSave = validate(input);
        if(Object.values(errorSave).length !== 0){
          alert('The recipe is not created, fill in the required fields!')
        }else{
            dispatch(createRecipes(input));
            alert('Recipe created successfully');
            setInput({
                name: '',
                healthScore: '',
                diets: [],
                summary: '',
                steps: '',
                
            });
        history.push('/home');
        } 
    }

    return (
        <div className={style.container}>
 
  
           
            <form onSubmit={handleSubmit}>
                <div className={style.form__group}>
             
                <h1 className={style.title}>Create your own recipe</h1>
                <label className='form__label'>Name</label>
                <input className={errors.name ? "form__input__error" : "form__input"} type="text" name="name" value={input.name} onChange={handleChange} placeholder="Name of de Recipe..." />
                {errors.name && <p className={style.form__error}>{errors.name}</p>}
                <br/>

                <label className='form__label'>Health Score</label>
                <input className={errors.healthScore ? "form__input__error" : "form__input"} type="number" name="healthScore" value={input.healthScore} onChange={handleChange} placeholder="Health Score of the Recipe..." min = "0" max = "100" pattern='[0-9]+' required/>
                {errors.healthScore && <p className={style.form__error}>{errors.healthScore}</p>}
                <br/>


                <label className='form__label'>Select Diets</label>
                <div className='form__diets__container'>
                {diets.map((diet) => (
                    <div key={diet.id}>
                        <input className='form__checkbox' type="checkbox" name="diets" value={diet} onChange={handleCheck}/>
                        <label className='form__label__checkbox'>{diet}</label>
                    </div>
                ))}
                {errors.diets && <p className={style.form__error}>{errors.diets}</p>}
                </div>
                <br/>

                <label className='form__label'>Summary</label>
                <textarea  className={errors.summary ? 'form__textarea__error' : "form__textarea"}  type="text" name="summary" value={input.summary} onChange={handleChange} placeholder="Write a summary..."required/>
                {errors.summary && <p className={style.form__error}>{errors.summary}</p>} 
                <br/>

                <label className='form__label'>Steps</label>
                <textarea className={errors.steps ? 'form__textarea__error' : "form__textarea"} type="text" name="steps" value={input.steps} onChange={handleChange} placeholder="Write your steps..." required/>
                {errors.steps && <p className={style.form__error}>{errors.steps}</p>}
                <br/>

                {/* <label className={style.imageInput}>Image</label>
                {/* <textarea className='imagetext' type='text'name="image" value={input.image} onChange={handleChange} placeholder='Image URL...' /> */}
                {/* <Image ></Image>  */} 
               
               {/* <img src={photoDefault}  width={130} height={200} name="image" value={input.image} onChange={handleChange} ></img> */}
                {/* <img src={photoDefault} alt='hola' width={150} height={200}></img> */}

                <label className=""> </label>
                <button className='form__button' type="submit" >Create</button> 
                <Link to='/home'> <button className='buttonBack'>Back</button></Link>
                </div>
            </form>
        
        </div>
    )
}



