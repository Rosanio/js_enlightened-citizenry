import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    stateSearch() {
      var params = {
        state: this.get('state')
      };
      this.sendAction('stateSearch', params);
    }
  }
});
