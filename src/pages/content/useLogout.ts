import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie';
import { unSubMeta } from '../../hooks/login/useUserChanged';
import { Auth } from '../../util/firebase/firebase.config';

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
