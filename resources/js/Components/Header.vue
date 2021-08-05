<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" href="/">
          {{ appname }}
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <Link class="nav-link active" href="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" href="/sobre">Sobre</Link>
            </li>
          </ul>


          <div class="ms-auto" v-if="$page.props.user">

          <div class="dropdown text-end">
            <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu dropdown-menu-end text-small" aria-labelledby="dropdownUser1" style="">
              <li><a class="dropdown-item" href="#">{{ $page.props.user.name }}</a></li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <form @submit.prevent="logout">
                  <button class="btn btn-link dropdown-item" type="submit">
                    Sair
                  </button>
                </form>
              </li>
            </ul>
          </div>

          </div>
          <div class="ms-auto" v-else>
            <Link :href="route('login')" class="btn btn-outline-success me-2">
              Login
            </Link>
            <Link :href="route('register')" class="btn btn-outline-success">
              Cadastro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: { Link },
  props: { appname: String, default: '' },
  methods: {
    logout() {
      this.$inertia.post(route('logout'));
    }
  }
}
</script>
