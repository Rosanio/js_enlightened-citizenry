import Ember from 'ember';

export function isLegislator(params/*, hash*/) {
  var legislatorId = params[0];
  var legislators = params[1];
  for(var i = 0; i < legislators.length; i++) {
    if(legislators[i].bioguide_id === legislatorId) {
      return legislators[i].first_name + " " + legislators[i].last_name;
    }
  }
  return "unknown";
}

export default Ember.Helper.helper(isLegislator);
