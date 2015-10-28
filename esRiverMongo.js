Fairs = new Mongo.Collection('Fairs');

if (Meteor.isClient) {
  Template.hello.helpers({
    counter: function () {
      console.log("in helper: ");
      return Fairs.findOne({name: 'counter'}).number;
    }
  });

  Template.hello.events({
    'click button': function () {
      var fair = Fairs.findOne({name: 'counter'});
      var current = fair.number + 1;
      console.log("in event: " + fair._id);
      Fairs.update({_id: fair._id}, {$set: {number: current}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (! Fairs.findOne()) {
      Fairs.insert({name: 'counter', number: 3});
    }
  });
}
