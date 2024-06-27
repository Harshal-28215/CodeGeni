const express = require("express")
const router = express.Router();
const ChatSection = require('../models/ChatSection');

// creatuser using post request
router.post('/createchatsection', async (req, res) => {
    try {
        const { email } = req.body;

        // Create a new ChatSection
        const chatSection = await new ChatSection({
            name: email, // Assuming name is the email of the user
        }).save();

        res.status(201).json({
            success: true,
            message: 'ChatSection created successfully',
            chatSection
        });
    } catch (error) {
        console.error('Error creating ChatSection:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
router.post('/getchatsection', async (req, res) => {
    try {
        const { email } = req.body;

        // Create a new ChatSection
        const chatSection = await ChatSection.find({
            name:email
        })
        res.status(201).json({
            success: true,
            message: 'ChatSection fatched successfully',
            chatSection
        });
    } catch (error) {
        console.error('Error creating ChatSection:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;