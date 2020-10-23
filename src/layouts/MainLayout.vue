<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="row">
        <q-btn
          class="col-1"
          flat
          dense
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title
          class="text-center col">
          EADInclusivo
        </q-toolbar-title>

        <q-btn
          class="col-1"
          flat
          dense
          icon="search"
          @click="search = !search"
        />

        <q-btn
          class="col-1"
          flat
          dense
          icon="account_circle"
          to="controle"
        />

      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="q-mt-xl"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="row">
        <q-input
          class="offset-1 col-10 bg-blue-2 q-pl-sm"
          dense
          v-if="search"
          input-class="text-center q-pr-sm"
          label="pesquisar"
        />
    </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Cursos',
    caption: 'Meus Cursos',
    icon: 'school',
    link: 'lista-meus-cursos'
  },
  {
    title: 'Mais Cursos',
    caption: 'Pesquisar Cursos',
    icon: 'search',
    link: 'lista-cursos'
  },
  {
    title: 'Mensagens',
    caption: 'Minhas Mensagens',
    icon: 'chat',
    link: 'meu-chat'
  },
  {
    title: 'Forum',
    caption: 'Forum',
    icon: 'record_voice_over',
    link: 'forum'
  },
  {
    title: 'Sobre',
    caption: 'Sobre EADInclusivo',
    icon: 'push_pin',
    link: 'Sobre'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      search: false,
      essentialLinks: linksData
    }
  }
}
</script>
