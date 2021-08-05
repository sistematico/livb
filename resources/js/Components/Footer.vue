<template>
  <footer class="pt-5 text-muted">
    <div class="container">
      <span class="text-muted">Copyright {{ year }} {{ appname }}</span>
    </div>
  </footer>
</template>
<script>
export default {
  props: { appname: String, default: '' },
  data() {
    return {
      year: 0
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  }
}
</script>
