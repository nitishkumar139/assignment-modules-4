(function () {

var names = ["ravi", "sham", "mohan", "ram", "joln", "akash", "munna", "lalu", "john", "jam"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {

    byeSpeaker(names[i]);

  }
  else {

    helloSpeaker(names[i]);

  }
}

})();



