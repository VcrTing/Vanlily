
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import net from './air/net'
import vid from './air/vid'
import conf from './conf'
import view from './air/view'
import serv from './himmer/serv'
import strapi from './air/tooi/strapi'

import router from './himmer/router'
import tooi_time from './air/tooi/timed'

const app = createApp(App)

app.config.globalProperties.net = net
app.config.globalProperties.vid = vid
app.config.globalProperties.conf = conf
app.config.globalProperties.serv = serv

app.config.globalProperties.view = view
app.config.globalProperties.strapi = strapi
app.config.globalProperties.timed = tooi_time

import pina from './himmer/pina/app'
import userPina from './himmer/pina/user'
import orderPina from './himmer/pina/order'
import otherPina from './himmer/pina/other'
import memberPina from './himmer/pina/member'
import productPina from './himmer/pina/product'
import accountPina from './himmer/pina/account'
import orderAboutPina from './himmer/pina/order_about'

app.config.globalProperties.pina = pina
app.config.globalProperties.userPina = userPina
app.config.globalProperties.orderPina = orderPina
app.config.globalProperties.otherPina = otherPina
app.config.globalProperties.memberPina = memberPina
app.config.globalProperties.productPina = productPina
app.config.globalProperties.accountPina = accountPina
app.config.globalProperties.orderAboutPina = orderAboutPina

app.config.globalProperties.go = function (ink) { this.$router.push(ink) }
app.config.globalProperties.mod = function (n) { this.pina().modai( n ) }
app.config.globalProperties.iog = function (n) { console.log(n) }
app.config.globalProperties.token = function () { return this.userPina().jwt }

import persist from 'pinia-plugin-persist'
const store = createPinia()
store.use( persist )

app.use( router ).use( store ).mount('#app')
