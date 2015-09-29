import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateListing(listing) {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        details: this.get('details'),
        location: this.get('location'),
        category: this.get('category'),
        date_added: new Date(),

      };
      this.sendAction('updateListing', listing, params);
    }
  }
});
