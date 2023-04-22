import { feedbackText } from '../../../../helpers/feedback.text';

export const FeedbackThanks = () => {
  const { feedbackThanks } = feedbackText();
  return (
    <article>
      <h3 className='font-bold'>{feedbackThanks.title}</h3>
      <p>{feedbackThanks.para}</p>
      <p>{feedbackThanks.paraTwo}</p>
    </article>
  );
};
