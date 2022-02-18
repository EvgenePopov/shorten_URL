const express = require('express');
const {nanoid} = require('nanoid');
const Link = require('../models/Link');


const router = express.Router();

router.get('/:shortenedUrl', async (req, res, next) => {
  try {
    const link = await Link.findOne({shortenedUrl: req.params.shortenedUrl});

    if (link) {
      res.status(301).redirect(link.originalUrl);
    }
      res.status(404).send('Not found!');
  } catch (e) {
    next(e);
  }

});

router.post('/', async (req, res, next) => {
  try {
    const link = {
      originalUrl: req.body.originalUrl,
      shortenedUrl: shortUrl,
    }

    const linkObj = new Link(link);
    await linkObj.save();

    return res.send(linkObj);
  } catch (e) {
    next(e);
  }
});


module.exports = router;