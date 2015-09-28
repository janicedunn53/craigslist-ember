import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', {async:true}),
  user: DS.attr(),
  title: DS.attr(),
  details: DS.attr(),
  location: DS.attr(),
  date_added: DS.attr()
});
