<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
   <div class="row justify-center ">
      <div class=" justify-evenly" >
        <q-btn flat round dense icon="keyboard_arrow_left" />
        <q-btn flat round dense icon="search" />
        <q-btn flat round dense icon="hearing_disabled " />
        <q-btn flat round dense icon="menu" />
    </div>
   </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
</script>
