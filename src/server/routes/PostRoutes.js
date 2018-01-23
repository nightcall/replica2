import express from 'express';

const router = express.Router();
const posts = [
  {id: 0, text: 'Hello world'},
  {id: 1, text: 'Bonjour monde'},
];

router.get('/postlist', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(posts));
});

export default router;