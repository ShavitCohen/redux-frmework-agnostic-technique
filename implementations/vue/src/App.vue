<template>
    <v-app>
        <PrimarySearchAppBar @changed="userTyping"></PrimarySearchAppBar>
        <v-content>
            <div class="app-body">
                <ShowsList :shows="shows" @select="tvShowSelected"></ShowsList>
                <ShowDetailsDialog
                    :open="isModalOpen" :info="selectedShowInfo"
                    @close="setModalState(false)"
                ></ShowDetailsDialog>
            </div>
            <!--<HelloWorld/>-->
        </v-content>
    </v-app>
</template>

<script>
  import { mapActions } from 'redux-vuex';
  import { searchActions, showInfoActions } from 'x-redux';
  import ShowsList from './components/ShowsList';
  import PrimarySearchAppBar from './components/PrimarySearchAppBar';
  import ShowDetailsDialog from './components/ShowDetailsDialog';

  export default {
    name: 'App',
    components: {
      PrimarySearchAppBar,
      ShowsList,
      ShowDetailsDialog,
    },
    data() {
      return {
        ...this.mapState({
          shows: state => state.search.shows,
          isModalOpen: state => state.showInfo.isOpen,
          selectedShowInfo: state => state.showInfo.info,
        }),
      };
    },
    methods: {
      ...mapActions({
        userTyping: function({dispatch}, query) {
          dispatch(searchActions.userTyping({query}));
        },
        tvShowSelected: function({dispatch}, id) {
          dispatch(searchActions.tvShowSelected({id}));
        },
        setModalState: function({dispatch}, state) {
          dispatch(showInfoActions.setModalState({state}));
        },
      }),
    },
  };
</script>
