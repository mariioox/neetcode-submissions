class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let ast of asteroids) {
            let destroyed = false;

            while (stack.length>0 && stack[stack.length -1]>0 && ast<0) {
                const top = stack[stack.length-1];

                if (Math.abs(top) < Math.abs(ast)) {
                    stack.pop();
                    continue;
                } else if (Math.abs(top) === Math.abs(ast)){
                    stack.pop();
                    destroyed = true;
                    break;
                } else {
                    destroyed = true;
                    break
                }
            }
            if (!destroyed){
                stack.push(ast);
            }
        }
        return stack;
    }
}
