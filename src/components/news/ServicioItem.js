import React from 'react';

const ServicioItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <main className="container h03">
            <div className="caja-servicios text-center p-5">
                <div className="column gy-5">
                    <div className="col p-4">
                        <img src="img/placeholder-180x100.png" class="img-left" alt=""/>
                        <h4>{title}</h4>
                        <p dangerouslySetInnerHTML={{__html: body}}></p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ServicioItem;