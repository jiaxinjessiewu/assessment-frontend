import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    indexPage: computed('currentRouteName', function() {
        return this.get('currentRouteName') == 'products.index';
    }),
    actions: {
        select: function() {
          console.log("Selected")
        }
    }
  });
  