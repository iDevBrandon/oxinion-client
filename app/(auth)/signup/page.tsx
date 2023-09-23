"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";

const Signup = () => {
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
        <h1>Sign up for OXINION</h1>
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
          <Link href="/login">
            Already have an account?
            <button>Sign In</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
