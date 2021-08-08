<template>
  <Carousel />
  <main class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-3">Página Inicial</h1>
    </div>
  </main>
</template>

<script>
import Main from '@/Layouts/Main'
import Carousel from '@/Components/Carousel'

export default {
  layout: Main,
  components: { Carousel }
}
</script>
