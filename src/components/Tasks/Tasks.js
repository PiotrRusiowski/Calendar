import React, { useEffect } from "react";
import Tasks from "./Tasks";

const ProductsContainer = (props) => {
  // useEffect(() => {
  //         fetch('http://localhost:8080/products')
  //             .then(response => response.json())
  //             // Wlasnie tutaj wywolalem akcje fetchProducts
  //             // Zauwaz ze odwolalem sie do niej z poziomu props
  //             .then(products => props.fetchProducts(products))
  //     }, []
  // )

  // Znowu poprzez props odwoluje sie tym razem do products
  // i to bedzie ten fragment stanu, ktory produkty
  return (
    <div className="col-6 offset-3">
      <Tasks tasks={props.tasks} />
    </div>
  );
};

export default ProductsContainer;
