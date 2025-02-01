const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const freeport = require('find-free-port');
const userRouter = require('./routes/userRoutes');




const app = express();
const PORT =5000;

// Middleware
app.use(cors()); // Allows all origins
app.use(bodyParser.json());


app.use('/user',userRouter)

app.post('/data', (req, res) => {
    const { username, email, password } = req.body;
    res.json({ message: `Received data: Name - ${username}, Email - ${email}, Password - ${password}` });
});


// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB');

    // Start server only after DB connection is established
    app.listen(PORT, () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });

    // freeport(3000).then(([port]) => {
    //     app.listen(port, () => console.log(`Server running on port ${port}`));
    // });

}).catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
});

// Uncomment if you have a User model
// const User = require('./models/User');

app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        const existingUser = await user.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "✅ User registered successfully!" });
    } catch (error) {
        console.error("❌ Signup Error:", error);
        res.status(500).json({ message: "Error signing up", error });
    }
});
