const BlockService = {

    getAllRecentBlocks(knex) {
        return knex
            .from('blocks')
            .select('*')
    }
}

module.exports = BlockService