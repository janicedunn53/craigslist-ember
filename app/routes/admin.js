import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save().then(function() {
        return category.save();
      });
      this.transitionTo('index');
    }
  }
});
