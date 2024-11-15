import React, { useEffect, useState } from 'react';

const Bandeja = ({ token }) => {
    const [correos, setCorreos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const systemId = "2";


    //pq tira error
    useEffect(() => {
        const fetchCorreos = async () => {
            try {
                const response = await fetch('https://poo2024.unsada.edu.ar/yimeil/emails', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: "66484954fe42e9f79500097bda2f784fb9dea7c479bc2e6374a3f3491a9f51ea",
                        systemId: 2,
                    })
                  });
                const data = await response.json();
                setCorreos(data);
            } catch (error) {
                console.error("Error fetching emails:", error);
            } finally {
                setCargando(false);
            }
        };

        fetchCorreos();
    }, [token]);

    return (
        <div className="capa">
            {cargando ? <p>Cargando correos...</p> : <ul>{correos.map(correo => <li key={correo.id}>{correo.asunto}</li>)}</ul>}
        </div>
    );
};

export default Bandeja;
