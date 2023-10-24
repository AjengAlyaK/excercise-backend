const express = require('express');
const User = require('./src/model/user');
require('./src/utils/db');
const cors = require('cors');
const app = express();
const port = 7000;

app.use(cors());
app.get('/', (req, res)=> {
    res.send('hello');
})

app.get('/user', async (req, res)  =>{
    try {
        const users = await User.find();
        console.log(users);
        res.json(users);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
});


// app.post('/login', login);

app.listen(port, "0.0.0.0", () =>{
    console.log(`listening to port ${port}...`);
});

