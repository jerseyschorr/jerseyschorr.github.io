    function f(c) {
        return c.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function dHeart(s) {
        var y;
        var p = 0;
        var m = ["&nbsp;", "\n"];
        var c = [
            2, 0, 2, 1,
            2, 0, 2, 1,
            2, 0, 2, 1,

            2, 1,
            2, 1,
            2, 1,
            2, 1,
            2, 1,

            2, 1,
            2, 1,
            2, 1,
            2, 1,
            2, 1,
            2, 1,
            2, 1,
            2, 1,
            2, 1,
            2, 1,
            2
        ];

        var x = [
            8, 9, 10, 1,
            14, 3, 14, 1,
            17, 1, 17, 1,

            37, 1,
            39, 1,
            39, 1,
            39, 1,

            37, 1,
            35, 1,
            33, 1,

            31, 1,
            27, 1,
            23, 1,
            19, 1,
            15, 1,
            11, 1,
            7, 1,

            3, 1,
            1
        ];
        var out = [];
        var z = -1;
        var l = s.length;
        for (var d = 0; d < c.length; d += 1) {
            y = x[d];
            while (y > 0) {
                if (c[d] === 2) {
                    out[++z] = (p < l) ? f(s[p++]) : '';
                } else {
                    out[++z] = m[c[d]];
                }
                y -= 1;
            }
        }
        document.getElementById("heart").innerHTML = out.join("");
    }
    function runHeart() {
        dHeart(dHeart.toString().replace(/\s+/g, '').replace(/var/g, 'var '));
    }
