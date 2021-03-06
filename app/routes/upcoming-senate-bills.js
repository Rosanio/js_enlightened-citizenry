import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?chamber=senate&per_page=50&apikey=817fa3b0cf4944cfb8d3729919c99c95';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
