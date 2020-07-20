const BlockService = {

    getAllRecentBlocks(knex, number) {
        return knex
            .raw('select * from "blocks" order by id desc limit 50')
    },

    getAllBlocksByUser(knex, user_name) {
        return knex 
            .from('blocks')
            .select('*')
            .where('user_name', user_name)
    },
    //protected
    getBlockById(knex, category, block_id) {
        return knex
            .from('blocks')
            .select('*')
            .where('id', block_id)
            .first()
    },
    //protected
    postBlock(knex, newBlock) {
        return knex
            .insert(newBlock) 
            .into('blocks')
            .returning('*')
            .then(rows => {return rows[0]})
    },

    updateBlock(knex, block_id, newBlock) {
        return knex 
            .from('blocks')
            .where({block_id})
            .update(newBlock)
    },
    
    //protected
    updateUserCredits(knex, user_id, newCreditCount) {

    },

    
    getUserId(knex, user_name) {
        return knex
            .select('id')
            .from('users')
            .where('user_name', user_name)
            .first()
    }
}

module.exports = BlockService