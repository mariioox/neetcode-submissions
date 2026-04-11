class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const uniqueEmails = new Set();

        for (let email of emails) {
            let [local, domain] = email.split('@');
            local = local.split('+')[0];
            local = local.split('.').join('');

            let cleanedEmail = local + '@' + domain;

            uniqueEmails.add(cleanedEmail)
        }
        return uniqueEmails.size;
    }
}
