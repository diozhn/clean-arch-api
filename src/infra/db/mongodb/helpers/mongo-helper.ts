import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },
  async disconnect (): Promise<void> {
    await this.client.close()
  },
  async getCollection (name: string): Promise<Collection> {
    return this.client.db().collection(name)
  },
  async map (mongoCollection: any): Promise<any> {
    const { _id, ...rest } = mongoCollection
    return { ...rest, id: _id.toString() }
  }
}
