import checkMac from './mac';
import checkVisa from './visa';
import checkIP from './ip';

const checker = {
  rules : { 'visa': checkVisa, 'ip' : checkIP, 'mac' : checkMac },
  validate: function(string, pattern = '') {
    let rule = checker.rules[pattern];
    let value = rule(string);
    return value
  }
} 


export default checker;