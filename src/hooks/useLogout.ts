import React from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { Auth } from '../firebase.config';
import { unSubMeta } from './useUserChanged';

const cookie = new Cookies();
export const useLogout = () => {
  const logout = async () => {
    if (unSubMeta) {
      unSubMeta();
    }
    Auth.signOut();
    cookie.remove('token');
  };
  return {logout};
};
