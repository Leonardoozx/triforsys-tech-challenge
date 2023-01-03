const sliderData = async () => {
  // base url
  const URL = 'https://api.beta.unycos.com';

  // the fetch headers in a variable, for better future maintenance
  const headers = {
    Accept: '*/*',

    // the key for the api
    'x-mejor-key': 'unycos',

    'Content-Type': 'application/json',
  };

  // destructure the only and also the obj key we want from the response
  // transforms the JSON response into a obj, which we can use in the application
  const { spotlights } = await fetch(`${URL}/u/courses/spotlights/natacion`, {
    headers,
  }).then((res) => res.json());

  return spotlights;
};

export { sliderData };
