import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    save() {
      var params = {
        titleListView: this.get('titleListView'),
        titleDetailView: this.get('titleDetailView'),
        category: this.get('category'),
        timestamp: this.get('timestamp'),
        author: this.get('author'),
        bodyCopy: this.get('bodyCopy'),
        imageURL: this.get('imageURL'),
      };
      this.set('addNewArticle', false);
      this.sendAction('save', params);
    }
  }
});
