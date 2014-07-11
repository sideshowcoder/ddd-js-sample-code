Domain-driven design in JavaScript Sample Code
==============================================

Sample code for the Domain-driven design in JavaScript book. The code samples
and additional resources are organized by chapter and example.

Chapter 1
---------
- [Express
  App](https://github.com/sideshowcoder/ddd-js-sample-code/tree/master/chapter_1)
  from chapter 1.

Chapter 2
---------
No sample code in this chapter.

Chapter 3
---------
- [Underscore](https://github.com/jashkenas/underscore) Source code is available
  on Github.
- [Prisoner
  Transfer](https://github.com/sideshowcoder/ddd-js-sample-code/tree/master/chapter_3)
  prisoner transfer module, including the basic layout for the tests, and
  features runnable.

Chapter 4
---------
- Weapons: Example how aggregation of weapons could work, calling deep inside
  objects, which is most likely a bad idea. `node weapons/weapons.js`
- Composition and Inheritance: See the appropriate subfolder.
- Domain Objects: See chapter 3 prisoner transfer.
- My Mock: Example mock, built using a simple object, run via `node
  my_mock/my_mock.js`
- Simple Object: Battle Orc `node simple_objects/battle_orc.js` Orc `node
  simple_objects/orc.js`
- Sinon Example: Example usage `sinon` for mocking, run via `npm install` to
  install dependencies, and `npm test`.

Chapter 5
---------
- ExaggeratingOrc `exaggerating_orc.js`, shows working with private and public
  methods
- not a value object `not_value_objects.js`, show how objects can be modified
- Value object example based on coins, `coin.js`
- Using value objects in wallet `wallet.js`
- Events `event.js`
- Orcs repository `orcs.js`
- Alternative active record style getting orcs `orcs_ar.js`
- Sending letter via a postman `postman.js`

Chapter 6
---------
- sample notifier `npm install` to load the dependencies and `npm run notifier`
  to run the code is in `notifier.js`

Chapter 7
---------
- sample math `node math.js`
- using array functions to process `node transport_time.js`
- loggable example `node oo_orc.js`
- state in basic objects example `node thing.js`
- events `node events.js`
- jumping counter managing state `node counter.js`

Chapter 8
---------
- pjax-example: run `npm install` in the `chapter_8/pjax-example` folder and run
  `npm start` to try it out.
- ember-example: run `npm install` in the `chapter_8/ember-example` folder and run
  `npm start` to try it out.
- `deactivate_button.html` jquery example deativating a button inline, to try it
  simply open in a browser.
- car configuration example to work with constraints and logic `node
  car_configurator.js`
