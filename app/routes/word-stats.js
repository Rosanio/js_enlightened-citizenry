import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(params) {
      this.transitionTo('searched-word', params.word);
    }
  }
});
