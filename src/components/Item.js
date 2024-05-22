import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleInCartClick() {
    setInCart(!inCart);
  }

  const itemClass = inCart ? "in-cart" : "";

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  const buttonClass = inCart ? "remove" : "add";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={() => handleInCartClick()}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
