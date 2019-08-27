const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/v4/search-choice', (req, res, next) => {
    if(req.session.data.data == 'clear') {
        req.session.data['first-name'] = ''
        req.session.data['last-name'] = ''
        req.session.data.postcode = ''
        req.session.data['ni-number'] = ''
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


// v2 code


router.get('/v2/citizen-details', (req, res, next) => {
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

router.get('/v2/sign-in', (req, res, next) => {
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

router.get('/v2/text-message', (req, res, next) => {
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

router.post('/v2/citizen-details', (req, res, next) => {
    if(!req.session.data.organisation) {
        res.render('v2/citizen-details.html', {
            error: true
        })
    } else {
        let match = true;
        if(req.session.data['first-name'].toLowerCase() != 'tony') match = false;
        if(req.session.data['last-name'].toLowerCase() != 'smith') match = false;
        if(req.session.data['postcode'].toUpperCase().replace(/\s/g, '') != 'A11AA') match = false;
        if(parseInt(req.session.data['dob-day'], 10) != '1') match = false;
        if(parseInt(req.session.data['dob-month'], 10) != '4') match = false;
        if(parseInt(req.session.data['dob-year'], 10) != '1980') match = false;

        if(match){
            res.status(302).redirect('/v2/summary');
        } else {
            res.status(302).redirect('/v2/nino');
        }
    }
})





module.exports = router

