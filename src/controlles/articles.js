const {
   Article,
   User
} = require('../models/db')

async function createArticle(title, contents, authorId) {

   if (typeof title !== 'string' || title.length < 1) {
      throw new Error('Title empty or undefined')
   }
   if (typeof content !== 'string' || title.length < 1) {
      throw new Error('Content empty or undefined')
   }
   if (typeof authorId !== 'number' || title.length < 1) {
      throw new Error('Author of article not defined')
   }

   try {
      return await Article.create({
         title,
         content,
         authorId
      })
   } catch (e) {
      console.error(e)
      throw e

   }

}

async function fetchArticles() {

   try {
      return await Article.findAll()

   } catch (e) {
      console.log(e)
      throw e
   }
}

module.exports = {
   createArticle,
   fetchArticles
}