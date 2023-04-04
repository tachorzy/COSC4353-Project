import Client from '../../__models/client.js'

async function getClientData() {
    try {
      const clients = await Client.find({});
      console.log(client)
      return clients;
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching client data');
    }
  }