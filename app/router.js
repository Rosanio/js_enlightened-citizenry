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
  this.route('upcoming-house-bills');
  this.route('recent-senate-bills');
  this.route('upcoming-senate-bills');
  this.route('sponsor', {path: '/sponsor/:sponsor_id'});
  this.route('word-stats');
  this.route('searched-word', {path: '/results/:word'});
});

export default Router;
