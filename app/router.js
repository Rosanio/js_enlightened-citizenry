import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('house');
  this.route('senate');
  this.route('recentHouseBills');
});

export default Router;
