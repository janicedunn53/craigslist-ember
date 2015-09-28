import Ember from 'ember';

export function formatDate(params) {
  var date = params[0];
  return moment(date).format('LLL');
  }

export default Ember.Helper.helper(formatDate);
