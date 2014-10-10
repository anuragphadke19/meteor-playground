Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  yieldTemplate: {
    header: {
       to: 'header'
    },
    footer: {
       to: 'footer'
    }
  },
  waitOn: function(){
    return Meteor.subscribe('posts');
  }
});

Router.map(function(){
  this.route('home', {path: '/'});
  this.route('about');
  this.route('contact');
});

Router.onBeforeAction('loading');