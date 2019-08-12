const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.get('/v3/citizen-details', (req, res, next) => {
    if(req.session.data.data == 'clear') {
        req.session.data['first-name'] = ''
        req.session.data['last-name'] = ''
        req.session.data.postcode = ''
        req.session.data['dob-day'] = ''
        req.session.data['dob-month'] = ''
        req.session.data['dob-year'] = ''
        req.session.data.organisation = ''
        req.session.data.data = ''
        req.session.data['signed-in'] = 'yes'

    }
    res.locals = req.session.data
    next();
})

router.get('/v3/sign-in', (req, res, next) => {
    if(req.session.data.data == 'clear') {
        req.session.data['first-name'] = ''
        req.session.data['last-name'] = ''
        req.session.data.postcode = ''
        req.session.data['dob-day'] = ''
        req.session.data['dob-month'] = ''
        req.session.data['dob-year'] = ''
        req.session.data.organisation = ''
        req.session.data.data = ''

    }
    res.locals = req.session.data
    next();
})

router.get('/v3/text-message', (req, res, next) => {
    if(req.session.data.data == 'clear') {
        req.session.data['first-name'] = ''
        req.session.data['last-name'] = ''
        req.session.data.postcode = ''
        req.session.data['dob-day'] = ''
        req.session.data['dob-month'] = ''
        req.session.data['dob-year'] = ''
        req.session.data.organisation = ''
        req.session.data.data = ''

    }
    res.locals = req.session.data
    next();
})









module.exports = router

