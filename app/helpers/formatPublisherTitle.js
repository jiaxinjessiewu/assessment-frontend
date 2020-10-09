import Ember from 'ember';

export default Ember.Helper.helper(function(key){ 
    return key[0].split(/(?=[A-Z])/).join(' ');
});