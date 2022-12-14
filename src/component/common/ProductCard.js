import React from "react";

const ProductCard = ({ props }) => {
  return (
    <>
      <div className="col-md-3 mb-3">
        <div className="card h-100 text-center p-4 " key={props.id}>
          <img
            src={props.image}
            className="card-img-top"
            alt={props.title}
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title mb-0">
              {props.title.substring(0, 20)}...
            </h5>
            <p className="card-text lead fw-bold">${props.price}</p>
            <a href="#" className="btn btn-outline-warning">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
