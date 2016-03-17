function f(c) {
    return c.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function dHeart(s) {
    let p = 0;
    const m = ['&nbsp;', '\n'];
    const c = [2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

    const x = [8, 9, 10, 1, 14, 3, 14, 1, 17, 1, 17, 1, 37, 1, 39, 1, 39, 1, 39, 1, 37, 1, 35, 1, 33, 1, 31, 1, 27, 1, 23, 1, 19, 1, 15, 1, 11, 1, 7, 1, 3, 1, 1];
    const out = [];
    let z = -1;
    const l = s.length;
    for (let d = 0; d < c.length; d = d + 1) {
        let y = x[d];
        while (y > 0) {
            if (c[d] === 2) {
                out[++z] = p < l ? f(s[p++]) : '';
            } else {
                out[++z] = m[c[d]];
            }
            y -= 1;
        }
    }
    document.getElementById('heart').innerHTML = out.join('');
}

function run() {
    dHeart(dHeart.toString().replace(/\s+/g, '').replace(/var/g, 'var '));
}
//# sourceMappingURL=heart.js.map
