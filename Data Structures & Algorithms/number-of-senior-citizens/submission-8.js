class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let output = 0
        for (let i=0; i<details.length; i++) {
            let ageString = details[i].substring(11,13);
            
            let age = parseInt(ageString);
            if (age>60) {
                output++;
            }
        }
        return output;
    }
}
