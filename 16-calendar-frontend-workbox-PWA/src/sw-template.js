/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

const { BackgroundSyncPlugin } =workbox.backgroundSync;
const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst } = workbox.strategies;


// registerRoute(
//     new RegExp('http://localhost:4000/api/events'),
//     new NetworkFirst()
// );





const cacheNetworkFirst = [
    '/api/auth/renew',
    '/api/events'
]
registerRoute(
    ({ request, url }) => {
        if( cacheNetworkFirst.includes( url.pathname ) ) return true;
        return false;
    },
    new NetworkFirst()
);




const cacheFirst = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'
]
registerRoute(
    ({ request, url }) => {
        if( cacheFirst.includes( url.href ) ) return true;
        return false;
    },
    new CacheFirst()
);



// Posters Offline
const bgSyncPlugin = new BackgroundSyncPlugin('posteos-offline', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
    new RegExp('http://localhost:4000/api/events'),
    new NetworkFirst({
        plugins: [bgSyncPlugin]
    }),
    'POST'
)
registerRoute(
    new RegExp('http://localhost:4000/api/events/'),
    new NetworkFirst({
        plugins: [bgSyncPlugin]
    }),
    'DELETE'
)
registerRoute(
    new RegExp('http://localhost:4000/api/events/'),
    new NetworkFirst({
        plugins: [bgSyncPlugin]
    }),
    'PUT'
)