import React from 'react';

const Card = () => {
    return (

        <div className="card" style={{width: "17rem"}}>
            <div className="card-body">
                <div className="col-12 col-8 col-6 col-4">
                    <img src="https://cdn-1.motorsport.com/images/amp/6D1XQyJ0/s1000/marc-marquez-gresini-racing-3.jpg" alt="" class="img-fluid h-50 object-fit-cover" />
                    <div className="card-img-top" alt="MM93" />
                    <div className="card-body">
                        <h5 className="card-title">MARC MARQUEZ</h5>
                        <p className="card-text">Marc Márquez Alentà es un piloto de motociclismo español que compite en MotoGP. Ha ganado ocho títulos del Campeonato del Mundo de Motociclismo en tres categorías diferentes: 125cc, Moto2 y seis veces en MotoGP</p>
                        <button className="btn btn-primary" type="submit">find Out More</button>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Card;

