// app.js
import express from "express"
import express from "mariadb"

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Function for connecting to the database
async function connect() {
    try {
        let conn = await createPool.getConnection();
        console.log('Connected to the database');
        return conn;

    } catch (err) {
        console.log(`Error connecting to teh databse: ${err}`);
    }
}
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve static files from the 'public' directory
app.use(express.static('public'));

// set the view engine for out application
app.set('view engine', 'ejs');

const PORT = 3000;



app.get('/', (req, res) => {

    // Send our home page as a response to the client
    res.render('home');
});

app.post ('/submit', (req, res) =>{
    const newPost = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content
    };

    console.log(newPost);
    res.render('confirmation', {post: newPost});
});

//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});