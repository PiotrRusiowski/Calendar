import React, { useEffect, useState } from "react";
import axios from "axios";

// Robimy hook, ktory zajmie sie komunikacja rest api

const useProductRestAPI = () => {
  let [products, setProducts] = useState([]);
  // Zmienna change pozwoli nam na zaciaganie danych z REST API tylko wtedy,
  // kiedy dokonano zmiany w REST API
  let [change, setChange] = useState(true);

  const BASE_URL = "http://localhost:8080/products";

  useEffect(() => {
    // Na poczatku, kiedy Twoj komponent sie laduje, pobierasz
    // wszystkie produkty, zeby je za chwile pokazac w komponencie
    const getData = async () => {
      await getAll();
    };
    getData().catch((err) => console.log(err));
    setChange(false); // Na poczatek zakladamy, ze nie zmian
    // w danych, bo dopiero te pobralismy
  }, [change]);

  // todo zamiast fetch wprowadz axios

  // Pobieranie wszystkich produktow
  const getAll = async () => {
    const response = await fetch(BASE_URL);
    setProducts(await response.json());
  };

  // Pobieranie produktu po id
  const getOne = async (id) => {
    if (change) {
      const response = await fetch(`${BASE_URL}/${id}`);
      return response.json();
    }

    const product = products.filter((p) => p.id === id);
    return product.length === 0 ? {} : product[0];
  };

  // Dodawanie nowego produktu

  const validate = (product) => {
    const errors = [];

    if (product === null || product === undefined) {
      errors.push({ field: "object", error: "is null" });
      return errors;
    }

    if (
      product.name === null ||
      product.name === undefined ||
      product.name.length < 5
    ) {
      errors.push({ field: "name", error: "name is not long enough" });
    }

    return errors;
  };

  const add = async (product) => {
    const errors = validate(product);
    if (errors.length !== 0) {
      return errors.map((e) => `${e.field}: ${e.error}`).join(", ");
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        Authorization:
          "3b80e441332e695a3eed711cbcd4058ddf1affc0003ed5fe66e24ab2654dd38298a6d063f6662c9fae89374885034041623c73d3780a6f301b08cb53c033283cc8ce675d2157dbefa0f3c9af5a8e61b58640a7de1bbb5c65cb0cbacb3ffc7b5876c718943eda2d3350a67214409e4c6e71b9348568fc38f908c5e3f975d04ebb",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // Dodajesz nowy element wiec change jest ustawione na true
    // a to powoduje ze przy ponownym ladowaniu komponentu
    // beda zaladowane wszystkie produkty z rest api
    setChange(true);
    return response.json();
  };

  const remove = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    setChange(true);
    return response.json();
  };

  return [products, getOne, add, remove];
};

// Komponent reprezentujacy pojdeynczy product
const Product = ({ product, getOne, remove }) => (
  <div className="card my-2">
    <div className="card-body">
      <h1 className="card-title">{product.id}</h1>
      <h3 className="card-text">{product.name}</h3>
      <h3 className="card-text">{product.quantity}</h3>
      <h3 className="card-text">{product.price}</h3>
      <h3 className="card-text">{product.category}</h3>
      <h3 className="card-text">{product.releaseDate}</h3>
      <div className="my-3">
        <button
          className="btn btn-primary me-2"
          onClick={(event) => getOne(product.id)}
        >
          Details
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={(event) => remove(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  </div>
);

const Hooks6_RestAPI = () => {
  let [products, getOne, add, remove] = useProductRestAPI();

  const getOneProduct = async (id) => console.log(await getOne(id));

  // todo dorob do tego formularz
  const product = {
    name: "AAAAAAAAA",
    price: 100,
    category: "A",
    quantity: 20,
    releaseDate: "2019-10-11",
  };
  const addProduct = async () => console.log(await add(product));

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          getOne={getOneProduct}
          remove={remove}
        />
      ))}
      <div>
        <button
          className="mt-3 me-2 btn btn-success"
          onClick={() => addProduct()}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Hooks6_RestAPI;
