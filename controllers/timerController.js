const Timer = require('../models/timerModel');


exports.submitReactionTime = async (req, res) => {
    const { time } = req.body;

    try {
        const newTimer = new Timer({
            user_id: req.user._id,
            time: time
        });

        await newTimer.save();
        res.status(201).send('Reaction time recorded successfully.');
    } catch (err) {
        res.status(500).send('Error in recording reaction time.');
    }
};


exports.getReactionTimes = async (req, res) => {
    const { userId } = req.params;

    try {
        const timers = await Timer.find({ user_id: userId }).sort({ createdAt: -1 });
        res.json(timers);
    } catch (err) {
        res.status(500).send('Error in retrieving reaction times.');
    }
};
