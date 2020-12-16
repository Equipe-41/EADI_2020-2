<template>
  <q-page padding class="flex flex-center row">
    <div class="row col-12">
      <q-card bordered class="my-card bg-gray-1 offset-1 col-10">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col-12">
            <div class="text-h6 flex flex-center">Cadastro</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div class="col-12">
            <q-input
             v-model="novoUsuario.nome"
              filled
             outlined
            label="Nome:"></q-input>
          </div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-12">
            <q-input
             v-model="novoUsuario.email"
              type="email"
              filled
             outlined
            label="Email:"></q-input>
          </div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-12">
            <q-input
             v-model="novoUsuario.senha"
              type="password"
               filled
              outlined
            label="Senha:"></q-input>
          </div>
        </div>
        <div class="row q-mt-sm">
          <div class="col-12 text-center">
            <q-btn
             rounded
              class="q-pa-sm q-ma-md"
               color="primary"
              label="cadastrar"
            @click="createUser" />
          </div>
        </div>
        <div class="text-right col-12">
          <div class="text-center q-mt-xl">ou</div>
          <div class=" text-primary text-subtitle1 text-center">
            <q-btn flat to="/controle">Fazer Login</q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SingUp',
  data () {
    return {
      novoUsuario: {
        nome: '',
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    createUser () {
      this.$axios
        .post('http://localhost:3000/usuarios', this.novoUsuario)
        .then(
          this.$q.notify({
            message: 'Cadastrado com sucesso',
            color: 'positive'
          }),
          this.$router.push('/'))
    }
  }
}
</script>
