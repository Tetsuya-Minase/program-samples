import * as express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('in users');
  res.send('respond in users');
  next();
});

export { router };