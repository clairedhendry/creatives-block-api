const BlockService = {

    getAllRecentBlocks(knex) {
        return knex
            .from('blocks')
            .select('*')
    },

    getBlockById(knex, category, id) {
        return knex
            .from('blocks')
            .select('*')
            .where('id', id)
            .first()
    },

    postBlock(knex, newBlock) {
        return knex
            .insert(newBlock) 
            .into('blocks')
            .returning('*')
            .then(rows => {return rows[0]})
    },

    postFeedback(knex, block_id, feedback) {

    },

    updateUserCredits(knex, user_id, newCreditCount) {

    },
}

module.exports = BlockService