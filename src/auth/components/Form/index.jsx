export const Form = ({ children, handleSubmit, onSubmit, title, paragraph }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[500px] text-center'>
      <h1 className='font-bold text-primary-900 text-[36px]'>{title}</h1>
      <p className='w-full text-neutral-500 pt-1 pb-4 text-pt'>{paragraph}</p>
      {children}
    </form>
  );
};
