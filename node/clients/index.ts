import { IOClients } from '@vtex/api'
import UserOrdersAPI from '../services/UserOrdersAPI'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get getUserOrders() {
    return this.getOrSet('getUserOrders', UserOrdersAPI)
  }
}