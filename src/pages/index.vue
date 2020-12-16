<template>
  <q-page padding>
    <q-card
     class="card-curso q-ma-md bg-grey-1"
       v-for="curso in listaCursos"
     :key="curso.id"
     >
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="curso.img_src"
        />

        <q-card-section>
          <div class="text-h5 q-mb-xs">{{curso.titulo}}</div>
          <div class="text-body2 text-grey">
            {{curso.descricao}}
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions class="row q-pa-md">
        <q-btn
          align="left"
          flat
          class="col"
          to="comprar-curso"
        >R$ {{curso.preco}}</q-btn>

        <q-btn
          class="col bg-primary"
          flat
          color="white"
          label="Saiba Mais"
          :to="curso.to"
        />
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      listaCursos: [
        {
          id: 1,
          img_src: 'https://www.pozellialimentos.com.br/img/blog/grande/fbae5982b88f8bcff3d9efe70bb9daec.png',
          titulo: 'Titulo Curso 1',
          descricao: 'Descricao do primeiro Curso em poucas Palavras',
          preco: '120.00',
          to: 'controle'
        },
        {
          id: 2,
          img_src: 'https://www.estudiosite.com.br/img/post/odamCoFC3qoYyZm7NDb55b364d7855d80.jpg',
          titulo: 'Titulo Curso 2',
          descricao: 'Descricao do segundo Curso em poucas Palavras',
          preco: '0.00',
          to: 'controle'
        },
        {
          id: 3,
          img_src: 'data:image/png;base64,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',
          titulo: 'Titulo Curso 3',
          descricao: 'Descricao do terceiro Curso em poucas Palavras',
          preco: '210.99',
          to: 'controle'
        },
        {
          id: 4,
          img_src: 'https://blog.sympla.com.br/wp-content/uploads/2014/05/Como-fazer-um-curso-online.png',
          titulo: 'Titulo Curso 4',
          descricao: 'Descricao do Quarto Curso em poucas Palavras',
          preco: '210.99',
          to: 'controle'
        }
      ]
    }
  }
}
</script>
