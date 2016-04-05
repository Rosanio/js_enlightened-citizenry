import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://capitolwords.org/api/1/phrases.json?entity_type=state&entity_value=' + params.state + '&page=0&sort=count%20desc&apikey=817fa3b0cf4944cfb8d3729919c99c95';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON;
    });
  }
});
