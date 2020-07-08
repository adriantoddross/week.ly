import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import path from 'path';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
const port: string | number = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

interface ResponseError extends Error {
  status?: number;
}

// error handler
app.use((err: ResponseError, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app
  .listen(port, () => {
    console.info(`Listening on port ${port}.`);
  })
  .on('error', (err) => {
    console.error('Express failed to start');
    console.error(err);
  });

module.exports = app;
