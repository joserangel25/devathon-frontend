import { feedbackValidationOverall } from '../../../../../validations/feedback.validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { feedbackText } from '../../../../../helpers/feedback.text';
import { setStates } from '../../../../../store/feedback/feedbackslice';
import { useDispatch } from 'react-redux';

export const overallLogic = (changeView) => {
  const numbers = [...Array(10).keys()];
  const { feedbackOverall } = feedbackText();
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
    dispatch(setStates(data));
    changeView('user');
  };

  return {
    numbers,
    feedbackOverall,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
