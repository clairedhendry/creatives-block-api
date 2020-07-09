const BlockService = {

    getAllRecentBlocks(knex) {
        return knex
            .from('blocks')
            .select('*')
    },

    getBlockById(knex, id) {
        return knex
            .from('blocks')
            .select('*')
            .where(id, id)
            .limit(1)
    },
}

module.exports = BlockService