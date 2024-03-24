import React, { useEffect, useState } from "react";
import { Shoe } from "../constants/shoeData";
import ShoeItem from "./ShoeItem";

function ShoeTable() {
  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/shoes");
      const data = await res.json();
      setShoes(data);
    };
    fetchData();
  }, [shoes]);

  return (
    <div className="max-w-3xl mx-auto mt-8 text-center">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Name</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Price</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">
              Release Date
            </th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">
              Available
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {shoes.map((shoe) => (
            <ShoeItem key={shoe.id} shoe={shoe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShoeTable;
