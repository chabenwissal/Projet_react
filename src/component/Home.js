import React from 'react';
import Products from './Products';


const Home = () => {
    return (
        
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                        <img src="/assets/bg1.jpg" className="card-img" alt="Background" height="500px"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                            <div className="container">
                            <h5 className="card-title dispaly-5 fw-bolder mb-0">NEW SEASON</h5>
                            <p className="card-text lead fs-2">CHEK OUT ALL THE TRENDS</p>
                            </div>
                            
                        
                    </div>
                </div>
              <Products />
            </div>
       
    );
}
export default Home;