import { useSelector } from 'react-redux';
import { RootState } from '@/store/root-reducer';

export const useAuthentication = () => useSelector((state: RootState) => state.authentication);
