import DS from 'ember-data';

export default DS.Model.extend({
  listings: DS.hasMany('listing', {async:true}),
  name: DS.attr()
});
