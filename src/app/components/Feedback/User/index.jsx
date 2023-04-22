import { BsArrowRightShort } from 'react-icons/bs';
import { userLogic } from './logic/logic';

export const FeedbackUser = ({ changeView }) => {
  const { register, handleSubmit, errors, onSubmit, feedbackUser } = userLogic(changeView);

  return (
    <article>
      <h3 className='font-bold'>{feedbackUser.title}</h3>
      <p>{feedbackUser.para}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Nomber' {...register('name')} />
        <p className='text-red-700'>{errors.name?.message}</p>
        <input type='text' placeholder='Email' {...register('email')} />
        <br />
        <p className='text-red-700'>{errors.email?.message}</p>
        <button>
          Siguiente <BsArrowRightShort />
        </button>
      </form>
    </article>
  );
};
