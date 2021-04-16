const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']


function findMatching (collection, name) { 
  return collection.filter(function (user) {
    return user.toLowerCase() === name.toLowerCase()});
}



function fuzzyMatch (collection, string) {
  return collection.filter(function (startsWith) {
    return startsWith[0] === string[0]});
}

function matchName (collection, string) {
  return collection.filter(function(element) {
    return element.name === string});
  }
