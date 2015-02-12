import DS from 'ember-data';

export default DS.Model.extend({
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  employee: DS.belongsTo('employee')
});
