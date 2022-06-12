// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Url = require("../../models/Url")
const shortURL_generator = require("../../random/random")

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:shorten_URL', (req, res) => {
  shorten_URL = 'http://localhost:3000/' + req.params.shorten_URL
  Url.findOne({ shortURL: shorten_URL })
    .lean()
    .then(data => {
      if (!data) {
        res.render('error')
      } else {
        res.redirect(data.longURL)
      }
    })
    .catch(error => console.error(error))
})


router.post('/Url_Shortener', (req, res) => {
  if (!req.body.longURL) return res.redirect("/")
  const shortenURL = shortURL_generator()
  Url.findOne({ longURL: req.body.longURL })
    .lean()
    .then(data => {
      if (!data) {
        Url.create({ longURL: req.body.longURL, shortURL: shortenURL })
          .then(() => {
            res.render('copy',
              { shortURL: shortenURL, longURL: req.body.longURL })
          })
      }
      else {
        res.render('copy', {
          longURL: data.longURL,
          shortURL: data.shortURL
        })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router