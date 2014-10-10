Meteor.publish('posts', function(){
	return Posts.find({}, {sort : {createdOn : -1}});
});