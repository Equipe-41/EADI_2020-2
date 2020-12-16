<template>
  <q-page-container>
    <!-- Top -->
     <div
       id="top"
       class="q-ma-md q-pa-md bg-grey-4"
      >
      <div
       id="PDiv"
        class="row justify-center"
         v-for="user in UserProfile"
       :key="user"
       >
       <!-- User Profile -->
      <div class="row justify-center text-indigo-10">
       <q-avatar
         class="q-ma-sm"
         size="250px">
        <img :src="user.Avatar">
        <q-btn
         round
          class="absolute-bottom-right bg-white"
          icon="edit"
         size="18px"
        >
        </q-btn>
        </q-avatar>
       </div>
       <!-- User name -->
      <div class="column items-center justify-center q-ma-lg">
        <q-item-label class="text-h4 q-ma-md">
           {{ user.Name }}
        </q-item-label>
        <q-rating
          v-model="ratingModel"
           size="3.1em"
            color="orange"
           icon="star_border"
          icon-selected="star"
         />
      </div>
      </div>
      <!-- Numbers -->
      <div
       id="Numbers"
        class="q-ma-sm bg-white shadow-2"
         v-for="n in Numbers"
        :key="n.id"
        >
      <!-- Avanços -->
      <div class="q-pa-md q-ma-md ">
       <q-item-label class="text-h6">
          Avanços
       </q-item-label>
      </div>
      <div class="row justify-center q-ma-md q-pa-sm">
       <div class="column items-center q-pa-md text-green-8">
         <q-btn
          flat
           round
            icon="done_outline"
           size="15px"/>
          <q-item-label class="text-h6">
           {{ n.Courses }}
          </q-item-label>
          <q-item-label class="text-h6">
           Cursos
          </q-item-label>
        </div>
       <q-separator
         vertical
          color="grey-4"
         size="3px"
         class="q-mb-md"
        />
       <div class="column items-center q-pa-md text-red">
         <q-btn
           flat
            round
            icon="grade"
           size="15px"/>
         <q-item-label class="text-h6">
           {{ n.Conquest }}
         </q-item-label>
         <q-item-label class="text-h6">
           Conquistas
         </q-item-label>
       </div>
      </div>
     </div>
    </div>
    <!-- Cursos -->
    <q-list
      class="q-pa-md"
       v-for="card in CourseCard"
      :key="card.id">
      <!-- Card -->
      <q-expansion-item>
      <template v-slot:header>
       <img :src="card.CourseImg"
        class="q-ma-md"
        >
      <q-item-section class="text-h5 q-pa-md text-left">
        {{ card.CourseName }}
      </q-item-section>
       </template>
       <!-- Card Expanded -->
     <q-card
       id="card"
         class="q-ma-md bg-grey-4">
       <img :src="card.CourseBg">
       <q-btn
         class="q-ma-md bg-white"
          label="Retomar"
           rounded
         :to="card.to"/>
        <q-circular-progress
          show-value
           front-size="20px"
           :value="card.value"
            size="80px"
            :thickness="0.25"
            color="green-8"
           track-color="transparent"
          class="absolute-top-right text-bold q-ma-lg text-green-8"
          >
            {{ card.value }}%
        </q-circular-progress>
       </q-card>
      </q-expansion-item>
     <q-separator size="2px" color="grey-4" />
    </q-list>
  </q-page-container>
</template>

<style lang="stylus">
    #top {
      border-radius 20px
    }
    #PDiv {
    }
    #Numbers {
      border-radius 20px
    }
    #card {
      border-radius 25px
    }
</style>

<script>
export default {
  name: 'PageUser',
  data () {
    return {
      UserProfile: [
        {
          id: 1,
          Avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          Name: 'User Name'
        }
      ],
      Numbers: [
        {
          Courses: '0',
          Conquest: '0'
        }
      ],
      CourseCard: [
        {
          id: 1,
          CourseImg: 'https://icon-icons.com/icons2/1091/PNG/72/onlineshop_78377.png',
          CourseName: 'Desenv Web',
          CourseBg: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          value: 0,
          to: 'PageClass'
        },
        {
          id: 2,
          CourseImg: 'https://icon-icons.com/icons2/107/PNG/72/germany_18269.png',
          CourseName: 'Alemão A1',
          CourseBg: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          value: 0,
          to: ''
        },
        {
          id: 3,
          CourseImg: 'https://icon-icons.com/icons2/1954/PNG/72/sushifood_122726.png',
          CourseName: 'Culiária Oriental',
          CourseBg: 'https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          value: 0,
          to: ''
        }
      ],
      ratingModel: 0,
      expanded: false
    }
  }
}
</script>
