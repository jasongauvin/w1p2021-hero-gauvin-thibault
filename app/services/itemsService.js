/**
 *
 * Class pour link les items entre l'id et le .json concerné
 * @class items 
 */
class items {
  constructor() {
    this.item = JSON.parse(localStorage.getItem('items')) || { 
      "sword": 0, 
      "sick" : 0, 
      "shield" : 0, 
      "money" : 0,
      "thief": 0,
      "rune": 0
      };
      localStorage.setItem('items', JSON.stringify(this.item));

  }
  update(item) { // ecrire
    this.item.sword += item.sword;
    this.item.sick += item.sick;
    this.item.shield += item.shield;
    this.item.money += item.money;
    this.item.thief += item.thief;
    this.item.rune += item.rune;
    localStorage.setItem('items', JSON.stringify(this.item));
  }

  getItems() {
    return JSON.parse(localStorage.getItem('items'));

  }
}

module.exports = new items();
