import request from 'supertest'
import app from '../config/app'
import { Request, Response } from 'express'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req: Request, res: Response) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Diogo' })
      .expect({ name: 'Diogo' })
  })
})
