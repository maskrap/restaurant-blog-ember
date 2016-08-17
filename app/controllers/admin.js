import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category'],
  category: "Entertainment",

  filteredArticles: Ember.computed('category', 'model', function() {
    var category = this.get('category');
    var articles = this.get('model');

    if (category) {
      return articles.filterBy('category', "Books");
    } else {
      return articles;
    }
  })
});
