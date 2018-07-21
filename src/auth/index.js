import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import pick from 'lodash/pick'
import { User } from '../models'

export default (server) => {
  server.post('/register', (req, res) => {
    const { name, email, pwd } = req.body
    const newUser = { name, email, pwd: bcrypt.hashSync(pwd, 8) }
    User.saveOrUpdate(newUser)
    res.status(200).send({ newUser })
  })

  server.post('/login', async (req, res) => {
    const { email, pwd } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).send('Unauthorized')
    }

    if (!bcrypt.compareSync(pwd, user.pwd)) {
      return res.status(401).send('Unauthorized')
    }

    const authUser = pick(user, ['name', 'email'])
    const token = jwt.sign(authUser, process.env.JWT_SECRET, { expiresIn: 86400 })

    res.status(200).send({ token, authUser })
  })

  server.use((req, res, next) => {
    const token = req.headers['x-access-token']
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send('Unauthorized')
      }
      req.user = decoded
      next()
    })
  })
}
