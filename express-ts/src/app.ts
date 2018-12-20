import * as createError from 'http-errors';
import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';

import { router as indexRouter } from './routes/index';
import { router as usersRouter } from './routes/users';

class App {
  public express: express.Application = express();

  constructor() {
    this.middleWareInit();
    this.routerInit();
    this.errorHandlerInit();
  }

  /**
   * middleware系初期化
   */
  private middleWareInit() {
    // viewEngineは今回使わないのでスルー
    // view engine setup
    // express.set('views', path.join(__dirname, 'views'));
    // express.set('view engine', 'jade');

    this.express.use(logger('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(express.static(path.join(__dirname, 'public')));
  }

  /**
   * router初期化
   */
  private routerInit() {
    this.express.use('/index', indexRouter);
    this.express.use('/users', usersRouter);
    this.express.get('*', (req, res) => {
      res.send(`${req.url}にアクセスしたね。`);
    });
  }

  /**
   * error handling系初期化
   */
  private errorHandlerInit() {
    // catch 404 and forward to error handler
    this.express.use(function (req, res, next) {
      // next(createError(404));
      res.send(createError(404));
    });

    // error handler
    this.express.use(function (err, req, res, next) {
      // set locals, only providing error in development
      console.log(err);
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
      // render the error page
      res.status(err.status || 500);
      res.send('error');
    });
  }
}

// appをexport
export default new App().express;
