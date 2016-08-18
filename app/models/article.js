import DS from 'ember-data';

export default DS.Model.extend({
  titleListView: DS.attr(),
  titleDetailView: DS.attr(),
  category: DS.attr(),
  timestamp: DS.attr(),
  author: DS.attr(),
  bodyCopy: DS.attr(),
  imageURL: DS.attr(),
  listImageURL: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
