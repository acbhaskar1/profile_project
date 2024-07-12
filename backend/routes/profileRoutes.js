const express = require('express');
const { createProfile, getProfiles, getProfileById, updateProfile, deleteProfile } = require('../controllers/profileController');

const router = express.Router();

router.post('/profiles', createProfile);
router.get('/profiles', getProfiles);
router.get('/profiles/:id', getProfileById);
router.put('/profiles/:id', updateProfile);
router.delete('/profiles/:id', deleteProfile);

module.exports = router;
