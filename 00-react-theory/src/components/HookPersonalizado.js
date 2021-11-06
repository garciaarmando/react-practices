import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HookPersonalizado() {
  let url = "https://pokeapi.co/api/v2/pokemons/";
  url = "https://jsonplaceholder.typicode.com/users";

  let { data, isPending, error } = useFetch(url);
  return (
    <>
      <h2>Personalized Hook</h2>
      <h3>
        <mark>{JSON.stringify(isPending)}</mark>
      </h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
    </>
  );
}
