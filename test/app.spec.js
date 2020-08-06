const expect = require('chai').expect;
const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
const supertest = require('supertest');
const config = require('../config')

describe(`Creative's Block endpoints`, () => {
    let db;

    const { testUsers } = helpers.makeBlocksFixtures()
    const testUser = testUsers[0]

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    describe.only('api/blocks/ endpoints', () => {
        context('given there are blocks in the database', () => {
            it('responds with 200', () => {
                return supertest(app)
                    .get('/api/blocks/recent-blocks')
                    .expect(200)
            })

            it('responds with 200 and users blocks', () => {
                return supertest(app)
                    .get(`/api/recent-blocks/${testUser.user_name}`)
                    .expect(200)
            })

            it('responds with 200 and correct block', () => {

                return supertest(app)
                    .get('/api/blocks/art/28')
                    .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
                    .expect(200)
                    .then(res => {
                        expect(res.body.id).to.eql('28')
                        expect(res.body.category_id).to.eql('art')
                    })
            })

            it('responds with 201 created when uploading writing block', () => {
                const newWritingBlock = {
                    user_id: 1,
                    user_name: "Leela",
                    category_id: "writing",
                    block_title: "test",
                    block_file: "test",
                    block_description: "test",
                    feedback_details: "test",
                }
                return supertest(app)
                    .post('/api/blocks/writing-upload')
                    .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
                    .send(newWritingBlock)
                    .expect(201)
            })
        })

    })


})