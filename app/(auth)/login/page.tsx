"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AuthFormContainer } from "./styles";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: any) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e:any) => {
      e.preventDefault();

      console.log(email, password);
      router.push('/')
    },
    [email, password]
  );

  return (
    <AuthFormContainer>
      <div>
        <h1>Sign in to OXINION</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input name="email" value={email} onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <button>Log in</button>
        </div>
        <div>
          <Link href="/signup">
            Need an account?
            <button>Sign Up</button>
          </Link>
        </div>
      </form>
    </AuthFormContainer>
  );
};

export default Login;
