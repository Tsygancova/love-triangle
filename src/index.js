/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let counter = 0;
        preferences.forEach((preference, i) => {
            (preferences[preferences[preference - 1] - 1] === i + 1) ? counter+=1 : null;
        });
            return Math.floor(counter/3);
};
