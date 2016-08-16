import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },
    update(article) {
      var params = {
        titleListView: this.get('titleListView')? this.get('titleListView') : "",
        titleDetailView: this.get('titleDetailView')? this.get('titleDetailView') : "",
        category: this.get('category')? this.get('category') : "",
        timestamp: this.get('timestamp')? this.get('timestamp') : "",
        author: this.get('author')? this.get('author') : "",
        bodyCopy: this.get('bodyCopy')? this.get('bodyCopy') : "",
        imageURL: this.get('imageURL')? this.get('imageURL') : "",
      };
      this.set('showUpdateForm', false);
      this.sendAction('update', article, params);
    }
  }
});
