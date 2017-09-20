import DS from 'ember-data';

export default DS.Model.extend({
  fname: DS.attr('string'),
  lname: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('fname', 'lname', function(){
    return this.get('fname') + ' ' + this.get('lname');
  })
});
