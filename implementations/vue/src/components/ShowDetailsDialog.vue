<template>
    <v-dialog v-model="open" fullscreen hide-overlay transition="dialog-bottom-transition" v-if="info">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="close">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>{{info.name}}</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-container grid-list-xl fluid>
                <v-layout row wrap>
                    <v-flex xs12><a :href="info.website" target="_blank">Go to website</a></v-flex>
                    <v-flex xs6>
                        <img class="image" :src="info.image.original" :alt="info.name">
                    </v-flex>
                    <v-flex xs6>
                        <div v-html="info.summary"></div>
                    </v-flex>
                    <v-flex xs12 v-if="hasCast" tag="h2">Cast</v-flex>
                    <v-flex v-if="hasCast && actor.character.image && actor.character.image.medium"
                            v-for="actor in cast" :key="actor.person.id" shrink>
                        <v-card>
                            <div>
                                {{actor.person.name}}
                                <hr/>
                                {{actor.character.name}}
                            </div>
                            <img class="img-actor" :src="actor.character.image.medium">
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
  import { mapActions } from 'redux-vuex';

  export default {
    props: ['open', 'info'],
    computed: {
      hasCast: function() {
        return this.info._embedded && this.info._embedded.cast;
      },
      cast: function() {
        return this.info._embedded && this.info._embedded.cast || {};
      },
    },
    methods: mapActions({
      close: function() {
        this.$emit('close');
      },
    }),
    data() {
      return {};
    },
  };
</script>

<style>
    .image {
        width: 100%;
        height: auto;
    }

    .img-actor {
        margin-bottom: -6px;
    }

</style>
