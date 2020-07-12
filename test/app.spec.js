const expect = require('chai').expect;
const knex = require('knex');
const app = require('../src/app');
const { MockUsersData, MockBlockData } = require('./test_data');

describe(`Creative's Block endpoints`, () => {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db)
  })

  // after('disconnect from db', () => db.destroy())

  // before('clean the table', () => db.raw('TRUNCATE users, blocks, block_feedback RESTART IDENTITY CASCADE'))

  // afterEach('cleanup', () => db.raw('TRUNCATE users, blocks, block_feedback RESTART IDENTITY CASCADE'))

  describe(`GET /api/blocks/recent-blocks`, () => {
    context('given there are no blocks in the database', () => {
      it('responds with 200 and an empty []', () => {
        return supertest(app)
          .get('/api/blocks/recent-blocks')
          .expect(200, [])
      })
    })

    //auth
    
  })

})