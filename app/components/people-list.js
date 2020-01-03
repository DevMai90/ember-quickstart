import Component from '@ember/component';

export default Component.extend({
  actions: {
    showPerson(person) {
      alert(person);
    },
    talkToMe(person) {
      alert(`Yo, my name is ${person}`);
    }
  }
});
