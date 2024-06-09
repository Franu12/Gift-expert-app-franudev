import { useState } from "react";
import { useEffect } from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";

import { GiftGridItem } from "./GiftGridItem";
/* import { getGifs } from "./helpers/getGifs"; */



export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs( category );


  
  
  return (
    <>

    <h3>{category}</h3>
    
    {
      isLoading && ( <h2>Cargando...</h2> )
    }

    <div className="card-grid">
        {
          images.map( (image) => ( 
          
          <GiftGridItem 
          
          key={image.id}
          { ...image }
          />
          ))
        }
    </div>

    </>

  )

}