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
    autoform: {
      rows: 10
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
    }
  }
}));