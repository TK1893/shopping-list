document.cookie = 'name=Buffy; expires=Fri, 15 Dec 2023 23:00:00 GMT';
let myCookies = document.cookie;

Cookies.set('name', 'Buffy', { expires: 365 });
Cookies.get('name'); //returns Sabrina

Cookies.remove('name');

const shoppingList = {
  title: 'Birthday Shopping List',
  items: 'white chocolate, vinegar, avocado, eggplant',
};

("{'title':'Birthday Shopping List','items':'white chocolate, vinegar, avocado, eggplant'}");
