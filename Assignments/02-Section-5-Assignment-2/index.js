/**
 * 2. create an express.js app which funnels the requests through 2 middleware functions that log something to the console 
#   and returns 1 response

3. Handle requests to "/" and "/users" such that each request only has one handler/middleware that does something with it 
# (eg:send dummy  response)
 */

const express = require('express');
const app = express();

// app.use((req, res, next) => {
//   console.log('Hello Sandeep');
//   next();
// });

// app.use((req, res, next) => {
//   let now = new Date();
//   console.log(`Today is ${now}`);
//   res.send('<h1>Hello from Maximillan Schwartzmuller</h1>');
// });

app.use('/', (req, res, next) => {
  console.log("Hello It's late in the night now");
  next();
});

app.use('/users', (req, res, next) => {
  res.send(
    '<h1>Hello from Maximillan Schwartzmuller. Its late in the night. Go to bed! </h1>'
  );
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
