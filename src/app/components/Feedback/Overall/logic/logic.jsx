import { feedbackValidationOverall } from '../../../../../validations/feedback.validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { setStates } from '../../../../../store/feedback/feedbackslice';
import { useDispatch, useSelector } from 'react-redux';
import { submitFeedback } from '../../../../../store/feedback/thunks';

export const overallLogic = (changeView) => {
  const numbers = [...Array(11).keys()];
  const { name, email } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  // validate the inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(feedbackValidationOverall),
  });

  // the data is already validate
  const onSubmit = (data) => {
    if (name && email) {
      const feedbackEsp = {
        email,
        nombre: name,
        mensaje: data.msg,
        satisfacciónGeneral: data.overallSatisfaction,
        asunto: data.subject,
      };
      dispatch(submitFeedback(feedbackEsp));
      changeView('thanks');
      return;
    }
    dispatch(setStates(data));
    changeView('user');
  };

  return {
    numbers,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
