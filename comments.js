//Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Use the public directory for static files
app.use(express.static('public'));

// Use the comments router
const commentsRouter = require('./routes/comments');
app.use('/comments', commentsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});