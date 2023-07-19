import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class UserOrdersAPI extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://${context.account}.vtexcommercestable.com.br`, context, {
      ...options,
    })
  }

  public async getUserOrders(): Promise<any> {
    return this.http.get(
      `/api/oms/user/orders`,
      {
        metric: 'get-user-orders',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Cache-Control': 'no-cache',
          'X-VTEX-Use-Https': true,
          VtexIdclientAutCookie: this.context.storeUserAuthToken
        }
      }
    )
  }
}
