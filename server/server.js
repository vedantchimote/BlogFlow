const express = require("express");
const db = require("./db")
const utils = require("./utils")
const cors = require("cors")
const app = express();  

app.use(cors())
app.use(express.json());

// Add a user to the database
app.post("/user/add", (req, res) => {
    const { full_name, email, password, phone_no } = req.body;
    const query = `insert into user (full_name, email, password, phone_no) values(?,?,?,?)`;
    db.pool.execute(query, [full_name, email, password, phone_no], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});

// Get a user by id from the database
app.get("/user/:id", (req, res) => {
    const query = 'select id, full_name, email, password, phone_no from user where id = ?';
    db.pool.execute(query, [req.params.id], (err, users) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else if (users.length === 0) {
            res.send(utils.createErrorResult("user does not exist"));
        } else {
            res.send(utils.createSuccessResult(users[0]));
        }
    });
});

//Get all the users from the database
app.get("/users", (req, res) => {
    const query = 'select id, full_name, email, password, phone_no from user';
    db.pool.execute(query, (err, users) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(users));
        }
    });
});

// Search for a user by email
app.get("/user/search/:email", (req, res) => {
    const query = 'select id, full_name, email, password, phone_no from user where email = ?';
    db.pool.execute(query, [req.params.email], (err, users) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else if (users.length === 0) {
            res.send(utils.createErrorResult("user does not exist"));
        } else {
            res.send(utils.createSuccessResult(users[0]));
        }
    });
});

//user sign-in api by email and password
app.post("/user/signin", (req, res) => {
    const { email, password } = req.body;
    const query = 'select id, full_name, email, password, phone_no from user where email = ?';
    db.pool.execute(query, [email], (err, users) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else if (users.length === 0) {
            res.send(utils.createErrorResult("user does not exist"));
        } else {
            const user = users[0];
            if (password === user.password) {
                res.send(utils.createSuccessResult(user));
            } else {
                res.send(utils.createErrorResult("incorrect password"));
            }
        }
    });
});

// api to register user by name, email and password and phone_no
app.post("/user/register", (req, res) => {
    const { full_name, email, password, phone_no } = req.body;
    const query = 'select id, full_name, email, password, phone_no from user where email = ?';
    db.pool.execute(query, [email], (err, users) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else if (users.length === 0) {
            const query = 'insert into user (full_name, email, password, phone_no) values(?,?,?,?)';
            db.pool.execute(query, [full_name, email, password, phone_no], (err, result) => {
                if (err) {
                    res.send(utils.createErrorResult(err));
                } else {
                    res.send(utils.createSuccessResult(result));
                }
            });
        } else {
            res.send(utils.createErrorResult("user already exists"));
        }
    });
});

// api to update user by id
app.put("/user/update/:id", (req, res) => {
    const { full_name, email, password, phone_no } = req.body;
    const query = 'update user set full_name = ?, email = ?, password = ?, phone_no = ? where id = ?';
    db.pool.execute(query, [full_name, email, password, phone_no, req.params.id], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});

// api to delete user by id
app.delete("/user/delete/:id", (req, res) => {
    const query = 'delete from user where id = ?';
    db.pool.execute(query, [req.params.id], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});


// api to add a category
app.post("/category/add", (req, res) => {
    const { id, title, description } = req.body;
    const query = 'insert into categories (id, title, description) values(?,?,?)';
    db.pool.execute(query, [id, title, description], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});

// api to get a category by id
app.get("/category/:id", (req, res) => {
    const query = 'select id, title, description from categories where id = ?';
    db.pool.execute(query, [req.params.id], (err, categories) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else if (categories.length === 0) {
            res.send(utils.createErrorResult("category does not exist"));
        } else {
            res.send(utils.createSuccessResult(categories[0]));
        }
    });
});

// api to get all the categories
app.get("/categories", (req, res) => {
    const query = 'select id, title, description from categories';
    db.pool.execute(query, (err, categories) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(categories));
        }
    });
});

// api to update a category by id
app.put("/category/update/:id", (req, res) => {
    const { title, description } = req.body;
    const query = 'update categories set title = ?, description = ? where id = ?';
    db.pool.execute(query, [title, description, req.params.id], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});

// api to delete a category by id
app.delete("/category/delete/:id", (req, res) => {
    const query = 'delete from categories where id = ?';
    db.pool.execute(query, [req.params.id], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});

// api to add a blog
app.post("/blog/add", (req, res) => {
    const { id, title, contents, user_id, category_id } = req.body;
    const query = 'insert into blogs (id, title, contents, user_id, category_id) values(?,?,?,?,?)';
    db.pool.execute(query, [id, title, contents, user_id, category_id], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});

// api to get a blog by id
app.get("/blog/:id", (req, res) => {
    const query = 'select id, title, contents, user_id, category_id from blogs where id = ?';
    db.pool.execute(query, [req.params.id], (err, blogs) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else if (blogs.length === 0) {
            res.send(utils.createErrorResult("blog does not exist"));
        } else {
            res.send(utils.createSuccessResult(blogs[0]));
        }
    });
});

// api to get all the blogs
app.get("/blogs", (req, res) => {
    const query = 'select id, title, contents, user_id, category_id from blogs';
    db.pool.execute(query, (err, blogs) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(blogs));
        }
    });
});

// api to update a blog by id
app.put("/blog/update/:id", (req, res) => {
    const { title, contents, user_id, category_id } = req.body;
    const query = 'update blogs set title = ?, contents = ?, user_id = ?, category_id = ? where id = ?';
    db.pool.execute(query, [title, contents, user_id, category_id, req.params.id], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});

// api to delete a blog by id
app.delete("/blog/delete/:id", (req, res) => {
    const query = 'delete from blogs where id = ?';
    db.pool.execute(query, [req.params.id], (err, result) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(result));
        }
    });
});

// api to get all the blogs by category id
app.get("/blogs/category/:id", (req, res) => {
    const query = 'select id, title, contents, user_id, category_id from blogs where category_id = ?';
    db.pool.execute(query, [req.params.id], (err, blogs) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(blogs));
        }
    });
});

// get date, user full name, user email, blog title, blog contents, blog creation datetime, category title, category description
app.get("/blogs/details", (req, res) => {
    const query = 'select b.id, b.title, b.contents, b.created_time, u.full_name, u.email, c.title as category_title, c.description as category_description from blogs b inner join user u on b.user_id = u.id inner join categories c on b.category_id = c.id';
    db.pool.execute(query, (err, blogs) => {
        if (err) {
            res.send(utils.createErrorResult(err));
        } else {
            res.send(utils.createSuccessResult(blogs));
        }
    });
});



app.listen(4000, '0.0.0.0', () => {
    console.log("server started on port 4000");   
})