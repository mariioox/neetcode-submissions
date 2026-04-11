class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for (let i=0; i<flowerbed.length; i++) {
            if (n <= 0) return true;

            if (flowerbed[i] === 0) {
                let leftEmpty = (i === 0) || (flowerbed[i - 1] === 0);
                let rightEmpty = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);

                if (leftEmpty && rightEmpty) {
                    flowerbed[i] = 1;
                    n--;
                }
            }
        }
        return n <= 0;
    }
}
