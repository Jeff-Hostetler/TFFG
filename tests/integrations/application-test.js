import startApp from '../helpers/start-app';
import Ember from "ember";
var App;


module('Integration - Application/sidebar', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});


test("Side bar has links to groups we are showing", function() {
  visit('/');
  equal(find('.sideBarLink').length, 4);
});

test("topBar has an image", function() {
  visit('/');
  equal(find('.topBar img').length, 1);
});
