Meteor.methods({
   insertPost: function(doc){
       check(doc, Posts);
       console.log("I am being called "+doc.story);
   } 
});