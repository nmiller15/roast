import roasts from "./roasts"

class User {
  constructor(data) {
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.email = data.email
    this.username = data.username
    this.password = data.password
    this.roasts = data.roasts
  }
}

const nolan = new User({
  firstName: 'Nolan',
  lastName: 'Miller',
  email: 'mail@nolanmiller.me',
  username: 'nolanmiller',
  password: 'midnightcodermonkey',
  roasts: roasts
})

const users = [ {
  firstName: 'Nolan',
  lastName: 'Miller',
  email: 'mail@nolanmiller.me',
  username: 'nolanmiller',
  password: 'midnightcodermonkey',
  roasts: roasts
}]

export default users