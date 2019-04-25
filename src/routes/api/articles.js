const {
   fetchArticles
} = require('../../controlles/articles')
const route = require('express').Router()

route.get('/', async (req, res) => {
   // Get all articles
   const articles = await fetchArticles()
   res.status(200).json(articles)
})

route.post('/', async (req, res) => {
   // Add a new article
   await createArticle(
      req.body.title,
      req.body.content,
      1 //TODO  : actual user id from req.user.id
   )

   res.send(article)

})

route.get('/:id', (req, res) => {
   // Fetch a particular article
})

route.get('/:id/comments', (req, res) => {
   // Fetch comments of a particular article
})

module.exports = route