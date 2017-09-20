import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        location: 'Asilomar',
        sightedAt: new Date('2016-07-03')
      },
      {
        id: 2,
        location: 'Asilomar',
        sightedAt: new Date('2016-07-04')
      },
      {
        id: 3,
        location: 'Marosila',
        sightedAt: new Date('2016-07-05')
      },
      {
        id: 4,
        location: 'Marosila',
        sightedAt: new Date('2016-07-06')
      },
      {
        id: 5,
        location: 'Rosamila',
        sightedAt: new Date('2016-07-07')
      }
    ];
  }
});
