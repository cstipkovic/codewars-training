/**
 * @name sumDigits
 * @method
 * 
 * @param {number} n - number with one or more digits
 * 
 * @return {number}
 */
module.exports.sumDigits = n => {
    while (n.toString().length > 1) {
        let arrayDigits = n.toString().split('');
        
        n = arrayDigits.reduce((a, c) => {
            return parseInt(a) + parseInt(c);
        }, 0);
    }
    
    return n;
};
