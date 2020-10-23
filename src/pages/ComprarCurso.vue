<template>
  <q-page padding class="text-center q-gutter-md">
    <div class="row q-mt-md">
      <q-card class="my-card offset-2 col-8" >
        <q-img
          :src="curso.img_src"
          basic
          class=""
        />
      </q-card>
    </div>
    <div
      class="text-h5 text-bold q-mt-md"
    >{{curso.titulo}}</div>

    <div
      class="text-body text-grey-8 q-mt-sm"
    >{{curso.descricao}}</div>

    <div
      class="text-h4 q-mt-md"
    >R$ {{curso.preco}}</div>

    <div class="row">
      <q-input
        class="q-pl-sm bg-grey-2 q-mt-md offset-1 col-10"
        dense
        label-color="primary"
        label="Nome do Titular"
        rounded
        v-model="cartao.nome"
      />
      <q-input
        class="q-pl-sm bg-grey-2 q-mt-sm offset-1 col-10"
        dense
        label-color="primary"
        label="Numero do Cartão"
        mask="#### #### #### ####"
        rounded
        v-model="cartao.numero"
      />
      <q-select
        class="q-pl-sm bg-grey-2 q-mt-sm offset-1 col-5"
        dense
        :options="bandeiras"
        v-model="cartao.bandeira"
        label="Bandeira"
        label-color="primary"
      />
      <q-input
        class="q-pl-sm bg-grey-2 q-mt-sm offset-1 col-4"
        dense
        mask="##/##"
        label="Vencimento"
        label-color="primary"
        v-model="cartao.vencimento"
      />
      <q-input
        class="q-pl-sm bg-grey-2 q-mt-sm offset-1 col-4"
        dense
        mask="###"
        v-model="cartao.cvv"
        label="CVV"
        label-color="primary"
      />
      <q-select
        class="q-pl-sm bg-grey-2 q-mt-sm offset-1 col-5"
        dense
        mask="##/##"
        :options="parcelas"
        label="Parcelas"
        label-color="primary"
        v-model="cartao.numParcelas"
      />
    </div>

    <q-btn
      class="q-mt-lg"
      color="primary"
      label="Comprar"
    />
    <q-btn
      class="q-mt-lg"
      color="primary"
      label="Cancelar"
      to="/"
    />

  </q-page>
</template>

<script>
export default {
  name: 'PageComprarCurso',
  data () {
    return {
      curso: {
        id: 1,
        img_src: 'https://www.pozellialimentos.com.br/img/blog/grande/fbae5982b88f8bcff3d9efe70bb9daec.png',
        titulo: 'Titulo Curso 1',
        descricao: 'Descricao do primeiro Curso em poucas Palavras',
        preco: '120.00'
      },
      bandeiras: ['Visa', 'MasterCard', 'Hipercard', 'Elo', 'American Express'],
      parcelas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      cartao: {
        nome: null,
        numero: null,
        bandeira: null,
        vencimento: null,
        cvv: null,
        numParcelas: null
      }
    }
  }
}
</script>
