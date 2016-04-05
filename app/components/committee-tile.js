import Ember from 'ember';

export default Ember.Component.extend({
  showingDetails: false,
  actions: {
    showDetails() {
      if(!this.showingDetails){
        this.set('showingDetails', true);
      } else {
        this.set('showingDetails',false);
      }
    }
  }
});
