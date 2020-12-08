<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar class="bg-indigo-10">
        <q-btn
          flat
          dense
          round
          icon="arrow_back_ios"
          to="/class/"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainVideo'
}
</script>
