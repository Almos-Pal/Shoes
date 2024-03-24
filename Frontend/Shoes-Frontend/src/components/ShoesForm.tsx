import React, { FormEvent, useRef } from "react";

function ShoesForm() {
  const url = "http://localhost:3000/shoes";
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const release_dateRef = useRef<HTMLInputElement>(null);
  const availableRef = useRef<HTMLInputElement>(null);

  async function AddNewShoes(event: FormEvent) {
    event.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    const release_date = release_dateRef.current?.value;
    const available = availableRef.current?.checked;
    const shoe = {
      name: name,
      price: price,
      release_date: release_date,
      available: available,
    };
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(shoe),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      console.log("New item successfully added!");
      nameRef.current!.value = "";
      priceRef.current!.value = "";
      release_dateRef.current!.value = "";
      availableRef.current!.checked = false;
    }
  }
  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={(event) => AddNewShoes(event)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            ref={nameRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            type="number"
            ref={priceRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="release_date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Release Date
          </label>
          <input
            type="date"
            ref={release_dateRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="available"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Available
          </label>
          <input
            type="checkbox"
            ref={availableRef}
            className="mr-2 leading-tight"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShoesForm;
