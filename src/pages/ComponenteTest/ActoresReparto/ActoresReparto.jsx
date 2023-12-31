import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { obtenerRepartoDePelicula } from '../../../services/servicesProvider'
export const ActoresReparto = () => {
  const [datos, setDatos] = useState(null)
  const idPelicula = 503616
  useEffect(() => {
    obtenerRepartoDePelicula(idPelicula)
      .then((respuesta) => {
        console.log(respuesta)
        setDatos(respuesta.cast)
      })
  }, [])
  return (
    <div >
      {datos ?
        datos.map((elemento,index) =>
          <div key={index}>
            <h2>Nombre Actor: {elemento.name}</h2>
            <p>Personaje: {elemento.character}</p>
            <img src={'https://image.tmdb.org/t/p/original' + elemento.profile_path} alt="" width={'150px'} />
          </div>
        )
        : ""}
    </div>
  )
}

