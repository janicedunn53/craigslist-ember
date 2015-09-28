import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', {async:true}),
  name: DS.attr(),
  details: DS.attr(),
  location: DS.attr()
});
