"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: any) => {
    setPassword(e.target.value);
  }, []);

  return (
    <div>
      <div>
        <h1>Sign in to OXINION</h1>
      </div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input name="email" value={email} onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={email}
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
    </div>
  );
};

export default Login;
