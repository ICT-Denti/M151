import { createServer } from 'http';
import { url } from 'inspector';

const server = createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html charset=utf-8'});

  const myURL = new URL(req.url, 'https://localhost:8080')
  const body = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style= "color: green" > Hello ${myURL.searchParams.get('vorname')} ${url.searchParams.get('nachname')}</h1>
</body>
</html>
  `
  res.end(body);
});
server.listen(8080, () => {
  console.log(`Server is listening to http://localhost.${server.address().port}`);
});