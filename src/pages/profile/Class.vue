<template>
    <q-page-container>
        <!-- Top -->
        <div
         id="top"
          v-for="course in CourseTop"
           :key="course"
           class="row justify-center q-pa-md q-ma-md "
         >
         <img :src="course.CourseImg">
         <!-- Nome do Curso -->
         <div class="column justify-center text-center q-pa-md">
         <q-item-label class="text-h4 q-pa-md">
            {{ course.CourseName }}
         </q-item-label>
          <!-- SubTítulo -->
         <q-item-label class="text-h6 text-grey-6">
            {{ course.SubT }}
         </q-item-label>
         </div>
        </div>
        <!-- Modelo de Aula -->
        <q-list
         id="card"
          v-for="aula in Class"
          :key="aula.id"
         >
         <q-card
          class="flex row q-ma-md shadow-2"
           style="border-radius: 18px"
          >
         <q-img :src="aula.Bg">
         <div class="absolute-bottom">
          <!-- Título -->
         <q-item-label class="text-h6">
             {{ aula.Title }}
         </q-item-label>
         <!-- Subtitulo -->
         <q-item-label class="text-h6 text-grey-6">
             {{ aula.SubT }}
         </q-item-label>
         <q-btn
          class="absolute-right"
           color="white"
            size="30px"
            flat
           icon="play_circle_outline"
          :to="aula.to"
          >
         </q-btn>
        </div>
       </q-img>
      </q-card>
     </q-list>
   </q-page-container>
</template>
<style lang="stylus">
    #card {
        cursor pointer
    }
    #img {
        border-top-left-radius 10px
        border-bottom-left-radius 10px
    }
</style>
<script>
export default {
  name: 'pageClass',
  data () {
    return {
      CourseTop: [
        {
          CourseImg: 'https://icon-icons.com/icons2/1091/PNG/256/onlineshop_78377.png',
          CourseName: 'Desenvolvimento Web',
          SubT: 'Aprenda a criar aplicações web rápidas de forma simples'
        }
      ],
      Class: [
        {
          id: 1,
          Bg: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          Title: 'Aula 01 - HTML',
          SubT: 'Web',
          to: 'PageVideo'
        },
        {
          id: 2,
          Bg: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          Title: 'Aula 02 - CSS',
          SubT: 'Web',
          to: ''
        },
        {
          id: 3,
          Bg: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          Title: 'Aula 03 - JavaScript',
          SubT: 'Web',
          to: ''
        },
        {
          id: 4,
          Bg: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          Title: 'Aula 04 - Materialize',
          SubT: 'Web',
          to: ''
        }
      ]
    }
  }
}
</script>
