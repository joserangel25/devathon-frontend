import { BsArrowRightShort } from 'react-icons/bs';
import { overallLogic } from './logic/logic';

export const FeedBackOverall = ({ changeView }) => {
  const { numbers, feedbackOverall, register, handleSubmit, errors, onSubmit } =
    overallLogic(changeView);

  return (
    <div data-testid='feedback-overall'>
      <h3 className='font-bold'>{feedbackOverall.title}</h3>
      <p>{feedbackOverall.para}</p>
      <p>{feedbackOverall.paraTwo}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>¿Está satisfecho/a con el rendimiento y la funcionalidad de la aplicación?</label>
        <div>
          <p>muy improbable</p>
          <p>muy probable</p>
        </div>

        <div className='flex'>
          {numbers.map((num) => (
            <div className='flex flex-col' key={num}>
              <input
                type='radio'
                value={num}
                name='OverallSatisfaction'
                {...register('overallSatisfaction')}
              />
              <span>{num}</span>
            </div>
          ))}
        </div>
        <p className='text-red-700'>{errors.overallSatisfaction?.message}</p>

        <input type='text' placeholder='Asunto' {...register('subject')} />
        <p className='text-red-700'>{errors.subject?.message}</p>

        <textarea placeholder='Mensaje' {...register('msg')}></textarea>
        <p className='text-red-700'>{errors.msg?.message}</p>

        <button>
          Siguiente <BsArrowRightShort />
        </button>
      </form>
    </div>
  );
};
