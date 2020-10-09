import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    indexPage : computed.equal('currentRouteName', 'products.index'),
    actions   : {
        select: function(button) {
          console.log(`${button} selected`)
        }
    }
  });
  