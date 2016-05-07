var connection = require('./connection.js');

var orm = {
  allCharacters: function(callback){
    var s = 'SELECT * FROM characters;';
    connection.query(s,function(err,result){
      callback(result);
    });
  },
  searchCharacter: function(name,callback){
    var s = 'SELECT * FROM characters WHERE name=?';
    connection.query(s,[name],function(err,result){
      callback(result);
    });
  },
  addCharacter: function(character,callback){
    var s = 'INSERT INTO characters (name,role,age,forcePoints) VALUES (?,?,?,?)';
    connection.query(s, [
        character.name,
        character.role,
        character.age,
        character.forcePoints
        ],function(err,result){
          callback(result);
        });
  }
};

module.exports = orm;