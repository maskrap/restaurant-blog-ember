import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        name: this.get('name'),
        comment: this.get('comment'),
        article: this.get('article')
      };
      // console.log(params);
      this.sendAction('saveComment', params);
    },
  }
});
