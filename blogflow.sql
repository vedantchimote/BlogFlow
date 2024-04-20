CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(50),
  email VARCHAR(30),
  password VARCHAR(30),
  phone_no VARCHAR(15),
  created_time DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE categories (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  description VARCHAR(3000)
);


CREATE TABLE blogs (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  contents VARCHAR(3000),
  created_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  category_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

---------------------------------------------------------------------

INSERT INTO user (full_name, email, password, phone_no) VALUES
  ('John Doe', 'john.doe@example.com', 'password123', '1234567890'),
  ('Jane Smith', 'jane.smith@example.com', 'password456', '9876543210');


INSERT INTO categories (title, description) VALUES
  ('Technology', 'Articles related to the latest technology trends'),
  ('Travel', 'Blogs about travel destinations and experiences');


INSERT INTO blogs (title, contents, user_id, category_id) VALUES
  ('Introduction to SQL', 'SQL is a programming language...', 1, 1),
  ('Tips for Traveling on a Budget', 'Traveling can be expensive...', 2, 2);
  
---------------------------------------------------------------------------
