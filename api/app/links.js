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
    if (!req.body.originalUrl){
      res.status(404).send({message: 'Enter your Url!'});
    }

    let newShortenedUrl = null;

    const shortUrl = await Link.findOne({shortenedUrl: nanoid(6)});

    if (shortUrl) {
      return res.send({message: 'This Url already exists'});
    } else {
      newShortenedUrl = nanoid(6);
    }

    const link = {
      originalUrl: req.body.originalUrl,
      shortenedUrl: newShortenedUrl,
    }

    const linkObj = new Link(link);
    await linkObj.save();

    return res.send(linkObj);
  } catch (e) {
    next(e);
  }
});


module.exports = router;