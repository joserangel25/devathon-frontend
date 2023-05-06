export const Button = ({ children }) => {
  return (
    <button className='min-h-[45px] bg-primary-900 w-full text-white uppercase overflow-hidden border-0 hover:bg-primary-700 transition ease-in-out'>
      {children}
    </button>
  );
};
