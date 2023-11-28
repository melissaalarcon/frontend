import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ServicioItem from '../components/news/ServicioItem';

const ServiciosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const cargarServicios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/servicios');
            setServicios(response.data);
            setLoading(false);
        };
    cargarServicios();
    }, []);

    return (   
        <section className='h03'>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                servicios.map(item => <ServicioItem key = {item.id}
                    imagen={item.imagen} title={item.titulo} subtitle={item.subtitulo} body={item.cuerpo} />)
            )
        }
        </section>
    );
}

export default ServiciosPage;