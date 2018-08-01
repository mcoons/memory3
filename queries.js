const database = require("./database-connection");

module.exports = {
    list(){
        return database('game').select()
    },
    read(id){
        return database('game').where('id','=',id).select().then(result => result[0])
    },
    create(game){
        return  database('game').insert(game).returning('*').then( record => record[0]);
    },
    update(id, game){
        return database('game').where('id','=',id).returning('id').update(game)
    },
    delete(id){
        return database('game').where('id','=',id).delete()
    }
};
