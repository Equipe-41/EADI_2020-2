<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar
         class="row no-wrap items-center q-pa-sm bg-indigo-10">
        <q-btn
          flat
          dense
          round
          size="18px"
          icon="arrow_back_ios"
          to="/menu/"
        />
        <q-space/>
        <q-btn
          flat
          dense
          round
          size="18px"
          icon="account_circle"
          to="/profile/"
        />
      </q-toolbar>
    </q-header>
      <router-view/>
  </q-layout>
</template>

<script>
export default {
  name: 'MainProfile'
}
</script>
