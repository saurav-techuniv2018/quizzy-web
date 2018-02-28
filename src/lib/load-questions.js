const loadQuestions = userName => new Promise((resolve) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  fetch('/api/questions', {
    method: 'POST',
    body: JSON.stringify({
      userName,
    }),
    headers,
  })
    .then(response => response.text())
    .then(jsonString => JSON.parse(jsonString))
    .then((body) => {
      resolve(body.data);
    });
});

export default loadQuestions;
