<template>
  <form @submit.prevent="login" class="form-signin my-auto">
    <h1 class="h3 mb-3 fw-normal">Entrar</h1>

    <div class="form-floating">
      <input v-model="form.email" type="email" class="form-control" id="email" placeholder="nome@exemplo.com" aria-describedby="emailHelp" required>
      <label for="email">E-mail</label>
      <div id="emailHelp" class="form-text" v-if="form.errors.email">{{ form.errors.email }}</div>
    </div>

    <div class="form-floating">
      <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Senha" aria-describedby="passwordHelp" required>
      <label for="floatingPassword">Senha</label>
      <div id="passwordHelp" class="form-text" v-if="form.errors.password">{{ form.errors.password }}</div>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Lembrar
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
  </form>
</template>
<style scoped>
@import url('../../../css/signin.css');

body {
    text-align: center !important;
}
</style>
<script>
    export default {
        data() {
            return {
                form: this.$inertia.form({
                    email: '',
                    password: ''
                }),
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 50) || 'Name must be less than 50 characters',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be greater than 6 characters',
                ],
            }
        },
        methods: {
            login() {
                this.form.post(this.route('login'), {
                    onFinish: () => this.form.reset('password')
                })
            }
        }
    }
</script>
