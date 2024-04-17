import { Fragment } from "react";
import product from "../style/product.module.css";
function ProductDetail() {
  const ProductData = {
    title: "FitBit 19 - The Smartest Watch",
    description:
      "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",
    colorOptions: [
      {
        styleName: "Black Strap",
        imageUrl: "https://imgur.com/iOeUBV7.png",
      },
      {
        styleName: "Red Strap",
        imageUrl: "https://imgur.com/PTgQlim.png",
      },
      {
        styleName: "Blue Strap",
        imageUrl: "https://imgur.com/Mplj1YR.png",
      },
      {
        styleName: "Purple Strap",
        imageUrl: "https://imgur.com/xSIK4M8.png",
      },
    ],
    featureList: ["Time", "Heart Rate"],
  };
  Object.freeze(ProductData);

  const colorSelect = ProductData.colorOptions.map((color, index) => {
    return (
      <div key={index}>
        <img src={color.imageUrl} alt="" className={product.colorOptions} />
      </div>
    );
  });
  const hour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const minute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <Fragment>
      <div className="product-detail row">
        <div className="left col-4">
          <img
            className={product.productPreview}
            src="https://imgur.com/iOeUBV7.png"
            alt="Product Preview"
          />
          {/* <div className="time">
            <p>
              {hour}:{minute}
            </p>
          </div> */}
          <div className="heart-beat">
            <i className="fa-solid fa-heart-pulse"></i>
            <p>89</p>
          </div>
        </div>
        <div className="right col-6">
          <div className={product.productInfo}>
            <h3>{ProductData.title}</h3>
            <p>{ProductData.description}</p>
            <h3>Select Color</h3>
            <div className={product.optionContainer}>{colorSelect}</div>
            <h3>Features</h3>
            <div className="features">
              <button className="active">Time</button>
              <button>Heart Rate</button>
            </div>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ProductDetail;
