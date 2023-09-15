export default function handler(request, response) {
  const { name = 'User' } = request.query;
  return response.send(`Hello ${name}!`);
}
