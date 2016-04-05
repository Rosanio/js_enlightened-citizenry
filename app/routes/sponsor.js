import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var legislatorID = params.sponsor_id;
    var url = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + legislatorID + '&apikey=817fa3b0cf4944cfb8d3729919c99c95';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
