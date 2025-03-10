const config = Object.freeze({
  API_URL: 'http://localhost:3030/api',
  healthProblem: [
    {
      name: 'Cardiology',
      value: 'CARDIO',
    },
    {
      name: 'Neurology (Kidney)',
      value: 'KIDNEY',
    },
    {
      name: 'Hematology (Liver)',
      value: 'LIVER',
    },
    {
      name: 'General Physician',
      value: 'GENERAL',
    },
    {
      name: 'Ear, Nose, Throat (ENT)',
      value: 'ENT',
    },
  ],
});

export default config;
