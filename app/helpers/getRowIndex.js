import Ember from 'ember';

export default Ember.Helper.helper(function(index){ 
    return parseInt(index) + 1;
});