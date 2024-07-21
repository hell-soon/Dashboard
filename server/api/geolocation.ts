export default defineEventHandler(async (event) => {
  const clientIp = getRequestHeader(event, 'x-forwarded-for') || event.node.req.socket.remoteAddress
  console.log('clientIp', clientIp)

  if (!clientIp) {
    throw createError({ statusCode: 400, statusMessage: 'Client IP not found' })
  }

  try {
    const response = await fetch(`http://ip-api.com/json/${clientIp}`)
    const data = await response.json()

    console.log('response', data)

    return data
  }
  catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch geolocation data' })
  }
})
