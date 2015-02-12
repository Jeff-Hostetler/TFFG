import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.fetch('vendor', params.vendor_id);
  },
  afterModel: function(model){
    model.reload();
  }

});
