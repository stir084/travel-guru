<template>
  <div class="home">
    <TravelVote msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TravelVote from '@/components/TravelVote.vue'

export default {
  name: 'HomeView',
  components: {
    TravelVote
  }
}
</script>