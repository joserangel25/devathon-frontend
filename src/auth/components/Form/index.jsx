export const Form = ({ children, handleSubmit, onSubmit, title, paragraph }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      {children}
    </form>
  );
};
