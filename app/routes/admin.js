import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    addCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save().then(function() {
        return category.save();
      });
      this.transitionTo('admin');
    },
    destroyCategory(category) {
      category.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
