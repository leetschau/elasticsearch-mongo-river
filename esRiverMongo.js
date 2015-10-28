Fairs = new Mongo.Collection('fairs');

if (Meteor.isClient) {
  Template.hello.helpers({
    counter: function () {
      return Fairs.findOne({name: 'counter'}).number;
    }
  });

  Template.hello.events({
    'click button': function () {
      var fair = Fairs.findOne({name: 'counter'});
      var current = fair.number + 1;
      Fairs.update({_id: fair._id}, {$set: {number: current}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (! Fairs.findOne()) {
      Fairs.insert({name: 'counter', number: 3});
    }
    console.log('ES:');
    console.log(ES);
  });
}
