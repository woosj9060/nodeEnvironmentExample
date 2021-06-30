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

    mpld3.draw_figure("PIE2", {
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
        "id": "el16802967787284080",
        "lines": [],
        "paths": [{
          "data": "data01",
          "xindex": 0,
          "yindex": 1,
          "coordinates": "data",
          "pathcodes": ["M", "C", "C", "L", "L", "Z"],
          "id": "el16802967787887440",
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
          "id": "el16802967787888592",
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
          "id": "el16802967767577264",
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
          "id": "el16802967787808848",
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
          "position": [0.9740016190143815, 0.5111955067851864],
          "coordinates": "data",
          "h_anchor": "start",
          "v_baseline": "central",
          "rotation": -0.0,
          "fontsize": 10.0,
          "color": "#000000",
          "alpha": 1,
          "zorder": 3,
          "id": "el16802967787888160"
        }, {
          "text": "B",
          "position": [0.13259028929709157, 1.0919797686697834],
          "coordinates": "data",
          "h_anchor": "start",
          "v_baseline": "central",
          "rotation": -0.0,
          "fontsize": 10.0,
          "color": "#000000",
          "alpha": 1,
          "zorder": 3,
          "id": "el16802967787807456"
        }, {
          "text": "C",
          "position": [-1.0680360276074794, 0.2632471153354504],
          "coordinates": "data",
          "h_anchor": "end",
          "v_baseline": "central",
          "rotation": -0.0,
          "fontsize": 10.0,
          "color": "#000000",
          "alpha": 1,
          "zorder": 3,
          "id": "el16802967787808320"
        }, {
          "text": "D",
          "position": [0.39006554611803196, -1.0285178023406505],
          "coordinates": "data",
          "h_anchor": "start",
          "v_baseline": "central",
          "rotation": -0.0,
          "fontsize": 10.0,
          "color": "#000000",
          "alpha": 1,
          "zorder": 3,
          "id": "el16802967787809472"
        }],
        "collections": [],
        "images": [],
        "sharex": [],
        "sharey": []
      }],
      "data": {
        "data01": [
          [1.0, 0.0],
          [1.0, 0.16188725129524564],
          [0.960688776802105, 0.32137914720529925],
          [0.8854560172858014, 0.4647231879865331],
          [0.8102232577694978, 0.608067228767767],
          [0.7012953163167202, 0.7310214507414687],
          [0.5680647170952668, 0.8229838863498328],
          [0.0, 0.0],
          [1.0, 0.0]
        ],
        "data02": [
          [0.5680647170952668, 0.8229838863498328],
          [0.4348341178738136, 0.9149463219581968],
          [0.2812435386518736, 0.9731955374427598],
          [0.12053662663371961, 0.992708880608894],
          [-0.0401702853844344, 1.012222223775028],
          [-0.20323774907261347, 0.9924222385072936],
          [-0.3546049543829489, 0.935016217146562],
          [0.0, 0.0],
          [0.5680647170952668, 0.8229838863498328]
        ],
        "data03": [
          [-0.3546049543829489, 0.935016217146562],
          [-0.5059721596932844, 0.8776101957858304],
          [-0.6411597143638084, 0.7842969481062958],
          [-0.748510807869198, 0.6631225908555676],
          [-0.8558619013745876, 0.5419482336048393],
          [-0.9321997051767461, 0.3964986655719257],
          [-0.9709418432795266, 0.239315559395864],
          [-1.009683981382307, 0.08213245321980225],
          [-1.0096839621577913, -0.08213268955339129],
          [-0.9709417872636508, -0.23931578666119685],
          [-0.9321996123695102, -0.39649888376900244],
          [-0.8558617745224254, -0.54194843393376],
          [-0.7485106526541335, -0.663122766057148],
          [0.0, 0.0],
          [-0.3546049543829489, 0.935016217146562]
        ],
        "data04": [
          [-0.7485106526541335, -0.663122766057148],
          [-0.6139612478889314, -0.8149976042169758],
          [-0.4363222452288233, -0.9223840887110004],
          [-0.23931551394279532, -0.9709418544826954],
          [-0.04230878265676735, -1.0194996202543904],
          [0.1648877264669924, -1.0069665071139606],
          [0.3546050419254836, -0.9350161839460459],
          [0.5443223573839748, -0.8630658607781311],
          [0.7077221203374822, -0.7350502766299476],
          [0.8229839661289104, -0.5680646015152928],
          [0.9382458119203387, -0.401078926400638],
          [1.0000000379942273, -0.2029025204384798],
          [0.9999999999999825, 1.872535137829992e-07],
          [0.0, 0.0],
          [-0.7485106526541335, -0.663122766057148]
        ]
      },
      "id": "el16802967787285280",
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

      mpld3.draw_figure("PIE2", {
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
          "id": "el16802967787284080",
          "lines": [],
          "paths": [{
            "data": "data01",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "L", "L", "Z"],
            "id": "el16802967787887440",
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
            "id": "el16802967787888592",
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
            "id": "el16802967767577264",
            "dasharray": "none",
            "alpha": 1,
            "facecolor": "#C5DAD1F",
            "edgecolor": "none",
            "edgewidth": 1.0,
            "zorder": 1
          }, {
            "data": "data04",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"],
            "id": "el16802967787808848",
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
            "position": [0.9740016190143815, 0.5111955067851864],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967787888160"
          }, {
            "text": "B",
            "position": [0.13259028929709157, 1.0919797686697834],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967787807456"
          }, {
            "text": "C",
            "position": [-1.0680360276074794, 0.2632471153354504],
            "coordinates": "data",
            "h_anchor": "end",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967787808320"
          }, {
            "text": "D",
            "position": [0.39006554611803196, -1.0285178023406505],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967787809472"
          }],
          "collections": [],
          "images": [],
          "sharex": [],
          "sharey": []
        }],
        "data": {
          "data01": [
            [1.0, 0.0],
            [1.0, 0.16188725129524564],
            [0.960688776802105, 0.32137914720529925],
            [0.8854560172858014, 0.4647231879865331],
            [0.8102232577694978, 0.608067228767767],
            [0.7012953163167202, 0.7310214507414687],
            [0.5680647170952668, 0.8229838863498328],
            [0.0, 0.0],
            [1.0, 0.0]
          ],
          "data02": [
            [0.5680647170952668, 0.8229838863498328],
            [0.4348341178738136, 0.9149463219581968],
            [0.2812435386518736, 0.9731955374427598],
            [0.12053662663371961, 0.992708880608894],
            [-0.0401702853844344, 1.012222223775028],
            [-0.20323774907261347, 0.9924222385072936],
            [-0.3546049543829489, 0.935016217146562],
            [0.0, 0.0],
            [0.5680647170952668, 0.8229838863498328]
          ],
          "data03": [
            [-0.3546049543829489, 0.935016217146562],
            [-0.5059721596932844, 0.8776101957858304],
            [-0.6411597143638084, 0.7842969481062958],
            [-0.748510807869198, 0.6631225908555676],
            [-0.8558619013745876, 0.5419482336048393],
            [-0.9321997051767461, 0.3964986655719257],
            [-0.9709418432795266, 0.239315559395864],
            [-1.009683981382307, 0.08213245321980225],
            [-1.0096839621577913, -0.08213268955339129],
            [-0.9709417872636508, -0.23931578666119685],
            [-0.9321996123695102, -0.39649888376900244],
            [-0.8558617745224254, -0.54194843393376],
            [-0.7485106526541335, -0.663122766057148],
            [0.0, 0.0],
            [-0.3546049543829489, 0.935016217146562]
          ],
          "data04": [
            [-0.7485106526541335, -0.663122766057148],
            [-0.6139612478889314, -0.8149976042169758],
            [-0.4363222452288233, -0.9223840887110004],
            [-0.23931551394279532, -0.9709418544826954],
            [-0.04230878265676735, -1.0194996202543904],
            [0.1648877264669924, -1.0069665071139606],
            [0.3546050419254836, -0.9350161839460459],
            [0.5443223573839748, -0.8630658607781311],
            [0.7077221203374822, -0.7350502766299476],
            [0.8229839661289104, -0.5680646015152928],
            [0.9382458119203387, -0.401078926400638],
            [1.0000000379942273, -0.2029025204384798],
            [0.9999999999999825, 1.872535137829992e-07],
            [0.0, 0.0],
            [-0.7485106526541335, -0.663122766057148]
          ]
        },
        "id": "el16802967787285280",
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
} else {
  // require.js not available: dynamically load d3 & mpld3
  mpld3_load_lib("https://d3js.org/d3.v5.js", function() {
    mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.2.js", function() {

      mpld3.draw_figure("PIE2", {
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
          "id": "el16802967787284080",
          "lines": [],
          "paths": [{
            "data": "data01",
            "xindex": 0,
            "yindex": 1,
            "coordinates": "data",
            "pathcodes": ["M", "C", "C", "L", "L", "Z"],
            "id": "el16802967787887440",
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
            "id": "el16802967787888592",
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
            "id": "el16802967767577264",
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
            "id": "el16802967787808848",
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
            "position": [0.9740016190143815, 0.5111955067851864],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967787888160"
          }, {
            "text": "B",
            "position": [0.13259028929709157, 1.0919797686697834],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967787807456"
          }, {
            "text": "C",
            "position": [-1.0680360276074794, 0.2632471153354504],
            "coordinates": "data",
            "h_anchor": "end",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967787808320"
          }, {
            "text": "D",
            "position": [0.39006554611803196, -1.0285178023406505],
            "coordinates": "data",
            "h_anchor": "start",
            "v_baseline": "central",
            "rotation": -0.0,
            "fontsize": 10.0,
            "color": "#000000",
            "alpha": 1,
            "zorder": 3,
            "id": "el16802967787809472"
          }],
          "collections": [],
          "images": [],
          "sharex": [],
          "sharey": []
        }],
        "data": {
          "data01": [
            [1.0, 0.0],
            [1.0, 0.16188725129524564],
            [0.960688776802105, 0.32137914720529925],
            [0.8854560172858014, 0.4647231879865331],
            [0.8102232577694978, 0.608067228767767],
            [0.7012953163167202, 0.7310214507414687],
            [0.5680647170952668, 0.8229838863498328],
            [0.0, 0.0],
            [1.0, 0.0]
          ],
          "data02": [
            [0.5680647170952668, 0.8229838863498328],
            [0.4348341178738136, 0.9149463219581968],
            [0.2812435386518736, 0.9731955374427598],
            [0.12053662663371961, 0.992708880608894],
            [-0.0401702853844344, 1.012222223775028],
            [-0.20323774907261347, 0.9924222385072936],
            [-0.3546049543829489, 0.935016217146562],
            [0.0, 0.0],
            [0.5680647170952668, 0.8229838863498328]
          ],
          "data03": [
            [-0.3546049543829489, 0.935016217146562],
            [-0.5059721596932844, 0.8776101957858304],
            [-0.6411597143638084, 0.7842969481062958],
            [-0.748510807869198, 0.6631225908555676],
            [-0.8558619013745876, 0.5419482336048393],
            [-0.9321997051767461, 0.3964986655719257],
            [-0.9709418432795266, 0.239315559395864],
            [-1.009683981382307, 0.08213245321980225],
            [-1.0096839621577913, -0.08213268955339129],
            [-0.9709417872636508, -0.23931578666119685],
            [-0.9321996123695102, -0.39649888376900244],
            [-0.8558617745224254, -0.54194843393376],
            [-0.7485106526541335, -0.663122766057148],
            [0.0, 0.0],
            [-0.3546049543829489, 0.935016217146562]
          ],
          "data04": [
            [-0.7485106526541335, -0.663122766057148],
            [-0.6139612478889314, -0.8149976042169758],
            [-0.4363222452288233, -0.9223840887110004],
            [-0.23931551394279532, -0.9709418544826954],
            [-0.04230878265676735, -1.0194996202543904],
            [0.1648877264669924, -1.0069665071139606],
            [0.3546050419254836, -0.9350161839460459],
            [0.5443223573839748, -0.8630658607781311],
            [0.7077221203374822, -0.7350502766299476],
            [0.8229839661289104, -0.5680646015152928],
            [0.9382458119203387, -0.401078926400638],
            [1.0000000379942273, -0.2029025204384798],
            [0.9999999999999825, 1.872535137829992e-07],
            [0.0, 0.0],
            [-0.7485106526541335, -0.663122766057148]
          ]
        },
        "id": "el16802967787285280",
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
