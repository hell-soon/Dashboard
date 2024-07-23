import type { City } from '~/types/models/city'

export default defineEventHandler(async (event) => {
  const clientIp = getRequestHeader(event, 'x-forwarded-for') || event.node.req.socket.remoteAddress

  if (!clientIp) {
    throw createError({ statusCode: 400, statusMessage: 'Client IP not found' })
  }

  try {
    const response = await fetch(`http://ip-api.com/json/${clientIp}`)
    const data: City = await response.json()

    console.log('response', data)

    return data
  }
  catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch geolocation data' })
  }
})
