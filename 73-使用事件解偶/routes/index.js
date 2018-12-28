module.exports.create = function(req, res, next) {
      console.log('req');
      res.app.emit('user: created');
      res.send('User creatd');
      next();
};