export const Input = ({ children, type, placeholder, register, name, autoComplete, error }) => {
  return (
    <div className='relative w-full'>
      <input
        className={
          error
            ? 'border-[1px] border-alert-error w-full px-3 min-h-[45px] placeholder:text-neutral-500  outline-0 text-neutral-900'
            : 'border-[1px] border-neutral-500 w-full px-3 min-h-[45px] placeholder:text-neutral-500  outline-0 text-neutral-900'
        }
        type={type}
        {...register(name)}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <div className='absolute right-4 top-3 text-neutral-500 text-2xl'>{children}</div>
    </div>
  );
};
