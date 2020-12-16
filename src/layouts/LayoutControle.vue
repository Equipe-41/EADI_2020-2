<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row">
      <q-header elevated>
        <q-toolbar class="row no-wrap items-center q-pa-sm bg-indigo-10">
          <q-btn
           flat
            to="/"
            icon="home"
             size="18px"
            />
            <q-space/>
          <q-toolbar-title>

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
