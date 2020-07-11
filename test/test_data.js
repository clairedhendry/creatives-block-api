const MockUsersData = [
    {
        'userName': 'Leela',
        'user_email': 'leela@planetexpress.com',
        'user_password': 'leelaspassword',
        'credits': 14
    },
    {
        'userName': 'Bender',
        'user_email': 'bender@planetexpress.com',
        'user_password': 'bendersspassword',
        'credits': 10
    },
    {
        'userName': 'Fry',
        'user_email': 'fry@planetexpress.com',
        'user_password': 'fryspassword',
        'credits': 2
    },
];


const MockBlockData = [
   
    {
        'user': 1,
        'category_id': 'art',
        'block_title': 'Planet Express Ship Portrait',
        'block_file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'this is a portrait of the ship',
        'optional_details': 'are my colors ok?',
        'date_updated': '2020-01-12 00:00:00'
    },
    {
        'user': 1,
        'category_id': 'art',
        'block_title': 'Planet Express Ship Portrait',
        'block_file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'this is a portrait of the ship',
        'optional_details': 'are my colors ok?',
        'date_updated': '2020-02-12 00:00:00'
    },
    {
        'user': 1,
        'category_id': 'art',
        'block_title': 'Planet Express Ship Portrait',
        'block_file': 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg',
        'block_description': 'this is a portrait of the ship',
        'optional_details': 'are my colors ok?',
        'date_updated': '2020-03-12 00:00:00'
    },
    {
        'user': 2,
        'category_id': 'writing',
        'block_title': 'Bender is the greatest',
        'block_file': 'https://docs.google.com/document/d/1pYdOBTDbz8nAi8E_K-c_3xbWstmmMv5B1EtfH7g9Tjk/edit?usp=sharing',
        'block_description': 'A short story about how I saved the world',
        'optional_details': 'need edits',
        'date_updated': '2020-06-12 00:00:00'
    },
    {
        'user': 2,
        'category_id': 'writing',
        'block_title': 'Bender is the greatest',
        'block_file': 'https://docs.google.com/document/d/1pYdOBTDbz8nAi8E_K-c_3xbWstmmMv5B1EtfH7g9Tjk/edit?usp=sharing',
        'block_description': 'A short story about how I saved the world',
        'optional_details': 'need edits',
        'date_updated': '2020-06-13 00:00:00'
    },
    {
        'user': 2,
        'category_id': 'writing',
        'block_title': 'Bender is the greatest',
        'block_file': 'https://docs.google.com/document/d/1pYdOBTDbz8nAi8E_K-c_3xbWstmmMv5B1EtfH7g9Tjk/edit?usp=sharing',
        'block_description': 'A short story about how I saved the world',
        'optional_details': 'need edits',
        'date_updated': '2020-02-16 00:00:00'
    },
    {
        'user': 3,
        'category_id': 'music',
        'block_title': 'Holophonor Suite 1',
        'block_file': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
        'block_description': 'holophonor suite 1',
        'optional_details': 'cant seem to figure out this line',
        'date_updated': '2020-06-17 00:00:00'
    },
    {
        'user': 3,
        'category_id': 'music',
        'block_title': 'Holophonor Suite 1',
        'block_file': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
        'block_description': 'holophonor suite 1',
        'optional_details': 'cant seem to figure out this line',
        'date_updated': '2020-05-17 00:00:00'
    },
    {
        'user': 3,
        'category_id': 'music',
        'block_title': 'Holophonor Suite 1',
        'block_file': 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3',
        'block_description': 'holophonor suite 1',
        'optional_details': 'cant seem to figure out this line',
        'date_updated': '2020-01-17 00:00:00'
    }
]

module.exports = { MockUsersData, MockBlockData }