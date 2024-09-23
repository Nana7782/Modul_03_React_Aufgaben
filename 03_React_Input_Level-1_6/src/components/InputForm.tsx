import { useState } from "react";

interface User {
  name: string;
  lastName: string;
  email: string;
}

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Firstname"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Lastname"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>Firstname: {name}</p>
      <p>Lastname: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Form;
