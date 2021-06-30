function mpld3_load_lib(url, callback) {
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function() {
    console.warn("failed to load library " + url);
  };
  document.getElementsByTagName("head")[0].appendChild(s);
}

if (typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded) {
  // already loaded: just create the figure
  ! function(mpld3) {

    mpld3.draw_figure("PIE1", {
      "width": 432.0,
      "height": 288.0,
      "axes": [{
        "bbox": [0.26083333333333336, 0.125, 0.5033333333333333, 0.755],
        "xlim": [-1.25, 1.25],
        "ylim": [-1.25, 1.25],
        "xdomain": [-1.25, 1.25],
        "ydomain": [-1.25, 1.25],
        "xscale": "linear",
        "yscale": "linear",
        "axes": [{
          "position": "bottom",
          "nticks": 0,
          "tickvalues": [],
          "tickformat_formatter": "",
          "tickformat": "",
          "scale": "linear",
          "fontsize": null,
          "grid": {
            "gridOn": false
          },
          "visible": true
        }, {
          "position": "left",
          "nticks": 0,
          "tickvalues": [],
          "tickformat_formatter": "",
          "tickformat": "",
          "scale": "linear",
          "fontsize": null,
          "grid": {
            "gridOn": false
          },
          "visible": true
        }],
        "axesbg": "#FFFFFF",
        "axesbgalpha": null,
        "zoomable": true,
        "id": "el16802967768279120",
        "lines": [],
        "paths": [{
          "data": "data01",
          "xindex": 0,
          "yindex": 1,
          "coordinates": "data",
          "pathcodes": ["M", "C", "C", "L", "L", "Z"],
          "id": "el16802967767160048",
          "dasharray": "none",
          "alpha": 1,
          "facecolor": "#FF0000",
          "edgecolor": "none",
          "edgewidth": 1.0,
          "zorder": 1
        }, {
          "data": "data02",
          "xindex": 0,
          "yindex": 1,
          "coordinates": "data",
          "pathcodes": ["M", "C", "C", "L", "L", "Z"],
          "id": "el16802967767160768",
          "dasharray": "none",
          "alpha": 1,
          "facecolor": "#008000",
          "edgecolor": "none",
          "edgewidth": 1.0,
          "zorder": 1
        }, {
          "data": "data03",
          "xindex": 0,
          "yindex": 1,
          "coordinates": "data",
          "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"],
          "id": "el16802967788840224",
          "dasharray": "none",
          "alpha": 1,
          "facecolor": "#0000FF",
          "edgecolor": "none",
          "edgewidth": 1.0,
          "zorder": 1
        }, {
          "data": "data04",
          "xindex": 0,
          "yindex": 1,
          "coordinates": "data",
          "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"],
          "id": "el16802967788842240",
          "dasharray": "none",
          "alpha": 1,
          "facecolor": "#808080",
          "edgecolor": "none",
          "edgewidth": 1.0,
          "zorder": 1
        }],
        "markers": [],
        "texts": [{
          "text": "A",
          "position": [1.0461621663333946, 0.3399186987098808],
          "coordinates": "data",
          "h_anchor": "start",
          "v_baseline": "central",
          "rotation": -0.0,
          "fontsize": 10.0,
          "color": "#000000",
          "alpha": 1,
          "zorder": 3,
          "id": "el16802967767161104"
        }, {
          "text": "B",
          "position": [0.33991867422268784, 1.0461621742897658],
          "coordinates": "data",
          "h_anchor": "start",
          "v_baseline": "central",
          "rotation": -0.0,
          "fontsize": 10.0,
          "color": "#000000",
          "alpha": 1,
          "zorder": 3,
          "id": "el16802967788839168"
        }, {
          "text": "C",
          "position": [-1.0461621902025062, 0.3399186252483017],
          "coordinates": "data",
          "h_anchor": "end",
          "v_baseline": "central",
          "rotation": -0.0,
          "fontsize": 10.0,
          "color": "#000000",
          "alpha": 1,
          "zorder": 3,
          "id": "el16802967788841280"
        }, {
          "text": "D",
          "position": [0.3399188211458418, -1.0461621265515308],
          "coordinates": "data",
          "h_anchor": "start",
          "v_baseline": "central",
          "rotation": -0.0,
          "fontsize": 10.0,
          "color": "#000000",
          "alpha": 1,
          "zorder": 3,
          "id": "el16802967788842672"
        }],
        "collections": [],
        "images": [],
        "sharex": [],
        "sharey": []
      }],
      "data": {
        "data01": [
          [1.0, 0.0],
          [1.0, 0.10493460732676817],
          [0.9834830922777654, 0.20921825689596807],
          [0.9510565148485406, 0.3090169988271643],
          [0.9186299374193158, 0.4088157407583606],
          [0.8706960043083146, 0.5028913798191001],
          [0.8090169888717047, 0.5877852598670369],
          [0.0, 0.0],
          [1.0, 0.0]
        ],
        "data02": [
          [0.8090169888717047, 0.5877852598670369],
          [0.6849082154224034, 0.7586063284512119],
          [0.5098291889431084, 0.8858086831934657],
          [0.30901697656607985, 0.9510565220816052],
          [0.10820476418905137, 1.0163043609697446],
          [-0.10820481176569208, 1.016304355904313],
          [-0.3090170210882486, 0.9510565076154754],
          [0.0, 0.0],
          [0.8090169888717047, 0.5877852598670369]
        ],
        "data03": [
          [-0.3090170210882486, 0.9510565076154754],
          [-0.45909632312826376, 0.9022927817253206],
          [-0.5955234474007856, 0.8186901254194974],
          [-0.7071068142886041, 0.7071067480844895],
          [-0.8186901811764227, 0.5955233707494816],
          [-0.9022928247090165, 0.45909623864951465],
          [-0.9510565365477328, 0.3090169320439106],
          [-0.9998202483864491, 0.15893762543830656],
          [-1.0123741243463642, -0.0005746454910575127],
          [-0.9876883274133277, -0.156434548266881],
          [-0.9630025304802912, -0.3122944510427045],
          [-0.9017710575025248, -0.4601202644029998],
          [-0.8090169338392734, -0.5877853356126714],
          [0.0, 0.0],
          [-0.3090170210882486, 0.9510565076154754]
        ],
        "data04": [
          [-0.8090169338392734, -0.5877853356126714],
          [-0.68490814439655, -0.7586063925769437],
          [-0.5098291060077115, -0.8858087309271157],
          [-0.3090168875217403, -0.9510565510138586],
          [-0.10820466903576909, -1.0163043711006015],
          [0.10820490691897222, -1.016304345773443],
          [0.30901711013258343, -0.9510564786832099],
          [0.5098293133461946, -0.8858086115929767],
          [0.6849083219611722, -0.7586062322626019],
          [0.8090170714203382, -0.5877851462485756],
          [0.9331258208795041, -0.4169640602345493],
          [1.0000000296534268, -0.21114631375535517],
          [0.9999999999999901, 1.4044013572010664e-07],
          [0.0, 0.0],
          [-0.8090169338392734, -0.5877853356126714]
        ]
      },
      "id": "el16802967768280656",
      "plugins": [{
        "type": "reset"
      }, {
        "type": "zoom",
        "button": true,
        "enabled": false
      }, {
        "type": "boxzoom",
        "button": true,
        "enabled": false
      }]
    });
  }(mpld3);
} else if (typeof define === "function" && define.amd) {
  // require.js is available: use it to load d3/mpld3
  require.config({
    paths: {
      d3: "https://d3js.org/d3.v5"
    }
  });
  require(["d3"], function(d3) {
    window.d3 = d3;
    mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.2.js", function() {

      mpld3.draw_figure("PIE1", {
        "width": 432.0,
        "height": 288.0,
        "axes": [{
          "bbox": [0.26083333333333336, 0.125, 0.5033333333333333, 0.755],
          "xlim": [-1.25, 1.25],
          "ylim": [-1.25, 1.25],
          "xdomain": [-1.25, 1.25],
          "ydomain": [-1.25, 1.25],
          "xscale": "linear",
          "yscale": "linear",
          "axes": [{
            "position": "bottom",
            "nticks": 0,
            "tickvalues": [],
            "tickformat_formatter": "",
            "tickformat": "",
            "scale": "linear",
            "fontsize": null,
            "grid": {
              "gridOn": false
            },
            "visible": true
          }, {
            "position": "left",
            "nticks": 0,
            "tickvalues": [],
            "tickformat_formatter": "",
            "tickformat": "",
            "scale": "linear",
            "fontsize": null,
            "grid": {
              "gridOn": false
            },
            "visible": true
          }],
          "axesbg": "#FFFFFF",
          "axesbgalpha": null,
          "zoomable": true,
          "id": "el16802967768279120",
          "lines": [],
          "paths": [{
            "data": "data01",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "L", "L", "Z"],
            "id": "el16802967767160048",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#FF0000",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }, {
            "data": "data02",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "L", "L", "Z"],
            "id": "el16802967767160768",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#008000",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }, {
            "data": "data03",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"],
            "id": "el16802967788840224",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#0000FF",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }, {
            "data": "data04",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"],
            "id": "el16802967788842240",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#808080",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }],
          "markers": [],
          "texts": [{
            "text": "A",
            "position": [1.0461621663333946, 0.3399186987098808],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967767161104"
          }, {
            "text": "B",
            "position": [0.33991867422268784, 1.0461621742897658],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967788839168"
          }, {
            "text": "C",
            "position": [-1.0461621902025062, 0.3399186252483017],
            "coordinates": "data",
            "h_anchor": "end",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967788841280"
          }, {
            "text": "D",
            "position": [0.3399188211458418, -1.0461621265515308],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967788842672"
          }],
          "collections": [],
          "images": [],
          "sharex": [],
          "sharey": []
        }],
        "data": {
          "data01": [
            [1.0, 0.0],
            [1.0, 0.10493460732676817],
            [0.9834830922777654, 0.20921825689596807],
            [0.9510565148485406, 0.3090169988271643],
            [0.9186299374193158, 0.4088157407583606],
            [0.8706960043083146, 0.5028913798191001],
            [0.8090169888717047, 0.5877852598670369],
            [0.0, 0.0],
            [1.0, 0.0]
          ],
          "data02": [
            [0.8090169888717047, 0.5877852598670369],
            [0.6849082154224034, 0.7586063284512119],
            [0.5098291889431084, 0.8858086831934657],
            [0.30901697656607985, 0.9510565220816052],
            [0.10820476418905137, 1.0163043609697446],
            [-0.10820481176569208, 1.016304355904313],
            [-0.3090170210882486, 0.9510565076154754],
            [0.0, 0.0],
            [0.8090169888717047, 0.5877852598670369]
          ],
          "data03": [
            [-0.3090170210882486, 0.9510565076154754],
            [-0.45909632312826376, 0.9022927817253206],
            [-0.5955234474007856, 0.8186901254194974],
            [-0.7071068142886041, 0.7071067480844895],
            [-0.8186901811764227, 0.5955233707494816],
            [-0.9022928247090165, 0.45909623864951465],
            [-0.9510565365477328, 0.3090169320439106],
            [-0.9998202483864491, 0.15893762543830656],
            [-1.0123741243463642, -0.0005746454910575127],
            [-0.9876883274133277, -0.156434548266881],
            [-0.9630025304802912, -0.3122944510427045],
            [-0.9017710575025248, -0.4601202644029998],
            [-0.8090169338392734, -0.5877853356126714],
            [0.0, 0.0],
            [-0.3090170210882486, 0.9510565076154754]
          ],
          "data04": [
            [-0.8090169338392734, -0.5877853356126714],
            [-0.68490814439655, -0.7586063925769437],
            [-0.5098291060077115, -0.8858087309271157],
            [-0.3090168875217403, -0.9510565510138586],
            [-0.10820466903576909, -1.0163043711006015],
            [0.10820490691897222, -1.016304345773443],
            [0.30901711013258343, -0.9510564786832099],
            [0.5098293133461946, -0.8858086115929767],
            [0.6849083219611722, -0.7586062322626019],
            [0.8090170714203382, -0.5877851462485756],
            [0.9331258208795041, -0.4169640602345493],
            [1.0000000296534268, -0.21114631375535517],
            [0.9999999999999901, 1.4044013572010664e-07],
            [0.0, 0.0],
            [-0.8090169338392734, -0.5877853356126714]
          ]
        },
        "id": "el16802967768280656",
        "plugins": [{
          "type": "reset"
        }, {
          "type": "zoom",
          "button": true,
          "enabled": false
        }, {
          "type": "boxzoom",
          "button": true,
          "enabled": false
        }]
      });
    });
  });
} else { //current System
  // require.js not available: dynamically load d3 & mpld3
  mpld3_load_lib("https://d3js.org/d3.v5.js", function() {
    mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.2.js", function() {

      mpld3.draw_figure("PIE1", {
        "width": 432.0,
        "height": 288.0,
        "axes": [{
          "bbox": [0.26083333333333336, 0.125, 0.5033333333333333, 0.755],
          "xlim": [-1.25, 1.25],
          "ylim": [-1.25, 1.25],
          "xdomain": [-1.25, 1.25],
          "ydomain": [-1.25, 1.25],
          "xscale": "linear",
          "yscale": "linear",
          "axes": [{
            "position": "bottom",
            "nticks": 0,
            "tickvalues": [],
            "tickformat_formatter": "",
            "tickformat": "",
            "scale": "linear",
            "fontsize": null,
            "grid": {
              "gridOn": false
            },
            "visible": true
          }, {
            "position": "left",
            "nticks": 0,
            "tickvalues": [],
            "tickformat_formatter": "",
            "tickformat": "",
            "scale": "linear",
            "fontsize": null,
            "grid": {
              "gridOn": false
            },
            "visible": true
          }],
          "axesbg": "#FFFFFF",
          "axesbgalpha": null,
          "zoomable": true,
          "id": "el16802967768279120",
          "lines": [],
          "paths": [{
            "data": "data01",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "L", "L", "Z"],
            "id": "el16802967767160048",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#FADCDA",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }, {
            "data": "data02",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "L", "L", "Z"],
            "id": "el16802967767160768",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#EEB8B8",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }, {
            "data": "data03",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"],
            "id": "el16802967788840224",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#C5DAD1",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }, {
            "data": "data04",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"],
            "id": "el16802967788842240",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#D5CB8E",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }],
          "markers": [],
          "texts": [{
            "text": "A",
            "position": [1.0461621663333946, 0.3399186987098808],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967767161104"
          }, {
            "text": "B",
            "position": [0.33991867422268784, 1.0461621742897658],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967788839168"
          }, {
            "text": "C",
            "position": [-1.0461621902025062, 0.3399186252483017],
            "coordinates": "data",
            "h_anchor": "end",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967788841280"
          }, {
            "text": "D",
            "position": [0.3399188211458418, -1.0461621265515308],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967788842672"
          }],
          "collections": [],
          "images": [],
          "sharex": [],
          "sharey": []
        }],
        "data": {
          "data01": [

            [1.0, 0.0],
            [1.0, 0.10493460732676817],
            [0.9834830922777654, 0.20921825689596807],
            [0.9510565148485406, 0.3090169988271643],
            [0.9186299374193158, 0.4088157407583606],
            [0.8706960043083146, 0.5028913798191001],
            [0.8090169888717047, 0.5877852598670369],
            [0.0, 0.0],
            [1.0, 0.0]
          ],
          "data02": [
            [0.8090169888717047, 0.5877852598670369],
            [0.6849082154224034, 0.7586063284512119],
            [0.5098291889431084, 0.8858086831934657],
            [0.30901697656607985, 0.9510565220816052],
            [0.10820476418905137, 1.0163043609697446],
            [-0.10820481176569208, 1.016304355904313],
            [-0.3090170210882486, 0.9510565076154754],
            [0.0, 0.0],
            [0.8090169888717047, 0.5877852598670369]
          ],
          "data03": [
            [-0.3090170210882486, 0.9510565076154754],
            [-0.45909632312826376, 0.9022927817253206],
            [-0.5955234474007856, 0.8186901254194974],
            [-0.7071068142886041, 0.7071067480844895],
            [-0.8186901811764227, 0.5955233707494816],
            [-0.9022928247090165, 0.45909623864951465],
            [-0.9510565365477328, 0.3090169320439106],
            [-0.9998202483864491, 0.15893762543830656],
            [-1.0123741243463642, -0.0005746454910575127],
            [-0.9876883274133277, -0.156434548266881],
            [-0.9630025304802912, -0.3122944510427045],
            [-0.9017710575025248, -0.4601202644029998],
            [-0.8090169338392734, -0.5877853356126714],
            [0.0, 0.0],
            [-0.3090170210882486, 0.9510565076154754]
          ],
          "data04": [
            [-0.8090169338392734, -0.5877853356126714],
            [-0.68490814439655, -0.7586063925769437],
            [-0.5098291060077115, -0.8858087309271157],
            [-0.3090168875217403, -0.9510565510138586],
            [-0.10820466903576909, -1.0163043711006015],
            [0.10820490691897222, -1.016304345773443],
            [0.30901711013258343, -0.9510564786832099],
            [0.5098293133461946, -0.8858086115929767],
            [0.6849083219611722, -0.7586062322626019],
            [0.8090170714203382, -0.5877851462485756],
            [0.9331258208795041, -0.4169640602345493],
            [1.0000000296534268, -0.21114631375535517],
            [0.9999999999999901, 1.4044013572010664e-07],
            [0.0, 0.0],
            [-0.8090169338392734, -0.5877853356126714]
          ]
        },
        "id": "el16802967768280656",
        "plugins": [{
          "type": "reset"
        }, {
          "type": "zoom",
          "button": true,
          "enabled": false
        }, {
          "type": "boxzoom",
          "button": true,
          "enabled": false
        }]
      });
    })
  });
}
