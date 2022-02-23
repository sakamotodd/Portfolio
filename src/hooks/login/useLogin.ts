import createHmac from 'crypto';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from '@firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ChangeEvent, useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Auth, storage } from '../../firebase/firebase.config';
import { SignInFormDTO, SignUpFormDTO } from '../../interface/types';

export const useLogin = () => {
  const [tweetImage, setTweetImage] = useState<File | null>(null);

  // メールアドレスログイン（onSubmit）
  const signInUser = useCallback(async (data: SignInFormDTO) => {
    try {
      await signInWithEmailAndPassword(Auth, data.email, data.password);
    } catch (e) {
      alert(e.message);
      return;
    }
  }, []);

  // 画像取得（onSubmit）
  const getImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files![0]) {
        setTweetImage(e.target.files![0]);
        e.target.value = '';
      }
    },
    [],
  );

  // メールアドレス作成(onSubmit)
  const signUpUser = useCallback(
    async (data: SignUpFormDTO) => {
      try {
        await createUserWithEmailAndPassword(Auth, data.email, data.password).then(async (user) => {
          let url = '';
          if (tweetImage) {
            const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(16)))
              .map((n) => S[n % S.length])
              .join('');
            const fileName = randomChar + '_' + tweetImage.name;
            await uploadBytes(ref(storage, `avatars/${fileName}`), tweetImage);
            url = await getDownloadURL(ref(storage, `avatars/${fileName}`));
          } else {
            const md5 = createHmac.createHash('md5');
            const hashStr = md5.update(data.email, 'binary').digest('hex');
            url = `https://www.gravatar.com/avatar/${hashStr}/?d=robohash`;
          }
          updateProfile(Auth.currentUser, {
            photoURL: url,
            displayName: data.name,
          });
        });
      } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
          toast.error('そのメールアドレスは既に使用されています。');
        } else {
          toast.error(e.message);
        }
      }
    },
    [tweetImage],
  );

  // githubボタン（onClick）
  const loginWithGithub = useCallback(async (): Promise<void> => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(Auth, provider);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  // googleボタン（onClick）
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
    tweetImage,
    loginWithGithub,
    loginWithGoogle,
    getImage,
  };
};
