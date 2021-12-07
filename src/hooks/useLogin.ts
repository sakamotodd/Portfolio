import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Auth } from '../firebase.config';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pass, setPass] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const emailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const pwChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const pwNewCreate = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  }, []);

  const resetInput = useCallback(() => {
    setEmail('');
    setPassword('');
    setPass('');
  }, []);

  const toggleMode = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  const authUser = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isLogin) {
        try {
          await signInWithEmailAndPassword(Auth, email, password);
        } catch (e) {
          alert(e.message);
          return;
        }
        resetInput();
      } else {
        try {
          if (pass === password) {
            await createUserWithEmailAndPassword(Auth, email, password);
          } else {
            alert('パスワードが違います。');
          }
        } catch (e) {
          alert(e.message);
        }
        resetInput();
      }
    },
    [isLogin, resetInput, email, password, pass],
  );

  return {
    isLogin,
    email,
    pass,
    password,
    pwNewCreate,
    emailChange,
    pwChange,
    resetInput,
    authUser,
    toggleMode,
  };
};
