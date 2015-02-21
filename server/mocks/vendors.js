module.exports = function(app) {
  var express = require('express');
  var vendorsRouter = express.Router();

  vendorsRouter.get('/', function(req, res) {
    res.send({
      'vendors': [
        {id: 1, name: "Acme", address: "123 Fake St"},
        {id: 2, name: "Foobar Co.", address: "42 Wallabe Way"}
      ]
    });
  });

  vendorsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  vendorsRouter.get('/:id', function(req, res) {
    res.send({
      'vendors': {
        id: req.params.id
      }
    });
  });

  vendorsRouter.put('/:id', function(req, res) {
    res.send({
      'vendors': {
        id: req.params.id
      }
    });
  });

  vendorsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/vendors', vendorsRouter);
};
