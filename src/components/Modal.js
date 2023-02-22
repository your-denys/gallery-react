import { useEffect } from 'react';

export const Modal = ({ children, onClose }) => {
  const handleClose = (e) => {
    if (e.key === 'Escape') onClose();
  };
  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) onClose();
  };
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  });

  return (
    <div className="Overlay" onClick={handleBackdrop}>
      <div className="Modal">{children}</div>
    </div>
  );
};
