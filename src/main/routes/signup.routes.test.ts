import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Diogo',
        email: 'contato.diogomendes@gmail.com',
        password: '112358',
        passwordConfirmation: '112358'
      })
      .expect(200)
  })
})
