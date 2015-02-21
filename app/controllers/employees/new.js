import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    newEmployee: function() {
        var firstName = this.get('firstName');
        var lastName = this.get('lastName');
        var email = this.get('email');
        var phoneNumber = this.get('phoneNumber');
        var position = this.get('position');
        if (!firstName) {
          return;
        }
        var that = this;
        var employee = this.store.createRecord('employee', {firstName: firstName,
                                                            lastName: lastName,
                                                            email: email,
                                                            phoneNumber: phoneNumber,
                                                            position: position});

        employee.save().then(function(){
          that.transitionToRoute('employees');
        });
      }

    }

});
