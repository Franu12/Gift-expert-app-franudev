import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('Simpsons');


    // Para que la persona pueda escribir en la barra input 
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = ( event ) => {
        // Esto evita que se recargue la página
        event.preventDefault();

        // Esto evita que se acepten entradas de palabras nulas o con solo una letra.
        if (inputValue.trim().length <= 1) return

       /*  setCategories( categories => [inputValue, ...categories] ); */
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return(
        
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
    );
}; 