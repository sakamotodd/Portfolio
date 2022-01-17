import crypto from 'crypto';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from '@firebase/auth';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Auth } from '../../firebase.config';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pass, setPass] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const gravatar = useCallback(() => {
    const md5 = crypto.createHash('md5');
    const hashStr = md5.update(email, 'binary').digest('hex');
    const url = `https://www.gravatar.com/avatar/${hashStr}/?d=robohash`;
    return url;
  },[email]);

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
            await createUserWithEmailAndPassword(Auth, email, password).then((user) => {
              const url = gravatar();
              updateProfile(Auth.currentUser, {
                photoURL: url,
              });
            });
          } else {
            alert('パスワードが違います。');
          }
        } catch (e) {
          alert(e.message);
        }
        resetInput();
      }
    },
    [isLogin, resetInput, email, password, pass, gravatar],
  );
  const loginWithGithub = useCallback(async (): Promise<void> => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(Auth, provider);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  const loginWithGoogle = useCallback(async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(Auth, provider);
    } catch (e) {
      alert(e.message);
    }
  }, []);
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
    loginWithGithub,
    loginWithGoogle,
  };
};
