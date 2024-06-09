import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () => {

    // Valor actual, Función para actualziar valor
    const [categories, setCategories] = useState([ 'Rick And Morty']);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory)
        // categories.push( newCategory ) 
         //setCategories(cat => [...cat, 'Fallout']);

         if (categories.includes(newCategory) ) return;

        // La función que nos actualiza el estado, lo hará creando un array con la nueva palabra y todo lo que veníamos buscando anteriormente.
         setCategories( [newCategory, ...categories ] );
    };


    return(
        <>

            <h1>Gif Expert App</h1>


        <AddCategory 
            onNewCategory = { (value) =>  onAddCategory(value) }
        />



        
            { 
            categories.map( (category) => (
                <GifGrid 
                key={category} 
                category = {category}
                 />
                ))
            };
    </>
    );
};