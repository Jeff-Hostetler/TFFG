import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.fetch('shift', params.shift_id);
  },
  afterModel: function(model){
    model.reload();
  }

});
