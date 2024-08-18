import React, { useRef } from "react";
import Input from "./components/app-2/Input";
import Button from "./components/app-2/Button";
import Container from "./components/app-2/Container";
import Form from "./components/app-2/Form";

const App2 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: number };
    console.log("data from form", extractedData);
  };
  return (
    <main>
      <Input id="name" label="Your Name" type="text" ref={inputRef} />
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
      <Form onSave={handleSave}>
        Form:
        <Input type="text" label="Name" id="name" />
        <Input type="text" label="Age" id="age" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
    </main>
  );
};

export default App2;
