<template>
  <div class="fullscreen bg-primary text-accent text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vw">
        404
      </div>

      <div class="text-h4" style="opacity:.4">
        Eita! Não há nada aqui...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
