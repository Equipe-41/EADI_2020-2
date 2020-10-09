<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat to="/" icon="home"/>
          <q-toolbar-title>
            EADInclusivo
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutControle'
}
</script>
