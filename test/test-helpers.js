const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv')


function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'Leela',
      user_password: 'leelaspassword',
      user_email: 'test-user-1-email',
      credits: 10
    },
    {
      id: 2,
      user_name: 'Bender',
      user_password: 'benderspassword',
      user_email: 'test-user-2-email',
      credits: 10
    },
    {
      id: 3,
      user_name: 'Fry',
      user_password: 'fryspassword',
      user_email: 'test-user-3-email',
      credits: 10
    },
    {
      id: 4,
      user_name: 'Claire',
      user_password: 'password',
      user_email: 'test-user-4-email',
      credits: 10
    },
  ]
}

function makeBlocksArray() {
  return (
    [
      {
        'category_id': 'art',
        'id': 1,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'Planet Express Ship Portrait',
        'block_url': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'this is a portrait of the ship',
        'feedback_details': 'are my colors ok?',
        'date_updated': '2020-01-12'
      },
      {
        'category_id': 'art',
        'id': 2,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'Travel Comic',
        'block_url': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'a comic about our deliveries',
        'feedback_details': 'does this flow alirght? how about page two?',
        'date_updated': '2020-04-12'
      },
      {
        'category_id': 'art',
        'id': 3,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'illustration 3',
        'block_url': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'a portrait of someone we met last delivery',
        'feedback_details': 'can"t seem to finish the head right',
        'date_updated': '2020-05-12'
      },
      {
        'category_id': 'art',
        'id': 4,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'Planet Express Ship Portrait',
        'block_url': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'this is a portrait of the ship',
        'feedback_details': 'are my colors ok?',
        'date_updated': '2020-04-23'
      },
      {
        'category_id': 'art',
        'id': 5,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'Travel Comic',
        'block_url': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'a comic about our deliveries',
        'feedback_details': 'does this flow alirght? how about page two?',
        'date_updated': '2019-09-12'
      },
      {
        'category_id': 'art',
        'id': 6,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'illustration 3',
        'block_url': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'a portrait of someone we met last delivery',
        'feedback_details': 'can"t seem to finish the head right',
        'date_updated': '2019-11-21'
      },
      {
        'category_id': 'writing',
        'id': 7,
        'user_name': 'Bender',
        'user_id': 2,
        'block_title': 'Benders poem',
        'block_url': 'https://docs.google.com/document/d/1f6P9PHagTXIpqfbHm2JsxXgytPnYWmliePhIectew2g/edit?usp=sharing',
        'block_description': 'a poem',
        'feedback_details': 'how about the word choice',
        'date_updated': '2020-01-11'
      },
      {
        'category_id': 'writing',
        'id': 8,
        'user_name': 'Bender',
        'user_id': 2,
        'block_title': 'bender is the greatest',
        'block_url': 'https://docs.google.com/document/d/1pYdOBTDbz8nAi8E_K-c_3xbWstmmMv5B1EtfH7g9Tjk/edit?usp=sharing',
        'block_description': 'a short story about how i saved the world',
        'feedback_details': 'am i cool enough? i think i can seem cooler',
        'date_updated': '2020-06-12'
      },
      {
        'category_id': 'writing',
        'id': 9,
        'user_name': 'Bender',
        'user_id': 2,
        'block_title': 'Fry - a play',
        'block_url': 'https://docs.google.com/document/d/1MErlUTZrfLB9IdiD1kNMiBq0sDSVNBJSZ6WwuVvnw9k/edit?usp=sharing',
        'block_description': 'a play about fry',
        'feedback_details': 'looking for technical edits',
        'date_updated': '2019-07-12'
      },
      {
        'category_id': 'writing',
        'id': 10,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'Fry - a play',
        'block_url': 'https://docs.google.com/document/d/1MErlUTZrfLB9IdiD1kNMiBq0sDSVNBJSZ6WwuVvnw9k/edit?usp=sharing',
        'block_description': 'a play about fry',
        'feedback_details': 'looking for technical edits',
        'date_updated': '2020-03-15'
      },
      {
        'category_id': 'writing',
        'id': 11,
        'user_name': 'Bender',
        'user_id': 2,
        'block_title': 'Benders poem',
        'block_url': 'https://docs.google.com/document/d/1f6P9PHagTXIpqfbHm2JsxXgytPnYWmliePhIectew2g/edit?usp=sharing',
        'block_description': 'a poem',
        'feedback_details': 'how about the word choice',
        'date_updated': '2020-04-01'
      },
      {
        'category_id': 'writing',
        'id': 12,
        'user_name': 'Bender',
        'user_id': 2,
        'block_title': 'bender is the greatest',
        'block_url': 'https://docs.google.com/document/d/1pYdOBTDbz8nAi8E_K-c_3xbWstmmMv5B1EtfH7g9Tjk/edit?usp=sharing',
        'block_description': 'a short story about how i saved the world',
        'feedback_details': 'am i cool enough? i think i can seem cooler',
        'date_updated': '2020-02-22'
      },
      {
        'category_id': 'writing',
        'id': 13,
        'user_name': 'Bender',
        'user_id': 2,
        'block_title': 'Fry - a play',
        'block_url': 'https://docs.google.com/document/d/1MErlUTZrfLB9IdiD1kNMiBq0sDSVNBJSZ6WwuVvnw9k/edit?usp=sharing',
        'block_description': 'a play about fry',
        'feedback_details': 'looking for technical edits',
        'date_updated': '2019-12-12'
      },
      {
        'category_id': 'writing',
        'id': 14,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'Fry - a play',
        'block_url': 'https://docs.google.com/document/d/1MErlUTZrfLB9IdiD1kNMiBq0sDSVNBJSZ6WwuVvnw9k/edit?usp=sharing',
        'block_description': 'a play about fry',
        'feedback_details': 'looking for technical edits',
        'date_updated': '2020-02-11'
      },
      {
        'category_id': 'music',
        'id': 15,
        'user_name': 'Fry',
        'user_id': 3,
        'block_title': 'Holophonor suite 1',
        'block_url': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
        'block_description': 'holophonor suite 1',
        'feedback_details': 'cant seem to figure out this line',
        'date_updated': '2020-06-17'
      },
      {
        'category_id': 'music',
        'id': 16,
        'user_name': 'Fry',
        'user_id': 3,
        'block_title': 'Holophonor song 2',
        'block_url': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
        'block_description': 'holophonor song 2',
        'feedback_details': 'is it moody enough?',
        'date_updated': '2020-05-22'
      },
      {
        'category_id': 'music',
        'id': 17,
        'user_name': 'Fry',
        'user_id': 3,
        'block_title': 'Holophonor Leela song',
        'block_url': 'https://freesound.org/data/previews/514/514847_2454582-lq.mp3',
        'block_description': 'holophonor leela song',
        'feedback_details': 'stuck on this part',
        'date_updated': '2020-03-03'
      },
      {
        'category_id': 'music',
        'id': 18,
        'user_name': 'Leela',
        'user_id': 1,
        'block_title': 'Holophonor Leela song',
        'block_url': 'https://freesound.org/data/previews/514/514847_2454582-lq.mp3',
        'block_description': 'holophonor leela song',
        'feedback_details': 'stuck on this part',
        'date_updated': '2020-04-19'
      },
      {
        'category_id': 'music',
        'id': 19,
        'user_name': 'Fry',
        'user_id': 3,
        'block_title': 'Holophonor suite 1',
        'block_url': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
        'block_description': 'holophonor suite 1',
        'feedback_details': 'cant seem to figure out this line',
        'date_updated': '2020-04-18'
      },
      {
        'category_id': 'music',
        'id': 20,
        'user_name': 'Fry',
        'user_id': 3,
        'block_title': 'Holophonor song 2',
        'block_url': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
        'block_description': 'holophonor song 2',
        'feedback_details': 'is it moody enough?',
        'date_updated': '2020-05-04'
      },
    ]
  )

}


function makeFeedbackArray() {
  return (
    [
      {
        id: 1,
        block_id: 1,
        feedback: 'test',
        date_provided: '2020-8-5',
        userid: 1,
        flagged: false
      },
      {
        id: 2,
        block_id: 1,
        feedback: 'test',
        date_provided: '2020-8-5',
        userid: 1,
        flagged: false
      },
      {
        id: 3,
        block_id: 1,
        feedback: 'test',
        date_provided: '2020-8-5',
        userid: 1,
        flagged: false
      }
    ]
  )
}

function makeBlocksFixtures() {
  const testUsers = makeUsersArray()
  const testBlocks = makeBlocksArray()
  const testFeedback = makeFeedbackArray()
  return { testUsers, testBlocks, testFeedback }
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
          block_feedback,
          blocks,
          users
        `
    )
  )
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
    subject: "Leela",
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

module.exports = {
  makeAuthHeader,
  makeUsersArray,
  makeBlocksArray,
  makeBlocksFixtures,
  cleanTables,
}