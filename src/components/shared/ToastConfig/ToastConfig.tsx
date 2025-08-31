import { Toaster } from 'react-hot-toast';

const ToastConfig = () => {
  return (
    <Toaster
      containerStyle={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 2,
      }}
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
        style: {
          minWidth: '300px',
          minHeight: '150px',
          padding: '10px',
          border: '3px solid var(--border-color)',
          borderRadius: '10px',
          background: 'black',
          color: 'var(--second-text-color)',
          fontSize: '18px',
        },
      }}
    />
  );
};

export default ToastConfig;
