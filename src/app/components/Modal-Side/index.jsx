import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ModalSide = ({ title, toggleActive, children }) => {
  return (
    <article data-testid='feedback' className='fixed top-0 right-0 bg-white  md:max-w-sm p-9 z-[2]'>
      <div className='flex items-center justify-between  pb-6'>
        <h1 className='text-primary-900 font-bold text-[28px]'>{title}</h1>
        <AiOutlineCloseCircle
          data-testid='close'
          className='text-3xl text-primary-900 cursor-pointer'
          onClick={toggleActive}
        />
      </div>
      {children}
    </article>
  );
};
