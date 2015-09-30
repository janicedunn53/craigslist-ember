import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,

  actions: {
    listingFormShow() {
      this.set('addNewListing', true)
    },
    addListing() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        details: this.get('details'),
        location: this.get('location'),
        category: this.get('category'),
        date_added: new Date(),
      };
      this.set('addNewListing', false),
      this.sendAction('addListing', params);
    }
  }
});
