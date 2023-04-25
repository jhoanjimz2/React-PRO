/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.precaching.precacheAndRoute( [{"revision":"4f96ef491157549771cc1a6c017219de","url":"asset-manifest.json"},{"revision":"6e1267d9d946b0236cdf6ffd02890894","url":"favicon.ico"},{"revision":"925cd7d32b9e63a3a381ed8fb601b4c4","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"258f5560d5a842ce46c4b09acf6ef8ba","url":"manifest.json"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"bfdc3ff354a76bada4870efecb3a5eb0","url":"static/css/main.a3574b48.css"},{"revision":"077072a561dfd652482bd051443c4956","url":"static/js/main.b639f3df.js"},{"revision":"3cc2e497e60627dcaca6aebf4050715c","url":"static/js/main.b639f3df.js.LICENSE.txt"}] );

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