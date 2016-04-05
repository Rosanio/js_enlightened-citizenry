import Ember from 'ember';

export default Ember.Component.extend({
  showingBillDetails: false,
  actions: {
    showBillDetails() {
      if(!this.showingBillDetails) {
        this.set('showingBillDetails', true);
      } else {
        this.set('showingBillDetails', false);
      }
    }
  }
});
