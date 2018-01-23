import express from 'express';
import pug from 'pug';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../browser/components/App';

const app = express();

app.set('view-engine', 'pug');
app.set('views', __dirname + '/views');
app.disable('x-powered-by');

app.use(express.static(__dirname + '/../../public'));

app.get('*', (req, res) => {
  const initialState = {
    isLoggedIn: false,
    username: 'Saraband'
  };

  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App {...initialState} />
    </StaticRouter>
  );

  res.setHeader('Content-Type', 'text/html');
  res.render('layout.pug', {
    renderedHTML: html,
    initialState: `const initialState = ${JSON.stringify(initialState)};`
  });
});

app.listen(8080);