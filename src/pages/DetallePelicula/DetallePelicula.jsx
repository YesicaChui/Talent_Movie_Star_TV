import Reparto from "../../Componentes/DetallePelicula/Reparto/Reparto";
import React, { useEffect, useState } from "react";
import { obtenerVideosPelicula } from "../../services/servicesProvider";
import "./Detalles.css";

export const DetallePelicula = ({idPelicula}) => {
  const [video, setVideo] = useState(null);
  // let idPelicula = 298618;

  useEffect(() => {
    obtenerVideosPelicula(idPelicula)
      .then((respuesta) => {
        console.log(respuesta);
        if (respuesta.results.length > 0) {
          setVideo(respuesta.results[0]);
        }
      });
  }, []);

  return (
    <div>
      {video && (
        <iframe
          width="600"
          height="400"
          src={`https://www.youtube.com/embed/${video.key}?si=aVicG-IXOHeD7NaU`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
      <Reparto></Reparto>
    </div>
  );
};
