var orm = require('../config/orm.js');

module.exports = function(app){
  app.get('/api/:characters?', function(req,res){
    if (req.params.characters){
      orm.searchCharacter(req.params.characters, function(data){
        res.json(data);
      })
    }
    else {
      var data = orm.allCharacters(function(data){
        res.json(data);
      });
    };
  });

  app.post('/api/new',function(req,res){

    var character = req.body;

    orm.addCharacter(character,function(data){

    });
  })
}