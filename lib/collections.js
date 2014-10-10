Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  story: {
    type: String,
    label: "Story",
    max: 80,
    autoform: {
      rows: 3
    }
  },
  author: {
    type: String,
    label: "Author"
  },
  createdOn: {
    type: Date,
    label: "Posted on",
    autoform: {
      omit: true
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    },
  }
}));

Posts.allow({
  insert: function(){
    return true;
  }
})