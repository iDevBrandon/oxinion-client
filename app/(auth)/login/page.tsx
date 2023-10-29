"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AuthFormContainer,
  CompleteButton,
} from "@/components/Auth/SignUpForm/styles";

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
    (e: any) => {
      e.preventDefault();

      console.log(email, password);
      router.push("/");
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
          <input name="email" value={email} onChange={onChangeEmail} required />
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
          <CompleteButton>Log in</CompleteButton>
        </div>
        <div>
          <Link href="/signup">Need an account?</Link>
        </div>
      </form>
    </AuthFormContainer>
  );
};

export default Login;
