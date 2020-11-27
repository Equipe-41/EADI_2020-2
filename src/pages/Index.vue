<template>
  <q-page class="flex flex-center">
    <img
      alt="logo angular"
      src="data:image/png;base64,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"
    >
      <div class="row">
      <div class="col">
      <div class="q-pa-md">
      <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/XxPjcMTZz5w"  />
      <q-card-section>
        <div class="text-h6">Aula 01 Introdução</div>
                 <q-separator inset /><br>
        <div class="text-subtitle2">O AngularJS é um framework open-source de desenvolvimento front-end que possibilita o desenvolvimento de aplicações web, com foco em simplificar tanto a codificação quanto o processo de teste. Além disso, é possível integrá-lo com bibliotecas famosas como o Bootstrap, D3.js e o Apache Cordova (ou PhoneGap), ajudando a acelerar esse tipo de codificação como nunca antes tivemos.</div>
      </q-card-section>
    </q-card>
        </div>
        </div>
        </div>
      <div class="row">
      <div class="col">
      <div class="q-pa-md">
      <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/XxPjcMTZz5w"  />
      <q-card-section>
        <div class="text-h6">Aula 01 Introdução</div>
                 <q-separator inset /><br>
        <div class="text-subtitle2">O AngularJS é um framework open-source de desenvolvimento front-end que possibilita o desenvolvimento de aplicações web, com foco em simplificar tanto a codificação quanto o processo de teste. Além disso, é possível integrá-lo com bibliotecas famosas como o Bootstrap, D3.js e o Apache Cordova (ou PhoneGap), ajudando a acelerar esse tipo de codificação como nunca antes tivemos.</div>
      </q-card-section>
    </q-card>
        </div>
        </div>
        </div>
      <div class="row">
      <div class="col">
      <div class="q-pa-md">
      <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/XxPjcMTZz5w"  />
      <q-card-section>
        <div class="text-h6">Aula 01 Introdução</div>
                 <q-separator inset /><br>
        <div class="text-subtitle2">O AngularJS é um framework open-source de desenvolvimento front-end que possibilita o desenvolvimento de aplicações web, com foco em simplificar tanto a codificação quanto o processo de teste. Além disso, é possível integrá-lo com bibliotecas famosas como o Bootstrap, D3.js e o Apache Cordova (ou PhoneGap), ajudando a acelerar esse tipo de codificação como nunca antes tivemos.</div>
      </q-card-section>
    </q-card>
        </div>
        </div>
        </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
