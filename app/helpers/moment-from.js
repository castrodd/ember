import Ember from 'ember';

export function momentFrom(params) {
  var time = window.moment(...params);
  var formatted = time.format("dddd, MMMM Do YYYY");
  return new Ember.String.htmlSafe(
    '<span class="text-primary">' + formatted + '</span>'
  );
}

export default Ember.Helper.helper(momentFrom);
