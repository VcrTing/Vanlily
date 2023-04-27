const TEST = true
const TEST_ENV = false

const URI = 'https://strapi04.svr.up5d.com'

import ENDPOINT from './air/endpoint'

export default {
    STRAPI: {
        named: 'system@vanlilycake.com',
        pass: '1Qazxc2Wsxcv?!'
    },
    TEST,
    TEST_ENV,

    URI,
    API: URI + '/api',

    ENDPOINT,

    VERSION: 'APR 27'
}