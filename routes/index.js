const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome to Banka API' });
});

export default router;
