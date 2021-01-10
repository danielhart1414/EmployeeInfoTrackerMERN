const express = require('express');
const router = express.Router();
const Employee = require('./employeeModel');

router.post('/', (req, res, next) => {
    console.log(req.body);
    Employee.findOne({ id: req.body.id })
        .then(user => {
            if (user) {
                res.status(409).json({ existingEntry: "Employee already exists"});
            } else {
                Employee.create(req.body, (error, data) => {
                    if (error)
                        return next(error);
                    else 
                        res.status(200).json(data);
                });
            }
        })
        .catch(() => next(error));
});

router.get('/', (req, res) => {
    Employee.find((error, data) => {
        if (error)
            return next(error);
        else
            res.status(200).json(data);
    });
});

router.route('/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(data);
        }
    });
});

router.route('/:id').delete((req, res, next) => {
    Employee.deleteOne({ id: req.params.id }, (error, data) => {
        if (error)
            return next(error);
        else
            res.status(200).send('Deletion successful');
    });
});

module.exports = router;