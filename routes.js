const Router = require('nextjs-dynamic-routes')

const router = new Router()

// THESE LINES MAY be needed for ONLY THE LINK TAG USAGE. I BELIEVE They're not needed to capture query params. Because I have been able to access query params WITHOUT this line!
router.add({ name: 'demo', pattern: '/demo/:id/:card' })

router.add({ name: 'film', pattern: '/films/:id' })

// if the name of your route is different from your component file name:
router.add({
  // 👇 'name' ONLY used in Link tag!
  name: 'characterAndFilm',
  pattern: '/character-and-film/:characterId/',
  page: 'character-and-film'
})

module.exports = router