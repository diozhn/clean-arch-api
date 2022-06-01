import request from 'supertest'
import app from '../config/app'
import { Request, Response } from 'express'

describe('Content Type Middleware', () => {
  test('Should return default content type as json', async () => {
    app.get('/test_content_type', (req: Request, res: Response) => {
      res.send()
    })
    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })
})
