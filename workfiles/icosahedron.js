var icosahedronGeometry = {
  vertexPositions: [0, 0, -1.902, 0, 0, 1.902, -1.701, 0, -0.8507, 1.701, 0, 0.8507, 1.376, -1.000, -0.8507, 1.376, 1.000, -0.8507, -1.376, -1.000, 0.8507, -1.376, 1.000, 0.8507, -0.5257, -1.618, -0.8507, -0.5257, 1.618, -0.8507, 0.5257, -1.618, 0.8507, 0.5257, 1.618, 0.8507],
  indices: [1, 11, 7, 1, 7, 6, 1, 6, 10, 1, 10, 3, 1, 3, 11, 4, 8, 0, 5, 4, 0, 9, 5, 0, 2, 9, 0, 8, 2, 0, 11, 9, 7, 7, 2, 6, 6, 8, 10, 10, 4, 3, 3, 5, 11, 4, 10, 8, 5, 3, 4, 9, 11, 5, 2, 7, 9, 8, 6, 2],
  vertexTextureCoords: (function () {
    var vtc = [];
    var n = 3;//indices.length;//Math.sqrt(indices.length)
    var m = 4;//indices.length;//Math.sqrt(indices.length)
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < m; j++) {
        vtc.push(i / n);
        vtc.push(j / m);
      }
    }
    return vtc;
  }()),
  vertexNormals: [],
  colors: (function () {
    var c = [];
    for (var i = 0; i < 20; i++) {
      c.push(1.0);
      c.push(1.0);
      c.push(0.0);
      c.push(1.0);
    }
    return c;
  }())
};