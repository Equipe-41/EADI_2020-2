<template>
  <q-page padding class="flex flex-center row">
    <div class="row col-12">
      <q-card bordered class="my-card bg-gray-1 offset-1 col-10">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col-12">
            <div class="text-h6 flex flex-center">Login</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="column">
          <div class="">
            <q-input
             type="email"
              v-model="user.login"
               filled
              outlined
             label="Seu email:"
             >
           </q-input>
          </div>
          <div class="q-mt-sm">
            <q-input
             type="password"
              v-model="user.senha"
               filled
              outlined
            label="Sua senha:"
          >
          </q-input>
          </div>
          <div class="flex justify-center q-ma-md">
            <q-btn
             rounded
             class="q-pa-sm q-ma-md"
              color="primary"
               to="/menu/"
              label="Entrar"
             @click= logar() />
          </div>
        </div>
        <div class="text-right col-12">
          <div class="text-center q-mt-xl">ou</div>
          <div class="column text-primary text-subtitle1 text-center">
            <q-btn flat to="/controle/SignUp">Cadastre-se</q-btn>
            <q-btn flat to="/controle/PassWord">Esqueci Minha Senha</q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        login: '',
        senha: ''
      }
    }
  },
  methods: {
    logar () {
      this.$q.notify({
        message: 'Usuário logado!',
        color: 'positive'
      })
      this.$router.push('/menu/')
    }
  }
}
</script>
