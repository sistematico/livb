<template>
  <main class="flex-shrink-0">
    <div class="container">
        <h1 class="mt-5">{{ appName }}</h1>
        <p class="lead">
          About
        </p>
    </div>
  </main>
</template>
<script>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import Main from '@/Layouts/Main'

export default {
  layout: Main,
  setup() {
    const user = computed(() => usePage().props.value.auth.user)
    const appName = computed(() => usePage().props.value.appName)
    return { user, appName }
  }
}
</script>
