import React from "react";

const ProductCard = ({ props }) => {
  return (
    <>
      <div className="col-md-3 mb-3">
        <div class="card h-100 text-center p-4 " key={props.id}>
          <img
            src={props.image}
            class="card-img-top"
            alt={props.title}
            height="250px"
          />
          <div class="card-body">
            <h5 class="card-title mb-0">{props.title.substring(0, 20)}...</h5>
            <p class="card-text lead fw-bold">${props.price}</p>
            <a href="#" className="btn btn-outline-dark">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
