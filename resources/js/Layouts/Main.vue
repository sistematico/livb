<template>
  <Head :title="title ? `${appName} - ${title}` : `${appName}`" />
  <Header :appname="appName" />
  <slot />
  <Footer :appname="appName" />
</template>
<script>
import { computed } from 'vue'
import { usePage, Head } from '@inertiajs/inertia-vue3'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default {
  components: { Head, Header, Footer },
  props: {
    title: String, default: ''
  },
  setup() {
    const user = computed(() => usePage().props.value.auth.user)
    const appName = computed(() => usePage().props.value.appName)
    return { user, appName }
  }
}
</script>
