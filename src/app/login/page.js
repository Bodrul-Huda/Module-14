"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "email@email.com",
    password: "123",
  });

  const handleChange = (name, value) => {
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.email.length === 0) {
      alert("Email Required");
    } else if (values.password.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(values) };
      const response = await fetch("/api/login", config);
      const json = await response.json();
      if (json["status"] === true) {
        router.replace("/dashboard");
      } else {
        alert(json["message"]);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto flex justify-center">
        <div className="bg-slate-50 w-96 py-10 my-24 rounded-md px-4 ">
          <h2 className="py-4 font-bold text-lg text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
              type="email"
              value={values.email}
              className="w-full my-2  py-1 shadow-md bg-gray-50 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
              type="password"
              value={values.password}
              className="w-full my-2 shadow-md bg-gray-50 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button
              type="submit"
              className="flex my-2 mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
