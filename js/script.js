var addingItem = document.querySelector('article > div > button');
var Unread = document.querySelector('nav > ul > a:nth-child(3)');

var letsadd = function(){
  addingItem.classList.toggle('adding');
  Unread.classList.toggle('unread');
};

addingItem.addEventListener('click', letsadd);
