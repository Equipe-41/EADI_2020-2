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
        <div class="row">
          <div class="col-10">
            <q-input type="email" v-model="user.login" filled outlined label="Seu email:"></q-input>
          </div>
          <div class="col-10 q-mt-sm">
            <q-input type="password" v-model="user.senha" filled outlined label="Sua senha:"></q-input>
          </div>
          <div class="col-2 q-mt-sm q-pl-sm">
            <q-btn round color="primary"  icon="send" @click=logar() />
          </div>
        </div>
        <div class="text-right col-12">
          <div class="text-center q-mt-xl">ou</div>
          <div class=" text-primary text-subtitle1 text-center">
            <q-btn flat to="/controle/sign-up">Cadastre-se</q-btn>
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
      this.$router.push('/')
    }
  }
}
</script>
