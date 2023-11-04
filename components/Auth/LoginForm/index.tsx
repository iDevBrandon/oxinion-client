"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AuthFormContainer,
  CompleteButton,
} from "@/components/Auth/SignUpForm/styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInAPI } from "@/apis/auth";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";

const LoginForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: me } = useMyInfoQuery();

  console.log(me);

  const onChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: any) => {
    setPassword(e.target.value);
  }, []);

  const { mutate, isLoading } = useMutation(signInAPI, {
    onError: (error: any) => {
      alert(error.response?.data);
    },
    onSuccess: async () => {
      queryClient.refetchQueries(["user"]);
    },
  });

  const handleForm = useCallback(
    (e: any) => {
      e.preventDefault(); // Prevent the default form submission behavior
      mutate({ email, password });
    },
    [email, mutate, password]
  );

  useEffect(() => {
    if (me && me._id) {
      router.replace("/");
     }
  }, [me && me._id]);

  return (
    <AuthFormContainer>
      <div>
        <h1>Sign in to OXINION</h1>
      </div>
      <form onSubmit={handleForm}>
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

export default LoginForm;
