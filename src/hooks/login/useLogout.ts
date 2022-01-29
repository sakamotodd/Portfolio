import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie';
import { Auth } from '../../firebase/firebase.config';
import { unSubMeta } from './useUserChanged';

const cookie = new Cookies();
export const useLogout = () => {
  const logout = async () => {
    if (unSubMeta) {
      unSubMeta();
    }
    await signOut(Auth);
    cookie.remove('token');
  };
  return { logout };
};
