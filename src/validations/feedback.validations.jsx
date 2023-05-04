import * as yup from 'yup';

export const feedbackValidationOverall = yup.object().shape({
  overallSatisfaction: yup.number().required('Este campo es requerido'),
  subject: yup.string().required('El asunto es requerido'),
  msg: yup.string().required('Mensaje is requerido'),
});

export const feedbackValidationUser = yup.object().shape({
  name: yup.string().required('El Nombre es requirido'),
  email: yup.string().email('Parece que esto no es un email').required('El Email es requerido'),
});