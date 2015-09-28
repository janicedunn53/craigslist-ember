import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addCategory() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('addCategory', params);
    }
  }
});
