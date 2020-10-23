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
      v-for="n in 5"
      :key="n"
      dense
      class="text-body text-justify q-mt-ss"
    >{{curso.detalhe}}</div>

    <div
      class="text-h6 text-bold q-mt-lg"
    >R$ {{curso.preco}}</div>

    <q-btn
      class="q-mt-lg"
      color="primary"
      label="Comprar Curso"
      to="comprar-curso"
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
        preco: '120.00',
        detalhe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et magna et sem vehicula laoreet at sit amet urna. Nunc tincidunt cursus libero, ac lobortis ipsum semper vel. Aliquam erat volutpat. Duis commodo, lacus at ultrices suscipit, nisi ipsum efficitur lorem, vitae vulputate diam magna ut arcu. Nam facilisis convallis suscipit. Ut scelerisque sed purus quis lobortis. Phasellus varius odio id accumsan mollis.'
      }
    }
  }
}
</script>
