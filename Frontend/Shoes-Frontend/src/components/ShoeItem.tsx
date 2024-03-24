import React from "react";
import { Shoe } from "../constants/shoeData";

interface Props {
  shoe: Shoe;
}

function ShoeItem(props: Props) {
  const releaseDate = new Date(props.shoe.release_date);

  return (
    <tr>
      <td>{props.shoe.name}</td>
      <td>{props.shoe.price}$</td>
      <td>{releaseDate.toDateString()}</td>
      <td>{props.shoe.available ? "✔️" : "❌"}</td>
    </tr>
  );
}

export default ShoeItem;
