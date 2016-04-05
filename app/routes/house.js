import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&per_page=50&apikey=817fa3b0cf4944cfb8d3729919c99c95&page=';
    return new Ember.RSVP.hash({
      page1: Ember.$.getJSON(url+'1').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page2: Ember.$.getJSON(url+'2').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page3: Ember.$.getJSON(url+'3').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page4: Ember.$.getJSON(url+'4').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page5: Ember.$.getJSON(url+'5').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page6: Ember.$.getJSON(url+'6').then(function(responseJSON) {
        return responseJSON.results;
      }),
    });
  },
  actions: {
    apiCall(page) {
      var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&per_page=50&page='+ page + '&apikey=817fa3b0cf4944cfb8d3729919c99c95';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.result;
      });
    }
  }
});
