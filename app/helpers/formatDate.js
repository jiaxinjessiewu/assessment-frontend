import Ember from 'ember';

export default Ember.Helper.helper(function(value){ 
    if (value[0].match(/^\d{4}-\d{2}-\d{2}$/)) {
        let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        const date = new Date(value[0]);
        return `${months[date.getMonth() + 1]} ${date.getFullYear()}`;
    } 
    return value;
});