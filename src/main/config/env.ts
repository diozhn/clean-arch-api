/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://enalta:112358@enalta.hnaao.mongodb.net/enalta?retryWrites=true&w=majority',
  port: process.env.PORT || 5050
}
