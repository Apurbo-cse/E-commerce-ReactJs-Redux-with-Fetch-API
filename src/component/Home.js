import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card text-bg-dark">
          <img src="/assets/bg.png" className="card-img" alt="/" height={500} />
          <div className="card-img-overlay d-flex flex-column justify-content-around">
            <div className="container">
              <h5 className="card-title display-3 text-mute fw-bolder mb-0">
                NEW SESSION ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
