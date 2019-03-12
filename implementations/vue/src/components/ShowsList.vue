<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-flex v-for="show in shows" :key="show.id" @click="onClick(show.id)" shrink v-if="show.image">
                <div>{{show.name}}</div>
                <img
                    :src="show.image"
                ></img>
                <div>Score: {{Math.round(show.score*10)/10}}</div>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
  export default {
    props: ['shows'],
    methods: {
      onClick: function(showId) {
        this.$emit('select', showId);
      },
    },
    data() {
      return {};
    },
  };
</script>

<style>

</style>
