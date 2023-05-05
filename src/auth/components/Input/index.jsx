export const Input = ({ children, type, placeholder, register, name, autoComplete, error }) => {
  return (
    <div>
      <input
        className={error ? 'border-2 border-rose-500' : ''}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {children}
    </div>
  );
};
