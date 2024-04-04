/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let sObj = {};
    let tObj = {};

    for (let i = 0; i < s.length; i++) {
        if (!sObj.hasOwnProperty(s[i])) sObj[s[i]] = t[i];
        if (!tObj.hasOwnProperty(t[i])) tObj[t[i]] = s[i];
        
        console.log(t[i], sObj[s[i]])
        if (t[i] !== sObj[s[i]] || s[i] !== tObj[t[i]]) return false;
    }

    return true;
};
