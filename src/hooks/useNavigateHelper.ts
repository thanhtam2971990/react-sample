// utils/navigation.ts
import { useNavigate } from 'react-router-dom';

let navigateHelper: ((path: string) => void) | null = null;

export const useNavigateHelper = () => {
  const navigate = useNavigate();
  navigateHelper = navigate;
  return navigate;
};

export const navigateTo = (path: string) => {
  if (!navigateHelper) {
    console.warn('Navigation is not initialized');
    return;
  }
  navigateHelper(path);
};