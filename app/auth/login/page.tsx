'use client'

import { TextInput } from "@/app/ui/commons/snippets";
import { signIn } from "next-auth/react";
import { ErrorAlert } from "@/app/ui/commons/snippets";
import { useState } from "react";


export default function LoginForm() {

  const [internalError, setInternalError] = useState<boolean>(false);
  const [wrongCred, setWrongCred] = useState<boolean>(false);

  async function submitLogin(e: React.FormEvent) {
    try {
      e.preventDefault();
      let username = (document.getElementById('login-username')! as HTMLInputElement).value;
      let password = (document.getElementById('login-password')! as HTMLInputElement).value;
      let loginRes = await signIn('credentials', { redirect: false, username, password });
      if (loginRes?.error) {
        if (loginRes?.error === "CredentialsSignin") {
          setWrongCred(true);
          return;
        }
        setInternalError(true);
        return
      }
      window.location.href = "/";
    } catch (e) {
      setInternalError(true);
    }
  }


  return (
    <>
      <div className="md:col-span-1 md:col-start-2">
        {wrongCred && !internalError &&
          <ErrorAlert message="Username or Password is wrong." />
        }
        {!wrongCred && internalError &&
          <ErrorAlert message="Something went wrong from ourside. Please try later." />
        }
        <form id="login-form" onSubmit={submitLogin}>
          <TextInput
            id="login-username"
            type="text"
            placeHolder="Please enter your username"
            key={"username"}
            labelText="Username"
            name="username"
            required
          />
          <TextInput
            id="login-password"
            type="password"
            placeHolder="Please enter your password"
            key={"password"}
            labelText="Password"
            name="password"
            required
          />
          <div className="text-center">
            <button type="submit" className="btn mx-auto">Login</button>
          </div>
        </form>
      </div>
    </>
  );

} 
