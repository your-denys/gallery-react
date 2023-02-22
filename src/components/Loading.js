import { ImSpinner } from 'react-icons/im';

export const Loading = () => {
  return (
    <>
      <div className="spinner-wrapp">
        <ImSpinner size="32" className="icon-spin" />
        Loading...
      </div>
    </>
  );
};
