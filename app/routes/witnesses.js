import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let witnessRecord = this.store.createRecord('witness', {
      fname: "Daniel",
      lname: "Castro",
      email: "castrodd@gmail.com"
    });
    return [witnessRecord];
  }
});
