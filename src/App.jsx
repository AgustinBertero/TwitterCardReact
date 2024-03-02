import React, { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "midudev",
    name: "Agustin Bertero",
    isFollowing: true,
  },
  {
    userName: "mati",
    name: "Matias",
    isFollowing: false,
  },
  {
    userName: "Paco",
    name: "Paco Mendez",
    isFollowing: true,
  },
];

export function App() {
  //Destructuring, useState devuelve Array de 2 posiciones
  //const [name, setName ]= useState('midudev')
  return (
    <section className="App">
      {
        //RECORRER ARRAY DE OBJETOS
        users.map((user) => {
          const { userName, name, isFollowing } = user;
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          );
        })
      }
    </section>
  );
}
