import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      addListing() {
        var params = {
          title: this.get('title'),
          user: this.get('user'),
          details: this.get('details'),
          location: this.get('location'),
          category: this.get('category')
        };
        this.sendAction('addListing', params);
      }
    }
});
