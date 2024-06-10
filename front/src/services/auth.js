import { currentUser, authToken } from '@/stores';

const logout = async () => {
  currentUser.set(null);
  authToken.set(null);
};

export { logout };
