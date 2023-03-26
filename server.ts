const app = require('./index')
import { Server } from 'http'

const PORT: number = Number(process.env.PORT || 3000)

const server: Server = app.listen(PORT, () => {
  console.log(`🧧 Server is running on http://localhost:${PORT}`)
})

module.exports = server