import React, { useEffect, useState } from 'react'
import { obtenerDetallePelicula } from '../../../services/servicesProvider'
import { useParams } from 'react-router-dom';

export const PruebaDetalle = () => {
  let {idPeli} = useParams()
  idPeli = idPeli || 299054;
  const [datos, setDatos] = useState(null)
  let idPelicula=299054
  useEffect(() => {
    obtenerDetallePelicula(idPeli )
      .then((respuesta) => {
        console.log(respuesta)
        setDatos(respuesta)
      })
  }, [])

  return (

    <div >
      {datos ?        
          <div>
            <h2>titulo: {datos.title}</h2>
            <p>idPelicula: {datos.id}</p>
            <p>descripcion: {datos.overview}</p>
            <p>fecha: {datos.release_date}</p>
            <p>estrellitas: {datos.vote_average}</p>
            {datos.genres.map((genero,index)=>(<li key={index}>idGenero: {genero.id} nombreGenero: {genero.name}</li>))}
            <img src={'https://image.tmdb.org/t/p/original' + datos.poster_path} alt="" width={'150px'} />
            <img src={'https://image.tmdb.org/t/p/original' + datos.backdrop_path} alt="" width={'150px'} />

          </div>      

        : ""}
    </div>
  )
}