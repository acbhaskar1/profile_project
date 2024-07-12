const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
    const { name, email, bio } = req.body;
    try {
        const newProfile = await Profile.create({ name, email, bio });
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.findAll();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProfileById = async (req, res) => {
    try {
        const profile = await Profile.findByPk(req.params.id);
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    const { name, email, bio } = req.body;
    try {
        const profile = await Profile.findByPk(req.params.id);
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        profile.name = name || profile.name;
        profile.email = email || profile.email;
        profile.bio = bio || profile.bio;
        await profile.save();
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProfile = async (req, res) => {
    try {
        const profile = await Profile.findByPk(req.params.id);
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        await profile.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
