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
import { FieldValues, useForm } from 'react-hook-form';
import { Auth } from '../../firebase/firebase.config';
import { SignInFormDTO, SignUpFormDTO } from '../../interface/types';

export const useLogin = () => {
  const signInUser = useCallback(
    async (data: SignInFormDTO) => {
        try {
          await signInWithEmailAndPassword(Auth, data.email, data.password);
        } catch (e) {
          alert(e.message);
          return;
        }
    },
    [],
  );
  const signUpUser = useCallback(
    async (data: SignUpFormDTO) => {
        try {
            await createUserWithEmailAndPassword(Auth, data.email, data.password).then(() => {
              const md5 = crypto.createHash('md5');
              const hashStr = md5.update(data.email, 'binary').digest('hex');
              const url = `https://www.gravatar.com/avatar/${hashStr}/?d=robohash`;
              updateProfile(Auth.currentUser, {
                photoURL: url,
              });
            });
        } catch (e) {
          alert(e.message);
        }
      },
    [],
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
    signInUser,
    signUpUser,
    loginWithGithub,
    loginWithGoogle,
  };
};
