"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "@/apis/auth";
import { useRouter } from "next/navigation";
import { AuthFormContainer, CompleteButton, ErrorMessage } from "./styles";
import useInput from "@/hooks/useInput";

const SignUpForm = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(registerAPI, {
    onSuccess: () => {
      router.push("/");
    },
    onError: (error: any) => {
      alert(error.response.data);
    },
  });

  const [username, onChangeUsername] = useInput<string>("");
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");
  const [passwordCheck, handlePasswordCheck] = useInput("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  useEffect(() => {
    setPasswordError(password !== passwordCheck);
  }, [password, passwordCheck, setPasswordError]);

  const handleTerm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      alert("Passwords do not match");
      return;
    }

    console.log("submitted");

    mutate({ username, email, password });
  };

  return (
    <AuthFormContainer>
      <div>
        <h1>Sign up for OXINION</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            name="username"
            value={username}
            onChange={onChangeUsername}
            required
          />
        </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={passwordCheck}
            onChange={handlePasswordCheck}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="user-term"
            checked={term}
            onChange={handleTerm}
          />
          Click to Agree terms and conditions
        </div>

        {passwordError && <ErrorMessage>Password does not match</ErrorMessage>}

        <div>
          <CompleteButton type="submit">Complete to login</CompleteButton>
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

export default SignUpForm;
