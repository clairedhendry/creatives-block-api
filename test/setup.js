process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'test-jwt-secret'


const { expect } = require('chai')

require('dotenv').config()
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest