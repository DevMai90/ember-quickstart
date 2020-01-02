import Route from '@ember/routing/route';

export default Route.extend({
  // Models allow us to use data in our template files.
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hoffman'];
  }
});
