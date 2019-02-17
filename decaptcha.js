dict = [[[0,3],[0,4],[0,5],[0,6],[1,2],[1,7],[2,1],[2,8],[3,0],[3,1],[3,8],[4,0],[4,8],[4,9],[5,0],[5,9],[6,0],[6,9],[7,0],[7,9],[8,0],[8,9],[9,0],[9,9],[10,0],[10,9],[11,1],[11,8],[11,9],[12,1],[12,8],[13,2],[13,7],[13,8],[14,3],[14,4],[14,5],[14,6]],[[0,3],[1,1],[1,2],[1,3],[2,2],[2,3],[3,2],[3,3],[4,2],[4,3],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,1],[13,2],[14,0],[14,1],[14,2],[14,3],[14,4],[0,1],[1,0],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,0],[13,3]],[[0,4],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[2,1],[2,7],[3,7],[3,8],[4,7],[5,7],[6,6],[6,7],[7,5],[7,6],[8,4],[8,5],[9,3],[10,1],[10,2],[11,1],[12,1],[13,0],[13,1],[14,0],[14,1],[14,2],[14,3],[14,4],[14,5],[14,6],[15,1],[15,2],[15,3],[15,4],[15,5],[15,6],[15,7],[0,2],[0,3],[0,5],[0,6],[1,0],[1,1],[2,0],[5,6],[6,5],[7,3],[7,4],[8,2],[8,3],[9,1],[10,0],[11,0],[12,0],[14,7]],[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,0],[1,1],[1,6],[1,7],[2,7],[3,7],[4,7],[5,5],[5,6],[6,3],[6,4],[6,5],[6,6],[7,6],[7,7],[8,7],[8,8],[9,8],[10,8],[11,8],[12,0],[12,7],[12,8],[13,1],[13,2],[13,6],[13,7],[14,2],[14,3],[14,4],[14,5],[1,2],[1,3],[1,5],[2,0],[5,7],[7,3],[7,4],[7,5],[10,9],[11,9],[13,8],[14,6],[14,7]],[[0,6],[1,5],[1,6],[2,4],[2,6],[3,6],[4,3],[4,6],[5,6],[6,2],[6,6],[7,1],[7,2],[7,6],[8,1],[8,6],[9,0],[9,1],[9,6],[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[11,6],[11,7],[12,6],[13,6],[14,6],[14,7]],[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[1,1],[1,2],[1,3],[2,1],[3,1],[4,1],[4,4],[4,5],[4,6],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,7],[5,8],[6,0],[6,1],[6,2],[6,9],[7,0],[7,1],[7,9],[8,9],[9,9],[10,9],[11,9],[12,8],[12,9],[13,1],[13,7],[13,8],[14,1],[14,2],[14,3],[14,4],[14,5],[14,6],[14,7]],[[0,5],[0,6],[1,4],[1,5],[2,3],[2,4],[3,2],[3,3],[4,2],[5,1],[6,1],[6,4],[6,5],[6,6],[6,7],[7,0],[7,1],[7,2],[7,7],[7,8],[8,0],[8,9],[9,0],[9,9],[10,0],[10,9],[11,0],[11,1],[11,9],[12,1],[12,8],[12,9],[13,1],[13,2],[13,7],[13,8],[14,2],[14,3],[14,4],[14,5],[14,6],[14,7]],[[0,6],[0,7],[0,8],[0,9],[0,10],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,9],[1,10],[2,9],[3,8],[4,8],[5,7],[6,7],[7,7],[8,6],[8,7],[9,6],[10,6],[11,6],[12,5],[12,6],[13,5],[14,5],[15,5],[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,8],[2,8],[3,7],[4,6],[5,5],[5,6],[6,5],[7,4],[7,5],[8,4],[9,3],[9,4],[10,3],[11,2],[11,3],[12,2],[13,1],[13,2],[14,1]],[[0,3],[0,4],[0,5],[0,6],[1,1],[1,2],[1,3],[1,7],[2,0],[2,1],[2,7],[2,8],[3,0],[3,8],[4,0],[4,7],[4,8],[5,0],[5,6],[5,7],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[7,2],[7,3],[7,4],[7,6],[7,7],[7,8],[8,2],[8,3],[8,8],[8,9],[9,1],[9,2],[9,9],[10,1],[10,9],[11,1],[11,9],[12,2],[12,9],[13,2],[13,3],[13,8],[13,9],[14,3],[14,4],[14,5],[14,6],[14,7]],[[0,4],[0,5],[0,6],[1,2],[1,3],[1,4],[1,6],[1,7],[1,8],[2,1],[2,8],[3,1],[3,8],[3,9],[4,0],[4,9],[5,0],[5,9],[6,0],[6,9],[7,1],[7,9],[8,1],[8,2],[8,8],[8,9],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[10,8],[11,8],[12,7],[13,6],[13,7],[14,5],[15,2],[15,3],[15,4]]];

function getPixelMatrix(img) {
  let cvs = document.createElement('canvas');
  let ctx = cvs.getContext('2d'); ctx.drawImage(img, 0, 0);
  let w = img.width;
  let h = img.height;
  let rgba_m = ctx.getImageData(0, 0, w, h).data;
  let res = [];
  for (let i = 0; i < w * h; ++i) {
    let r, g, b;
    [r, g, b] = rgba_m.slice(4*i, 4*i+3);
    res.push(r<<16 | g<<8 | b);
  }
  return [res, h, w];
}

function findDigits(img_e) {
  let m, h, w; [m, h, w] = getPixelMatrix(img_e);
  let c_cnt = {}; m.forEach(v => c_cnt[v] = (c_cnt[v] || 0) + 1);
  let cs = Object.keys(c_cnt)
    .map(v => [v, c_cnt[v]])
    .filter(kv => 19 < kv[1] && kv[1] < 99)
    .map(kv => kv[0]);
  let pss = cs.map(v =>
    m.reduce((a, e, i) => {
      if (e == v) a.push(i);
      return a;
    }, [])
  );
  let xss = pss.map(v => v.map(u => ~~(u/w)));
  let yss = pss.map(v => v.map(u => u%w));
  let ord = yss.map((v, i) => [Math.min(...v), i])
    .sort((a, b) => a[0] - b[0])
    .map(v => v[1]);
  let ans = "";
  let last_y = -3;
  for (let _ = 0; _ < cs.length; ++_) {
    let xs = xss[ord[_]];
    let ys = yss[ord[_]];
    let xs_min = Math.min(...xs);
    if (Math.max(...xs) - xs_min < 7) continue; // this is a snowflake
    let ys_min = Math.min(...ys);
    if (ys_min - last_y < 3) continue; // overlap
    last_y = ys_min;
    let ps = xs.map((x, i) => [x - xs_min, ys[i] - ys_min]);
    let d = dict.map((qs, i) =>
      [ps.map(p =>
        qs.map(q => (p[0]-q[0])**2 + (p[1]-q[1])**2)
        .reduce((a, v) => v < a ? v : a)
      ).reduce((a, v) => a + v), i]
    ).reduce((a, v) => v[0] < a[0] ? v : a)[1];
    ans += String(d);
  }
  return ans;
}

try { // login page
  let img_e = Array.from(document.querySelectorAll('img')).filter(u => u.src.match(/auth_img/))[0];
  let ans = findDigits(img_e);
  document.querySelector("[name=passwd2]").value = ans;
} catch(err) {}
