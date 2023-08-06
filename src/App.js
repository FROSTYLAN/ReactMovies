import React from "react";
import { Title } from "./Title";
import { Theme } from "./Theme";
import Form from "./Form";

const movies = [
  {
    name: "Avengers",
    available: 5,
  },
  {
    name: "Terminator",
    available: 3,
  },
];

export default function App() {
  return (
    <Theme>
      <Title>Películas</Title>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </Theme>
  );
}
