// simulating a comments fetch from api
const commentsData = () => {
  const comments = [
    {
      content:
        'Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.',
      name: 'Samuel F.',
    },
    {
      content:
        'Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto.',
      name: 'Garcia J.',
    },
  ];
  return comments;
};

export { commentsData };
