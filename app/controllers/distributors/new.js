import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    newVendor: function() {
        var name = this.get('distributorName');
        var address = this.get('distributorAddress');
        if (!name) {
          return;
        }
        var that = this;
        var distributor = this.store.createRecord('distributor', {name: name, address: address});
        this.set('distributorName', '');
        this.set('distributorAddress', '');
        distributor.save().then(function(){
          that.transitionToRoute('distributors');
        });
      }

    }

});
