import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search() {
      var params = {
        word: this.get('word')
      };
      this.sendAction('search', params);
    }
  }
});
