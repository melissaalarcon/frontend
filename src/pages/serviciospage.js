import React from 'react';

const ServiciosPage = (props) => {
    return (   

        <main className="h03">
            <div className="container text-center p-5" id="cajas-servicios">
                <div className="column gy-5" id="services">
                    <div className="col p-4">
                        <img src="img/placeholder-180x100.png" class="img-left" alt=""/>
                        <h4>Movimiento de Suelos</h4>
                        <p>Realizamos excavaciones de precisión y creamos superficies perfectamente niveladas, desde predios barriales hasta parques industriales. Además, nos aseguramos de que tus suelos estén compactados para la correcta estabilidad de tus estructuras, y diseñamos soluciones de drenaje que mantienen la propiedad seca y protegida de la erosión fluvial.</p></div>
                    </div>
                    <div className="col p-4">
                        <img src="img/placeholder-180x100.png" class="img-right" alt=""/>
                        <h4>Pavimentación y asfaltado</h4>
                        <p>Desde carreteras hasta estacionamientos, proporcionamos asfaltado de alta calidad que soporta el paso del tiempo y las condiciones climáticas adversas. Realizamos un marcado vial preciso y duradero para garantizar la seguridad en carreteras y estacionamientos.</p></div>
                    <div class="col p-4">
                        <img src="img/placeholder-180x100.png" class="img-left" alt=""/>
                        <h4>Canchas de polo y fútbol</h4>
                        <p>Preparando una base estable y uniforme, utilizamos los mejores materiales y técnicas de instalación de césped para garantizar un terreno de juego de calidad internacional. Ofrecemos servicios de mantenimiento y restauración a lo largo del tiempo para asegurarnos de que tu cancha siga siendo de primera calidad.</p></div>
                    <div class="col p-4">
                        <img src="img/placeholder-180x100.png" class="img-right" alt=""/>
                        <h4>Pistas de salto</h4>
                        <p>Colaboramos estrechamente con vos para diseñar pistas de equitación y salto que se adapten a tus necesidades, ya sea para entrenamiento, competencia o recreación. Nuestros materiales de primera calidad aseguran la comodidad de jinetes y caballos.</p></div>
                </div>
        </main>
    );
}

export default ServiciosPage;