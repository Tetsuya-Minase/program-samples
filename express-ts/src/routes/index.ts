import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond in index');
});

export { router };