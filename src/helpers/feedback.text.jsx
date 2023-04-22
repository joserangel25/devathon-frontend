export const feedbackText = () => {
  const feedbackThanks = {
    title: 'Muchas Gracias',
    para: 'Tu feedback nos ayuda a alcanzar el siguiente nivel en la app',
    paraTwo:
      'Agradezemso el tiempo y esfuerzo que tomaste para revisar nuestro trabajo y compartir tus pensamientos con nosotros.',
  };

  const feedbackOverall = {
    title: 'Tu experiencia',
    para: 'No te limites, bien o mal, dínoslo',
    paraTwo:
      'Por favor, ayúdanos a mejorar compartiendo tus comentarios sobre tu experiencia con la aplicación de accesibilidad',
    // overall: '¿Está satisfecho/a con el rendimiento y la funcionalidad de la aplicación?',
  };

  const feedbackUser = {
    title: 'Un poco sobre ti',
    para: 'Ya casi terminamos, por favor dinos algo sobre ti mismo',
  };

  return {
    feedbackThanks,
    feedbackOverall,
    feedbackUser,
  };
};
