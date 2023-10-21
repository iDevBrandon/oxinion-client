"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AuthFormContainer } from "./styles";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeUsername = useCallback((e: any) => {
    setUsername(e.target.value);
  }, []);

  const onChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: any) => {
    setPassword(e.target.value);
  }, []);

  const onChangeConfirmPassword = useCallback((e: any) => {
    setConfirmPassword(e.target.value);
  }, []);

  return (
    <AuthFormContainer>
      <div>
        <h1>Sign up for OXINION</h1>
      </div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input name="username" value={username} onChange={onChangeUsername} />
        </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            required
          />
        </div>
        <div>
          <button type="submit">Complete to login</button>
        </div>
      </form>
      <div>
        <Link href="/login">
          Already have an account?
          <button>Sign In</button>
        </Link>
      </div>
    </AuthFormContainer>
  );
};

export default Signup;
