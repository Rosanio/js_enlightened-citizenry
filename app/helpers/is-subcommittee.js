import Ember from 'ember';

export function isSubcommittee(params/*, hash*/) {
  var subcommittee = params[0];
  var committee = params[1];
  if(subcommittee.parent_committee_id === committee.committee_id) {
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(isSubcommittee);
