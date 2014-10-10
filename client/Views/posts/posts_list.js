Template.postsList.helpers({
	postsAvailable: function(){
		return Posts.find().count() === 0 ? true : false;
	},
	posts: function(){
		return Posts.find();
	}
});