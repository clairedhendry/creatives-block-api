BEGIN;

TRUNCATE users;

INSERT INTO users (userName, user_email, user_password, credits)
VALUES

('Leela', 'leela@planetexpress.com', '$2a$12$J.WvkYiPfp1/wtf7Jc2V8uaDUb7CQDHM9PimQzGNp6w5k7v.pgoGK', 14),
('Bender', 'bender@planetexpress.com', '$2a$12$yIhRGOpfi3/UbYd36WNnqu5BTknx.OCq4LGOxJFzq/t32n6aNdAY6', 10),
('Fry', 'fry@planetexpress.com', '$2a$12$Ge65e5VeIgDMLntNvs6kmeWFnyt8eCPJFkyEo6kkNNah4OofME49K', 2)
;


COMMIT;