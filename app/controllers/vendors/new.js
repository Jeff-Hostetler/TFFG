import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    newVendor: function() {
        var name = this.get('vendorName');
        var address = this.get('vendorAddress');
        if (!name) {
          return;
        }
        var that = this;
        var vendor = this.store.createRecord('vendor', {name: name, address: address});
        this.set('vendorName', '');
        this.set('vendorAddress', '');
        vendor.save().then(function(){
          that.transitionToRoute('vendors');
        });
      }
    }
});
