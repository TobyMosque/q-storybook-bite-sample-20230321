import { createApp } from 'vue'
import { Quasar } from 'quasar'
import createRoute from '@router'
import createStore from '@stores'
import apiBoot from '@boot/api'
import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const myApp = createApp(App)
const store = createStore({})
myApp.use(store)

const router = createRoute({ store })
myApp.use(router)

apiBoot({ app: myApp, store, router })

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
myApp.mount('#app')
