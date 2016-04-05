import Ember from 'ember';

export function isNotSubcommittee(params/*, hash*/) {
  var committee = params[0];
  if(committee.subcommittee) {
    return false;
  } else {
    return true;
  }
}

export default Ember.Helper.helper(isNotSubcommittee);
