import Ember from 'ember';

export function concatCommitteeArray(params/*, hash*/) {
  var concattedArray = [];
  for(var i = 0; i < params.length; i++) {
    console.log(params[i])
    concattedArray = concattedArray.concat(params[i]);
    console.log(concattedArray);
  }
  return concattedArray;
}

export default Ember.Helper.helper(concatCommitteeArray);
