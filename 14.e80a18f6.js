webpackJsonp([14],{Qtnn:function(t,s,a){t.exports=a("p4VF")},lMPX:function(t,s,a){var n,l,v;!function(a,_){l=[t,s],n=_,void 0!==(v="function"==typeof n?n.apply(s,l):n)&&(t.exports=v)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{zoom:10}},methods:{addZoom:function(t){this.zoom=t}}},t.exports=s.default})},mmgQ:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Custom Control")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("Add a custom control on the map")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{zoom:t.zoom,center:{lng:116.404,lat:39.915}}},[a("bm-control",[a("button",{on:{click:function(s){t.addZoom(19)}}},[t._v("Zoom Max")]),t._v(" "),a("button",{on:{click:function(s){t.addZoom(10)}}},[t._v("Reset")]),t._v(" "),a("button",{on:{click:function(s){t.addZoom(3)}}},[t._v("Zoom Min")])])],1)],1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmControl")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("anchor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ControlAnchor")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("The location of the control.")])]),t._v(" "),a("tr",[a("td",[t._v("offset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Size")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("The offset of the control.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"addZoom(19)"')]),t._v(">")]),t._v("缩放至最大"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"addZoom(10)"')]),t._v(">")]),t._v("还原"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"addZoom(3)"')]),t._v(">")]),t._v("缩放至最小"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("zoom")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("10")]),t._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    addZoom (level) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".zoom = level\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},p4VF:function(t,s,a){var n=a("VU/8")(a("lMPX"),a("mmgQ"),null,null);t.exports=n.exports}});