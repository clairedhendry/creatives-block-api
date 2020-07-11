const FeedbackService = {

//protected
    getBlockFeedbackById(knex, block_id) {
        return knex
            .from('block_feedback')
            .select('*')
            .where('block_id', block_id)
    },
//protected
    postFeedback(knex, feedback) {
        return knex
            .insert(feedback) 
            .into('block_feedback')
            .returning('*')            .then(rows => {return rows[0]})
    },

    updateFeedbackById(knex, feedback_id, newFeedback) {
        return knex
            .from('block_feedback')
            .where({feedback_id})
            .update(newFeedback)
    }
}


module.exports =  FeedbackService 