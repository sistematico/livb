require('./bootstrap');

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

import { ZiggyVue } from 'ziggy';
import { Ziggy } from './ziggy';

import VuePlyr from 'vue-plyr'
import '../css/plyr.css'

// Twitter Bootstrap
import 'bootstrap'

import BaseLayout from '@/Layouts/Main'

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`).default
    page.layout = page.layout || BaseLayout
    return page
  },
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .mixin({ methods: { route } })
      .use(plugin, ZiggyVue, Ziggy)
      .use(VuePlyr, { plyr: {} })
      .mount(el)
  },
})
