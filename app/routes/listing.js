import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    updateListing(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
    }
  }
});
