import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('employees', function(){
    this.route('new');
    this.resource('employee', {path: '/:employee_id'}, function(){
      this.route('edit');
    });
  });

  this.resource('vendors', function(){
    this.route('new');
    this.resource('vendor', {path: '/:vendor_id'}, function(){
      this.route('edit');
    });
  });

  this.resource('distributors', function(){
    this.route('new');
    this.resource('distributor', {path: '/:distributor_id'}, function(){
      this.route('edit');
    });
  });

  this.resource('schedule', function(){
    this.resource('shift', {path: '/:shift_id'}, function(){
      this.route('edit');
    });
  });


});

export default Router;
