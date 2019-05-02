addEventListener('fetch', event => {
    console.log('event', event)
    event.respondWith(handleRequest(event.request))
})

import Router from './router'
import lookup from './src/handlers/lookup'
import webhook from './src/handlers/webhook'
async function handleRequest(request) {
    const r = new Router()
    r.post('/lookup', lookup)
    r.post('/webhook', webhook)

    let response = await r.route(request)

    if (!response) {
        response = new Response('Not found', { status: 404 })
    }

    return new Response('Not found', { status: 404 })
}
