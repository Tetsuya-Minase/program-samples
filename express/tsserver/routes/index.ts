import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('in index');
  res.send('respond in index');
  next();
});

export { router };