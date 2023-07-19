export async function getUserOrders(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: {},
    },
    clients: { getUserOrders: vtexApiClient }
  } = ctx

  const response = await vtexApiClient.getUserOrders()

  ctx.status = 200
  ctx.body = response

  await next()
}
