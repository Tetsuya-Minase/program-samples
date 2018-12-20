import * as express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond in users');
});

export { router };