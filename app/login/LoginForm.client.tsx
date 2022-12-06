"use client";

import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";
import { postData } from "../../lib/getData";

interface InputDTO {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [{ email, password }, setInput] = useState<InputDTO>({
    email: "",
    password: "",
  });

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log({ email, password });

      postData<InputDTO>("/users/login", { email, password })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    [email, password]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 py-8 mx-auto my-0 border w-96"
    >
      <fieldset className="flex flex-col items-center gap-2">
        <label htmlFor="email">email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleChangeInput}
          className="border"
        />
      </fieldset>

      <fieldset className="flex flex-col items-center gap-2">
        <label htmlFor="password">password</label>
        <input
          type="text"
          value={password}
          name="password"
          onChange={handleChangeInput}
          className="border"
        />
      </fieldset>

      <button className="p-2 ring-1" type="submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
