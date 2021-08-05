<template>
  <div>
      <Carousel />
      <div class="container">
        <h1 class="mt-5">Index Page</h1>
        <p class="lead">
          Index
        </p>
      </div>
  </div>
</template>

<script>
import Main from '@/Layouts/Main'
import Carousel from '@/Components/Carousel'

export default {
  layout: Main,
  components: { Carousel }
}
</script>
