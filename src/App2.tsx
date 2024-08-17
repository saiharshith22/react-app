import React from "react";
import Input from "./components/app-2/Input";
import Button from "./components/app-2/Button";
import Container from "./components/app-2/Container";

const App2 = () => {
  return (
    <main>
      <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your Age" type="number" />
      <p>
        <Button className="button" el="button" />
      </p>
      <p>
        <Button className="button" el="anchor" href="" />
      </p>
      <p>
        <Container
          as="button"
          className="button"
          onClick={() => console.log("im button")}
        >
          Container Button
        </Container>
      </p>
    </main>
  );
};

export default App2;
