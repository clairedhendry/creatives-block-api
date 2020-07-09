BEGIN;

TRUNCATE users;

INSERT INTO users (userName, user_email, user_password, credits)
VALUES

('Leela', 'leela@planetexpress.com', 'leelaspassword', 14),
('Bender', 'bender@planetexpress.com', 'benderspassword', 10),
('Fry', 'fry@planetexpress.com', 'fryspassword', 2)
;


COMMIT;