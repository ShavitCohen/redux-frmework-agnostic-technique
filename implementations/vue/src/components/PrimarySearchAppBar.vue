<template>
    <v-toolbar app dark color="primary">
        <v-toolbar-title class="headline text-uppercase">
            <span>Redux</span> &nbsp;
            <span class="font-weight-light">middleware example</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
            prepend-inner-icon="search"
            placeholder="Search..."
            solo flat
            class="search"
            max-height="30"
            @input="onChanged"
        ></v-text-field>
        <v-img
            :src="require('../assets/logo.png')"
            contain
            height="40"
            width="60"
            max-width="60"
        ></v-img>
    </v-toolbar>
</template>

<script>
  export default {
    methods: {
      onChanged: function(data) {
        this.$emit('changed', data);
      },
    },
  };
</script>

<style>
    .search {
        flex-grow: 0;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 4px;

    }

    .search:hover {
        background: rgba(255, 255, 255, 0.35);

    }

    .search.v-text-field.v-text-field--solo > .v-input__control {
        min-height: 35px;
        margin-bottom: -8px;
    }

    .search.v-text-field.v-text-field--solo > .v-input__control > .v-input__slot {
        background: none;
    }
</style>
