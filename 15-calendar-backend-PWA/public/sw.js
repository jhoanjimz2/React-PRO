/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.precaching.precacheAndRoute( [{"revision":"cf43be5e37d02dddceca41b04188fa28","url":"asset-manifest.json"},{"revision":"6e1267d9d946b0236cdf6ffd02890894","url":"favicon.ico"},{"revision":"27f979166976034275f48b2b287d8b8b","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"258f5560d5a842ce46c4b09acf6ef8ba","url":"manifest.json"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"bfdc3ff354a76bada4870efecb3a5eb0","url":"static/css/main.a3574b48.css"},{"revision":"53a8e41d42079cc40e0db947a084024b","url":"static/js/main.45b486f4.js"},{"revision":"3cc2e497e60627dcaca6aebf4050715c","url":"static/js/main.45b486f4.js.LICENSE.txt"}] );

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
    new RegExp('https://mern-calendar-jhoan.herokuapp.com/api/events'),
    new NetworkFirst({
        plugins: [bgSyncPlugin]
    }),
    'POST'
)
registerRoute(
    new RegExp('https://mern-calendar-jhoan.herokuapp.com/api/events/'),
    new NetworkFirst({
        plugins: [bgSyncPlugin]
    }),
    'DELETE'
)
registerRoute(
    new RegExp('https://mern-calendar-jhoan.herokuapp.com/api/events/'),
    new NetworkFirst({
        plugins: [bgSyncPlugin]
    }),
    'PUT'
)