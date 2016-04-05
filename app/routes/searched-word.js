import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var urlWord = 'http://capitolwords.org/api/1/phrases/legislator.json?page=0&per_page=20&sort=count&apikey=817fa3b0cf4944cfb8d3729919c99c95&phrase=' + params.word;
    var urlLegislators = 'http://congress.api.sunlightfoundation.com/legislators?apikey=817fa3b0cf4944cfb8d3729919c99c95&per_page=50&page='
    return new Ember.RSVP.hash({
      word: Ember.$.getJSON(urlWord).then(function(responseJSON) {
        return responseJSON.results;
      }),
      page1: Ember.$.getJSON(urlLegislators+'1').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page2: Ember.$.getJSON(urlLegislators+'2').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page3: Ember.$.getJSON(urlLegislators+'3').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page4: Ember.$.getJSON(urlLegislators+'4').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page5: Ember.$.getJSON(urlLegislators+'5').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page6: Ember.$.getJSON(urlLegislators+'6').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page7: Ember.$.getJSON(urlLegislators+'7').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page8: Ember.$.getJSON(urlLegislators+'8').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page9: Ember.$.getJSON(urlLegislators+'9').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page10: Ember.$.getJSON(urlLegislators+'10').then(function(responseJSON) {
        return responseJSON.results;
      }),
      page11: Ember.$.getJSON(urlLegislators+'11').then(function(responseJSON) {
        return responseJSON.results;
      })
    });
  }
});
