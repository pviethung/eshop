import toast from 'react-hot-toast';

export const useToast = (type: 'success' | 'error') => {
  const showToast = toast[type];
  return {
    showToast,
  };
};
