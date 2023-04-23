import { FeedbackUser } from './User';
import { FeedbackThanks } from './Thanks';
import { FeedBackOverall } from './Overall';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FeedbackLogic } from './FeedbackLogic';

const Feedback = () => {
  const { closeView, active, toggleActive, changeView, view } = FeedbackLogic();

  return (
    <article>
      <button
        onClick={closeView}
        className='fixed top-2/4 -right-[55px] font-bold uppercase min-h-[40px] min-w-[150px] -rotate-90 bg-slate-300 border-2 border-slate-500 z-[1]'
      >
        Feedback
      </button>
      {active && (
        <div
          data-testid='feedback'
          className='fixed top-0 right-0 bg-slate-100 min-h-screen max-w-sm p-10 z-[2]'
        >
          <div className='py-3'>
            <AiOutlineCloseCircle
              data-testid='close'
              className='text-lg cursor-pointer'
              onClick={toggleActive}
            />
          </div>
          {view === 'recommend' && <FeedBackOverall changeView={changeView} />}
          {view === 'user' && <FeedbackUser data-testid='feedbackUser' changeView={changeView} />}
          {view === 'thanks' && <FeedbackThanks />}
        </div>
      )}
    </article>
  );
};

export default Feedback;
