const {
   app
} = require('./server')
const {
   db
} = require('./models/db')
const log = require('debug')('app:run')

async function run() {

   await db.sync()
   log('Database is ready')
   app.listen(5050, () => {
      log('server running on http://localhost:5050')
   })

}

run()