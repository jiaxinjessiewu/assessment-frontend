import Component from '@ember/component';

export default Component.extend({
  actions : {
    select: function(button) {
      console.log(`${button} selected`)
    }
  }
});