import React from 'react';
const Jumbotron = () => {
    return (

        <div className='container bg-light'>
            <div className="jumbotron">
                <h1 className="display-2"><strong>A Warm Welcome!</strong></h1>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia hic pariatur ut, officia cum eum autem velit obcaecati ipsam ipsa, totam veritatis beatae consequatur earum? Mollitia exercitationem optio labore dolor!.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg mb-4" href="#" role="button">Call to action!</a>
                </p>
                <hr className="my-4" />
            </div>
        </div>
    );

}

export default Jumbotron;