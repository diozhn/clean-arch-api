import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (this.client === null) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  async map (mongoCollection: any): Promise<any> {
    const { _id, ...rest } = mongoCollection
    return { ...rest, id: _id.toString() }
  }
}
