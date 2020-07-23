BEGIN;


TRUNCATE block_feedback CASCADE;

INSERT INTO users (username, user_email, user_password, credits)
VALUES

('Leela', 'leela@planetexpress.com', '$2a$12$J.WvkYiPfp1/wtf7Jc2V8uaDUb7CQDHM9PimQzGNp6w5k7v.pgoGK', 14),
('Bender', 'bender@planetexpress.com', '$2a$12$yIhRGOpfi3/UbYd36WNnqu5BTknx.OCq4LGOxJFzq/t32n6aNdAY6', 10),
('Fry', 'fry@planetexpress.com', '$2a$12$Ge65e5VeIgDMLntNvs6kmeWFnyt8eCPJFkyEo6kkNNah4OofME49K', 2)
;


INSERT INTO blocks (user_id, user_name, category_id, block_title, block_url, block_description, feedback_details, date_updated)
VALUES
(1, 'Leela', 'art', 'Planet Express Ship Portrait', 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg', 'this is a portrait of the ship', 'are my colors ok?', '2020-01-12'),
(1, 'Leela', 'art', 'Travel Comic', 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg', 'a comic about our deliveries', 'does this flow alirght? how about page two?', '2020-04-12'),
(1, 'Leela', 'art', 'Illustration 3', 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg', 'a portrait of someone we met last delivery', 'can"t seem to finish the head right', '2020-05-12'),
(2, 'Bender', 'art', 'Illustration 3', 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg', 'a portrait of someone we met last delivery', 'can"t seem to finish the head right', '2020-06-12'),
(2, 'Bender', 'art', 'Illustration 2', 'https://images-na.ssl-images-amazon.com/images/I/31Rvw9O8ApL._AC_.jpg', 'a portrait of someone we met last delivery', 'can"t seem to finish the head right', '2020-05-10'),

(2, 'Bender', 'writing', 'Benders Poem', 'https://res.cloudinary.com/creatives-block/raw/upload/v1595524259/writing/Benders_poem_f1jwhe.docx', 'a poem', 'how about the word choice', '2020-01-11'),
(2, 'Bender', 'writing', 'bender is the greatest', 'https://res.cloudinary.com/creatives-block/raw/upload/v1595524259/writing/Benders_poem_f1jwhe.docx', 'a short story about how i saved the world', 'am i cool enough? i think i can seem cooler', '2020-06-12'),
(2, 'Bender', 'writing', 'Fry - A Play', 'https://res.cloudinary.com/creatives-block/raw/upload/v1595524259/writing/Benders_poem_f1jwhe.docx', 'a play about fry', 'looking for technical edits', '2019-07-12'),
(1, 'Leela', 'writing', 'A short story', 'https://res.cloudinary.com/creatives-block/raw/upload/v1595524259/writing/Benders_poem_f1jwhe.docx', 'a story about fry', 'looking for technical edits', '2020-03-15'),
(2, 'Bender', 'writing', 'Benders Second Poem', 'https://res.cloudinary.com/creatives-block/raw/upload/v1595524259/writing/Benders_poem_f1jwhe.docx', 'a poem', 'how about the word choice', '2020-01-15'),
(2, 'Bender', 'writing', 'bender is the greatest', 'https://res.cloudinary.com/creatives-block/raw/upload/v1595524259/writing/Benders_poem_f1jwhe.docx', 'a short story about how i saved the world', 'am i cool enough? i think i can seem cooler', '2020-03-02'),

(3, 'Fry', 'music', 'Holophonor suite 1', 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3', 'holophonor suite 1', 'cant seem to figure out this line', '2020-06-17'),
(3, 'Fry', 'music', 'Holophonor song 2', 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3', 'holophonor song 2', 'is it moody enough?', '2020-05-22'),
(3, 'Fry', 'music', 'Holophonor Leela song', 'https://freesound.org/data/previews/514/514847_2454582-lq.mp3', 'holophonor leela song', 'stuck on this part', '2020-04-19'),
(1, 'Leela', 'music', 'Holophonor suite 1', 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3', 'holophonor suite 1', 'cant seem to figure out this line', '2020-04-18'),
(1, 'Leela', 'music', 'Holophonor suite 1', 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3', 'holophonor suite 1', 'cant seem to figure out this line', '2020-06-14'),
(3, 'Fry', 'music', 'Holophonor song 2', 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3', 'holophonor song 2', 'is it moody enough?', '2020-05-24'),
(2, 'Bender', 'music', 'Holophonor Leela song', 'https://freesound.org/data/previews/514/514847_2454582-lq.mp3', 'holophonor leela song', 'stuck on this part', '2020-04-18'),
(1, 'Leela', 'music', 'Holophonor suite 1', 'https://freesound.org/data/previews/177/177843_1506826-lq.mp3', 'holophonor suite 1', 'cant seem to figure out this line', '2020-04-17')
;

COMMIT;
