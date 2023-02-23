import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export default function Page1() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setPersons(res.data);
    });
  });
  return (
    <div className="App">
      <h1 class="italic">Hello Bridgelabse</h1>
      <h2>Start editing to see some magic happen!</h2>
      {!persons ? (
        <p> no data </p>
      ) : (
        <div>
          {persons.map((p) => (
            <p key={p.id}>{p.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}
