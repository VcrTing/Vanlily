const TEST = true

const URI = 'https://strapi04.svr.up5d.com'

import ENDPOINT from './air/endpoint'

export default {
    STRAPI: {
        named: 'admin',
        pass: '1Qazxc2Wsxcv?!'
    },
    TEST,

    URI,
    API: URI + '/api',

    ENDPOINT,

    VERSION: 'APR.3'
}