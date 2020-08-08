const expect = require('chai').expect;
const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
const supertest = require('supertest');
const FormData = require('form-data')
const fs = require('fs')

describe(`Creative's Block endpoints`, () => {
    let db;

    const { testUsers, testBlocks, testFeedback } = helpers.makeBlocksFixtures()
    const testUser = testUsers[0]


    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        })
        app.set('db', db)
    })

    before('clean the table', () => db.raw('TRUNCATE users, blocks, block_feedback RESTART IDENTITY CASCADE'))

    afterEach('cleanup', () => db.raw('TRUNCATE users, blocks, block_feedback RESTART IDENTITY CASCADE'))

    after('disconnect from db', () => db.destroy())

    describe('GET api/ endpoints', () => {
        context('given there are blocks in the database', () => {
            beforeEach('insert test users', () => {
                return db
                    .insert(testUsers)
                    .into('users')
            })
            beforeEach('insert test blocks', () => {
                return db
                    .insert(testBlocks)
                    .into('blocks')
            })
            beforeEach('insert test feedback', () => {
                return db
                    .insert(testFeedback)
                    .into('block_feedback')
            })

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
                    .get('/api/blocks/art/1')
                    .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
                    .expect(200)
                    .then(res => {
                        expect(res.body.id).to.eql(1)
                        expect(res.body.category_id).to.eql('art')
                    })
            })

            it('responds with 200 and blocks feedback', () => {
                return supertest(app)
                    .get('/api/feedback/1')
                    .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
                    .expect(200)
            })

        })
    })

    describe('POST block endpoints', () => {
        beforeEach('insert test users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })

        it('responds with 201 created when uploading writing block', () => {
            const newWritingBlock = {
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

        //creates new block - tests file upload
        //successfully uploads to cloudinary and returns with url
        it('responds with 201 created when uploading new block', () => {
            return supertest(app)
                .post('/api/blocks/upload')
                .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
                .field('name', 'Logo')
                .attach('file', './test/art-logo.jpg')
                .then(res => {
                    console.log(res.status)
                })
        })
    })

    describe('POST feedback', () => {
        beforeEach('insert test users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })
        beforeEach('insert test blocks', () => {
            return db
                .insert(testBlocks)
                .into('blocks')
        })
        //posts new feedback and checking that it is inserted into db 
        it('responds with 201 created when posting new feedback', () => {
            const newFeedback = {
                block_id: 1,
                feedback: "test feedback",
                user_name: "Bender",
                flagged: false
            }
            return supertest(app)
                .post('/api/feedback/1')
                .set('Authorization', helpers.makeAuthHeader(testUsers[1]))
                .send(newFeedback)
                .expect(201)
                .expect(res => {
                    expect(res.body.userid).to.eql(2)
                    expect(res.body.block_id).to.eql(1)
                })
        })
    })
})
