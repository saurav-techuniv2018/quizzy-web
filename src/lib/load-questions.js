const loadQuestions = () => new Promise((resolve) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  fetch('/api/questions', {
    method: 'GET',
  })
    .then(response => response.text())
    .then(jsonString => JSON.parse(jsonString))
    .then((body) => {
      resolve(body.data);
    });
});

export default loadQuestions;
