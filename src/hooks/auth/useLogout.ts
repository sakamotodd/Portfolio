import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { Auth } from '../../firebase.config';
import { unSubMeta } from '../query/useUserChanged';

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