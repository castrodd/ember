import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2016-07-04')
    });
    record1.set('location', 'Paris');

    let record2 = this.store.createRecord('sighting', {
      location: 'Philadelphia',
      sightedAt: new Date('2016-09-14')
    });
    let record3 = this.store.createRecord('sighting', {
      location: '',
      sightedAt: new Date('2016-02-01')
    });

    return [record1, record2, record3];
  }
});
