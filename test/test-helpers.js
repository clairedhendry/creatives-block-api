const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv')


function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
    const token = jwt.sign({ user_id: user.id }, secret, {
        subject: user.username,
        algorithm: 'HS256',      
    })
    return `Bearer ${token}`
}

function makeUsersArray() {
    return [
      {
        id: 1,
        user_name: 'Leela',
        password: 'leelaspassword',
        user_email: 'test-user-1-email',
        credits: 10
      },
      {
        id: 2,
        user_name: 'Bender',
        password: 'benderspassword',
        user_email: 'test-user-2-email',
        credits: 10
      },
      {
        id: 3,
        user_name: 'Fry',
        password: 'fryspassword',
        user_email: 'test-user-3-email',
        credits: 10
      },
      {
        id: 4,
        user_name: 'Claire',
        password: 'password',
        user_email: 'test-user-4-email',
        credits: 10
      },
    ]
  }
  
  function makeArticlesArray() {
    return (
        [
        {
            'category_id': 'art',
            'id': 132115,
            'userName': 'Leela',
            'user_id': 1,
            'title': 'Planet Express Ship Portrait',
            'file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
            'description': 'this is a portrait of the ship',
            'feedback_details': 'are my colors ok?',
            'date_updated': '2020-01-12'
         },
         {
             'category_id': 'art',
             'id': 9,
             'userName': 'Leela',
             'user_id': 1,
             'title': 'Travel Comic',
             'file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
             'description': 'a comic about our deliveries',
             'feedback_details': 'does this flow alirght? how about page two?',
             'date_updated': '2020-04-12'
         },
         {
             'category_id': 'art',
             'id': 364,
             'userName': 'Leela',
             'user_id': 1,
             'title': 'illustration 3',
             'file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
             'description': 'a portrait of someone we met last delivery',
             'feedback_details': 'can"t seem to finish the head right',
             'date_updated': '2020-05-12'
         },
         {
            'category_id': 'art',
            'id': 655,
            'userName': 'Leela',
            'user_id': 1,
            'title': 'Planet Express Ship Portrait',
            'file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
            'description': 'this is a portrait of the ship',
            'feedback_details': 'are my colors ok?',
            'date_updated': '2020-04-23'
         },
         {
             'category_id': 'art',
             'id': 146,
             'userName': 'Leela',
             'user_id': 1,
             'title': 'Travel Comic',
             'file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
             'description': 'a comic about our deliveries',
             'feedback_details': 'does this flow alirght? how about page two?',
             'date_updated': '2019-09-12'
         },
         {
             'category_id': 'art',
             'id': 586,
             'userName': 'Leela',
             'user_id': 1,
             'title': 'illustration 3',
             'file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
             'description': 'a portrait of someone we met last delivery',
             'feedback_details': 'can"t seem to finish the head right',
             'date_updated': '2019-11-21'
         },  
        {
            'category_id': 'writing',
            'id': 45,
            'userName': 'Bender',
            'user_id': 2,
            'title': 'Benders poem',
            'file': 'https://docs.google.com/document/d/1f6P9PHagTXIpqfbHm2JsxXgytPnYWmliePhIectew2g/edit?usp=sharing',
            'description': 'a poem',
            'feedback_details': 'how about the word choice',
            'date_updated': '2020-01-11'
        },
        {
            'category_id': 'writing',
            'id': 337,
            'userName': 'Bender',
            'user_id': 2,
            'title': 'bender is the greatest',
            'file': 'https://docs.google.com/document/d/1pYdOBTDbz8nAi8E_K-c_3xbWstmmMv5B1EtfH7g9Tjk/edit?usp=sharing',
            'description': 'a short story about how i saved the world',
            'feedback_details': 'am i cool enough? i think i can seem cooler',
            'date_updated': '2020-06-12'
        },
        {
            'category_id': 'writing',
            'id': 123,
            'userName': 'Bender',
            'user_id': 2,
            'title': 'Fry - a play',
            'file': 'https://docs.google.com/document/d/1MErlUTZrfLB9IdiD1kNMiBq0sDSVNBJSZ6WwuVvnw9k/edit?usp=sharing',
            'description': 'a play about fry',
            'feedback_details': 'looking for technical edits',
            'date_updated': '2019-07-12'
        },
        {
            'category_id': 'writing',
            'id': 689,
            'userName': 'Leela',
            'user_id': 1,
            'title': 'Fry - a play',
            'file': 'https://docs.google.com/document/d/1MErlUTZrfLB9IdiD1kNMiBq0sDSVNBJSZ6WwuVvnw9k/edit?usp=sharing',
            'description': 'a play about fry',
            'feedback_details': 'looking for technical edits',
            'date_updated': '2020-03-15'
        },
        {
            'category_id': 'writing',
            'id': 49,
            'userName': 'Bender',
            'user_id': 2,
            'title': 'Benders poem',
            'file': 'https://docs.google.com/document/d/1f6P9PHagTXIpqfbHm2JsxXgytPnYWmliePhIectew2g/edit?usp=sharing',
            'description': 'a poem',
            'feedback_details': 'how about the word choice',
            'date_updated': '2020-04-01'
        },
        {
            'category_id': 'writing',
            'id': 338,
            'userName': 'Bender',
            'user_id': 2,
            'title': 'bender is the greatest',
            'file': 'https://docs.google.com/document/d/1pYdOBTDbz8nAi8E_K-c_3xbWstmmMv5B1EtfH7g9Tjk/edit?usp=sharing',
            'description': 'a short story about how i saved the world',
            'feedback_details': 'am i cool enough? i think i can seem cooler',
            'date_updated': '2020-02-22'
        },
        {
            'category_id': 'writing',
            'id': 178,
            'userName': 'Bender',
            'user_id': 2,
            'title': 'Fry - a play',
            'file': 'https://docs.google.com/document/d/1MErlUTZrfLB9IdiD1kNMiBq0sDSVNBJSZ6WwuVvnw9k/edit?usp=sharing',
            'description': 'a play about fry',
            'feedback_details': 'looking for technical edits',
            'date_updated': '2019-12-12'
        },
        {
            'category_id': 'writing',
            'id': 633,
            'userName': 'Leela',
            'user_id': 1,
            'title': 'Fry - a play',
            'file': 'https://docs.google.com/document/d/1MErlUTZrfLB9IdiD1kNMiBq0sDSVNBJSZ6WwuVvnw9k/edit?usp=sharing',
            'description': 'a play about fry',
            'feedback_details': 'looking for technical edits',
            'date_updated': '2020-02-11'
        },
        {
            'category_id': 'music',
            'id': 786,
            'userName': 'Fry',
            'user_id': 3,
            'title': 'Holophonor suite 1',
            'file': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
            'description': 'holophonor suite 1',
            'feedback_details': 'cant seem to figure out this line',
            'date_updated': '2020-06-17'
        },
        {
            'category_id': 'music',
            'id': 68,
            'userName': 'Fry',
            'user_id': 3,
            'title': 'Holophonor song 2',
            'file': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
            'description': 'holophonor song 2',
            'feedback_details': 'is it moody enough?',
            'date_updated': '2020-05-22'
        },
        {
            'category_id': 'music',
            'id': 7868,
            'userName': 'Fry',
            'user_id': 3,
            'title': 'Holophonor Leela song',
            'file': 'https://freesound.org/data/previews/514/514847_2454582-lq.mp3',
            'description': 'holophonor leela song',
            'feedback_details': 'stuck on this part',
            'date_updated': '2020-03-03'
        },
        {
            'category_id': 'music',
            'id': 7261,
            'userName': 'Leela',
            'user_id': 1,
            'title': 'Holophonor Leela song',
            'file': 'https://freesound.org/data/previews/514/514847_2454582-lq.mp3',
            'description': 'holophonor leela song',
            'feedback_details': 'stuck on this part',
            'date_updated': '2020-04-19'
        },
        {
            'category_id': 'music',
            'id': 76,
            'userName': 'Fry',
            'user_id': 3,
            'title': 'Holophonor suite 1',
            'file': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
            'description': 'holophonor suite 1',
            'feedback_details': 'cant seem to figure out this line',
            'date_updated': '2020-04-18'
        },
        {
            'category_id': 'music',
            'id': 618,
            'userName': 'Fry',
            'user_id': 3,
            'title': 'Holophonor song 2',
            'file': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
            'description': 'holophonor song 2',
            'feedback_details': 'is it moody enough?',
            'date_updated': '2020-05-04'
        },
        {
            'category_id': 'music',
            'id': 768,
            'userName': 'Fry',
            'user_id': 3,
            'title': 'Holophonor Leela song',
            'file': 'https://freesound.org/data/previews/514/514847_2454582-lq.mp3',
            'description': 'holophonor leela song',
            'feedback_details': 'stuck on this part',
            'date_updated': '2020-07-04'
        },
        {
            'category_id': 'music',
            'id': 721,
            'userName': 'Leela',
            'user_id': 1,
            'title': 'Holophonor Leela song',
            'file': 'https://freesound.org/data/previews/514/514847_2454582-lq.mp3',
            'description': 'holophonor leela song',
            'feedback_details': 'stuck on this part',
            'date_updated': '2020-02-20'
        },
    ]
    )

  }
  
  function makeExpectedBlock(users, block, feedback=[]) {
    const userName = users.find(user => user.id === block.user_id)
  
  }
  
  function makeExpectedArticleComments(users, articleId, comments) {
  
  }
  
  function makeMaliciousArticle(user) {
  
  }
  
  function makeArticlesFixtures() {

  }
  
  function cleanTables(db) {
    return db.transaction(trx =>
      trx.raw(
        `TRUNCATE
          blogful_articles,
          blogful_users,
          blogful_comments
        `
      )
      .then(() =>
        Promise.all([
          trx.raw(`ALTER SEQUENCE blogful_articles_id_seq minvalue 0 START WITH 1`),
          trx.raw(`ALTER SEQUENCE blogful_users_id_seq minvalue 0 START WITH 1`),
          trx.raw(`ALTER SEQUENCE blogful_comments_id_seq minvalue 0 START WITH 1`),
          trx.raw(`SELECT setval('blogful_articles_id_seq', 0)`),
          trx.raw(`SELECT setval('blogful_users_id_seq', 0)`),
          trx.raw(`SELECT setval('blogful_comments_id_seq', 0)`),
        ])
      )
    )
  }
  
  function seedArticlesTables(db, users, articles, comments=[]) {
 
  }
  
  function seedMaliciousArticle(db, user, article) {
  
  }
  
  module.exports = {

  }