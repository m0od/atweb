! function(t) {
    function e(e) {
        for (var r, a, s = e[0], c = e[1], u = e[2], f = 0, d = []; f < s.length; f++) a = s[f], Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]), i[a] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
        for (l && l(e); d.length;) d.shift()();
        return o.push.apply(o, u || []), n()
    }

    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], r = !0, s = 1; s < n.length; s++) 0 !== i[n[s]] && (r = !1);
            r && (o.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var r = {},
        i = {
            app: 0
        },
        o = [];

    function a(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.e = function(t) {
        var e = [],
            n = i[t];
        if (0 !== n) {
            if (n) e.push(n[2]);
            else {
                var r = new Promise(function(e, r) {
                    n = i[t] = [e, r]
                });
                e.push(n[2] = r);
                var o, s, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, a.nc && c.setAttribute("nonce", a.nc), c.src = (s = t, a.p + "js/" + (({})[s] || s) + "." + ({
                    "chunk-0b65ffb6": "33822ef0",
                    "chunk-12950967": "efd128fb",
                    "chunk-2d0a3577": "d9f896b2",
                    "chunk-2d0a43df": "9e79f581",
                    "chunk-2d0aa90c": "3c59fbf4",
                    "chunk-2d0aab07": "39e23b95",
                    "chunk-2d0abc00": "f1884cd4",
                    "chunk-2d0ae937": "903c1335",
                    "chunk-2d0aeb45": "9c4b5976",
                    "chunk-2d0af08c": "9e1285b9",
                    "chunk-2d0afa49": "85461f47",
                    "chunk-2d0b2762": "7d684594",
                    "chunk-2d0b6187": "f89ffde4",
                    "chunk-2d0ba136": "bbec30c8",
                    "chunk-2d0bb267": "5dee5cf1",
                    "chunk-2d0bcec1": "56def71e",
                    "chunk-2d0bdf38": "1b523c27",
                    "chunk-2d0bff92": "20e902ec",
                    "chunk-2d0c0494": "af528271",
                    "chunk-2d0c0a09": "62eb0f0b",
                    "chunk-2d0c4313": "cd981365",
                    "chunk-2d0c46d1": "60455683",
                    "chunk-2d0c512b": "5a402d0c",
                    "chunk-2d0cf16e": "62091eba",
                    "chunk-2d0d056d": "d14c3cad",
                    "chunk-2d0d0645": "41267a2b",
                    "chunk-2d0d2f22": "2f2238f5",
                    "chunk-2d0d61fd": "e288609c",
                    "chunk-2d0d7e63": "ec0a9a56",
                    "chunk-2d0e1b57": "3f8871b7",
                    "chunk-2d0e1fbe": "53c476db",
                    "chunk-2d0e22d6": "9a796be1",
                    "chunk-2d0e542a": "0bdedd30",
                    "chunk-2d0e57ec": "935ba08a",
                    "chunk-2d0e6553": "91df759c",
                    "chunk-2d0e6c86": "3e8d9092",
                    "chunk-2d0ea098": "93d57223",
                    "chunk-2d0f0a11": "ceac1b5f",
                    "chunk-2d208ac5": "b66c8027",
                    "chunk-2d209408": "5f6bc258",
                    "chunk-2d20f745": "a6d18ebf",
                    "chunk-2d20ff23": "a32010b3",
                    "chunk-2d2138c7": "fafe1538",
                    "chunk-2d216f3b": "a188123e",
                    "chunk-2d217e5b": "d9a56fdd",
                    "chunk-2d21b84a": "bc13c99c",
                    "chunk-2d21dcd2": "e173075e",
                    "chunk-2d21f327": "e4d2d3d3",
                    "chunk-2d2214b3": "bc2744ae",
                    "chunk-2d221799": "7bbd4a7e",
                    "chunk-2d221814": "4aa609fc",
                    "chunk-2d221a34": "d6cccb86",
                    "chunk-2d22502a": "a6b58984",
                    "chunk-2d226775": "2df4d247",
                    "chunk-2d229411": "54ea8ea6",
                    "chunk-2d2295e9": "2eb8ccd3",
                    "chunk-2d22c171": "74442536",
                    "chunk-2d22c2b8": "7b0b5a28",
                    "chunk-2d22ca58": "7f0960a0",
                    "chunk-2d2311f7": "772feddf",
                    "chunk-2d237ee7": "9da26148",
                    "chunk-2d238465": "a8d0c247",
                    "chunk-7532b3ea": "68fc9a87",
                    "chunk-e13e4362": "7b8af5fe"
                })[s] + ".js");
                var u = Error();
                o = function(e) {
                    c.onerror = c.onload = null, clearTimeout(l);
                    var n = i[t];
                    if (0 !== n) {
                        if (n) {
                            var r = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src;
                            u.message = "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")", u.name = "ChunkLoadError", u.type = r, u.request = o, n[1](u)
                        }
                        i[t] = void 0
                    }
                };
                var l = setTimeout(function() {
                    o({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = o, document.head.appendChild(c)
            }
        }
        return Promise.all(e)
    }, a.m = t, a.c = r, a.d = function(t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e || 4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) a.d(n, r, (function(e) {
                return t[e]
            }).bind(null, r));
        return n
    }, a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/", a.oe = function(t) {
        throw console.error(t), t
    };
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var u = 0; u < s.length; u++) e(s[u]);
    var l = c;
    o.push([0, "chunk-vendors"]), n()
}({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "03f5": function(t, e, n) {},
    "0c28": function(t, e, n) {},
    1859: function(t, e, n) {
        var r = n("0c28");
        n.n(r).a
    },
    "1c4c": function(t, e, n) {
        var r = n("2df8");
        n.n(r).a
    },
    "1f48": function(t, e, n) {
        var r = n("ef9e");
        n.n(r).a
    },
    "2df8": function(t, e, n) {},
    4621: function(t, e, n) {},
    "56d7": function(t, e, n) {
        n.r(e), n("cadf"), n("551c"), n("f751"), n("097d");
        var r = n("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t.host ? [n("Navbar", {
                    staticClass: "top"
                }), n("div", {
                    staticClass: "main",
                    class: {
                        hideLeft: !t.showLeft,
                        showLeft: t.showLeft
                    }
                }, [n("div", {
                    staticClass: "left"
                }, [n("router-view")], 1), n("MainField", {
                    staticClass: "right"
                })], 1), n("Footer", {
                    staticClass: "bottom"
                }), n("notifications", {
                    attrs: {
                        group: "main",
                        position: "bottom right"
                    }
                })] : n("div", {
                    staticClass: "container-fluid",
                    staticStyle: {
                        "margin-top": "100px"
                    }
                }, [n("div", [t._m(0), n("div", {
                    staticClass: "row"
                }, [t._m(1), n("div", {
                    staticClass: "col-12"
                }, [n("form", {
                    staticClass: "d-flex justify-content-center align-items-baseline"
                }, [n("h6", {
                    staticClass: "text-nowrap"
                }, [t._v("Device Host Address:")]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.hostInput,
                        expression: "hostInput"
                    }],
                    staticClass: "form-control mx-3",
                    staticStyle: {
                        width: "300px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: "192.168.1.123:8080"
                    },
                    domProps: {
                        value: t.hostInput
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.hostInput = e.target.value)
                        }
                    }
                }), n("button", {
                    staticClass: "btn btn-success",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.connect(e)
                        }
                    }
                }, [t._v("Connect")])])])])])])], 2)
            },
            o = (n("8e6e"), n("ac6a"), n("456d"), n("a481"), n("f559"), n("bd86")),
            a = function() {
                console.log(this.$route);
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("nav", {
                    staticClass: "navbar navbar-dark bg-dark"
                }, [n("div", {
                    staticClass: "container-fluid"
                }, [n("button", {
                    staticClass: "btn-collapse",
                    on: {
                        click: function(e) {
                            return t.toggleLeft()
                        }
                    }
                }, [n("svg", {
                    staticClass: "bi bi-list",
                    attrs: {
                        width: "2.2em",
                        height: "2.2em",
                        viewBox: "0 0 16 16",
                        fill: "white",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z",
                        "clip-rule": "evenodd"
                    }
                })])]), n("a", {
                    staticClass: "navbar-brand",
                    attrs: {
                        href: "#/?host=" + this.$route.query.host
                    }
                }, [t._v(this.$route.query.host.substr(0, this.$route.query.host.indexOf(":")))]), n("div", {
                    staticClass: "navbar-nav ml-auto"
                }, [n("button", {
                    staticClass: "btn btn-secondary btn-sm mr-2",
                    on: {
                        click: function(e) {
                            return t.snapShot()
                        }
                    }
                }, [t._v("SnapShot")]), n("button", {
                    staticClass: "btn btn-secondary btn-sm",
                    on: {
                        click: function(e) {
                            return t.switchLog(!t.showLog)
                        }
                    }
                }, [t._v("Show Log")])])])])
            },
            s = (n("5872"), n("2877")),
            c = Object(s.a)({
                name: "Navbar",
                data: function() {
                    return {
                        showLeft: !0,
                        showLog: !1
                    }
                },
                methods: {
                    snapShot: function(t) {
                        var e = this,
                            n = "/control/start_playing?path=" + encodeURIComponent("/../Library/LuaLibraries/snapshot.lua");
                        e.$http.get(n).then(function(t) {
                            "success" != t.data.status && e.$notify({
                                group: "main",
                                type: "error",
                                text: "snapshot.lua doesn't exist"
                            })
                        }).catch(function(t) {
                            e.$notify({
                                group: "main",
                                type: "error",
                                text: t
                            })
                        })
                    },
                    switchLog: function(t) {
                        this.showLog = t, this.$store.commit("setShowLog", t)
                    },
                    toggleLeft: function() {
                        this.showLeft = !this.showLeft, this.$store.commit("setShowLeft", this.showLeft)
                    }
                }
            }, a, [], !1, null, "5fc33824", null).exports,
            u = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "file-list-field"
                }, [n("div", {
                    staticClass: "toolbar",
                    staticStyle: {
                        "padding-left": "16px",
                        "padding-right": "0"
                    }
                }, [n("Breadcrumb"), n("div", [n("button", {
                    staticClass: "btn btn-default btn-sm mr-2",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.loadFiles()
                        }
                    }
                }, [n("svg", {
                    staticClass: "bi bi-arrow-repeat",
                    attrs: {
                        width: "2.0em",
                        height: "2.0em",
                        viewBox: "0 0 16 16",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "M2.854 7.146a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L2.5 8.207l1.646 1.647a.5.5 0 00.708-.708l-2-2zm13-1a.5.5 0 00-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z",
                        "clip-rule": "evenodd"
                    }
                }), n("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "M8 3a4.995 4.995 0 00-4.192 2.273.5.5 0 01-.837-.546A6 6 0 0114 8a.5.5 0 01-1.001 0 5 5 0 00-5-5zM2.5 7.5A.5.5 0 013 8a5 5 0 009.192 2.727.5.5 0 11.837.546A6 6 0 012 8a.5.5 0 01.501-.5z",
                        "clip-rule": "evenodd"
                    }
                })])]), n("b-dropdown", {
                    attrs: {
                        variant: "button",
                        size: "sm",
                        "no-caret": ""
                    }
                }, [n("template", {
                    slot: "button-content"
                }, [n("svg", {
                    staticClass: "bi bi-three-dots",
                    attrs: {
                        width: "2.0em",
                        height: "2.0em",
                        viewBox: "0 0 16 16",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
                        "clip-rule": "evenodd"
                    }
                })])]), n("b-dropdown-item", {
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.newFolder()
                        }
                    }
                }, [t._v("New Folder")]), n("b-dropdown-item", {
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.newFile()
                        }
                    }
                }, [t._v("New Script")]), n("b-dropdown-item", {
                    directives: [{
                        name: "b-modal",
                        rawName: "v-b-modal.modal-upload-file",
                        modifiers: {
                            "modal-upload-file": !0
                        }
                    }]
                }, [t._v("Upload File")])], 2)], 1)], 1), n("div", {
                    staticClass: "file-list-wrapper"
                }, [t._m(0), n("div", {
                    staticClass: "file-list-content-wrapper"
                }, [n("table", {
                    staticClass: "table table-striped",
                    attrs: {
                        border: "0",
                        cellspacing: "0",
                        cellpadding: "0"
                    }
                }, [n("tbody", t._l(t.files, function(e) {
                    return n("tr", {
                        key: t.fileName(e)
                    }, [n("td", [n("img", {
                        attrs: {
                            src: "../icons/" + e.iconName
                        }
                    }), t.isFolder(e.iconName) || t.isLuaPackage(e.filePath) ? n("router-link", {
                        attrs: {
                            to: e.filePath + "?host=" + t.$route.query.host
                        }
                    }, [t._v(t._s(t.fileName(e)))]) : n("a", {
                        attrs: {
                            href: "#?host=" + t.$route.query.host
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), n.preventDefault(), t.clickOnFile(e)
                            }
                        }
                    }, [t._v(t._s(t.fileName(e)))])], 1), n("td", [t.isScript(e.filePath) ? [t.isRunning(e.filePath) ? n("button", {
                        staticClass: "btn btn-secondary btn-sm",
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), n.preventDefault(), t.stop(e.filePath)
                            }
                        }
                    }, [t._v("Stop")]) : n("button", {
                        staticClass: "btn btn-outline-secondary btn-sm",
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), n.preventDefault(), t.play(e.filePath)
                            }
                        }
                    }, [t._v("Play")])] : t._e()], 2), n("td", [n("b-dropdown", {
                        attrs: {
                            variant: "button",
                            size: "sm",
                            "no-caret": ""
                        }
                    }, [n("template", {
                        slot: "button-content"
                    }, [n("svg", {
                        staticClass: "bi bi-gear",
                        attrs: {
                            width: "1.6em",
                            height: "1.6em",
                            viewBox: "0 0 16 16",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            d: "M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 014.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 01-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 011.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 012.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 012.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 011.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 01-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 018.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 001.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 00.52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 00-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 00-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 00-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 00-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 00.52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 001.255-.52l.094-.319z",
                            "clip-rule": "evenodd"
                        }
                    }), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            d: "M8 5.754a2.246 2.246 0 100 4.492 2.246 2.246 0 000-4.492zM4.754 8a3.246 3.246 0 116.492 0 3.246 3.246 0 01-6.492 0z",
                            "clip-rule": "evenodd"
                        }
                    })])]), n("b-dropdown-item", {
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), n.preventDefault(), t.deleteFile(e.filePath)
                            }
                        }
                    }, [t._v("Delete")]), n("b-dropdown-item", {
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), n.preventDefault(), t.renameFile(e.filePath)
                            }
                        }
                    }, [t._v("Rename")])], 2)], 1)])
                }), 0)])])]), n("b-modal", {
                    ref: "modal-upload-file",
                    attrs: {
                        id: "modal-upload-file",
                        title: "Upload File",
                        "hide-footer": ""
                    }
                }, [n("form", {
                    staticClass: "d-flex justify-content-between",
                    attrs: {
                        enctype: "multipart/form-data",
                        method: "post",
                        id: "uploadForm"
                    }
                }, [n("input", {
                    attrs: {
                        id: "file",
                        name: "file",
                        type: "file"
                    }
                }), n("input", {
                    attrs: {
                        type: "submit",
                        value: "Upload",
                        id: "uploadSubmit"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.uploadFile()
                        }
                    }
                })])])], 1)
            },
            l = (n("7f7f"), n("aef6"), n("6762"), n("2fdb"), function() {
                var t = this.$createElement;
                return (this._self._c || t)("ol", {
                    staticClass: "breadcrumb",
                    domProps: {
                        innerHTML: this._s(this.breadcrumbHTML)
                    }
                })
            }),
            f = (n("28a5"), n("2f62"));

        function d(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }
        var h = {
                name: "breadcrumb",
                data: function() {
                    return {
                        breadcrumbHTML: null
                    }
                },
                created: function() {
                    this.updateBreadcrumbHTML()
                },
                watch: {
                    currentDir: function() {
                        this.updateBreadcrumbHTML()
                    }
                },
                computed: function t(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? d(Object(r), !0).forEach(function(t) {
                            Object(o.a)(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                    }
                    return e
                }({}, Object(f.b)({
                    currentDir: "getCurrentDir"
                })),
                methods: {
                    updateBreadcrumbHTML: function() {
                        for (var t = "?host=" + this.$route.query.host, e = this.$store.state.currentDir, n = e.split("/"), r = "", i = "", o = 0; o < n.length; o++) 0 == o ? i = "/" : i += 1 == o ? n[o] : "/" + n[o], 0 == o ? r += '<li class="breadcrumb-item"><a href="#' + i + t + '">Home</a></li>' : o == n.length - 1 ? r += '<li class="breadcrumb-item active">' + n[o] + "</li>" : r += '<li class="breadcrumb-item"><a href="#' + i + t + '">' + n[o] + "</a></li>";
                        this.breadcrumbHTML = r
                    }
                }
            },
            p = (n("9fe3"), Object(s.a)(h, l, [], !1, null, "1c8bdcae", null)).exports,
            $ = n("69d9"),
            _ = (n("1859"), Object(s.a)({
                name: "FileList",
                components: {
                    Breadcrumb: p
                },
                data: function() {
                    return {
                        files: [],
                        currentPath: "/",
                        runningScripts: [],
                        refreshIntervalId: null
                    }
                },
                created: function() {
                    var t = this;
                    this.currentPath = this.$route.path, this.$store.commit("setCurrentDir", this.currentPath), this.loadFiles(), this.refreshIntervalId = setInterval(function() {
                        t.getRunningScripts()
                    }, 3e3)
                },
                beforeRouteUpdate: function(t, e, n) {
                    n(), this.currentPath = this.$route.path, this.$store.commit("setCurrentDir", this.currentPath), this.loadFiles()
                },
                destroyed: function() {
                    clearInterval(this.refreshIntervalId)
                },
                methods: {
                    clickOnFile: function(t) {
                        this.$store.commit("setShowLog", !1);
                        var e = $.getFileType(t.filePath);
                        "js" !== e && "lua" !== e && "txt" !== e && "img" !== e || this.getFileContent(t.filePath)
                    },
                    hasFiles: function() {
                        return this.files && this.files.length > 0
                    },
                    loadFiles: function() {
                        var t = this,
                            e = "/files?path=" + encodeURIComponent(this.currentPath);
                        t.$http.get(e).then(function(e) {
                            t.files = e.data.files, t.$notify({
                                group: "main",
                                type: "success",
                                text: "Files reloaded!"
                            })
                        }).catch(function(e) {
                            t.$notify({
                                group: "main",
                                type: "error",
                                text: e
                            })
                        })
                    },
                    getRunningScripts: function() {
                        var t = this;
                        t.$http.get("/runningScripts").then(function(e) {
                            t.runningScripts = e.data
                        }).catch(function(t) {
                            console.log(t)
                        })
                    },
                    fileName: function(t) {
                        return $.getFilename(t.filePath)
                    },
                    fileNameLink: function(t) {
                        var e = t.filePath,
                            n = t.iconName;
                        return $.isFolder(n) ? "/?path=" + encodeURIComponent(e) : $.isImage(n) ? "/file/view?path=" + encodeURIComponent(e) : "/file/edit?path=" + encodeURIComponent(e)
                    },
                    play: function(t) {
                        var e = this,
                            n = "/control/start_playing?path=" + encodeURIComponent(t);
                        e.$http.get(n).then(function(t) {
                            var n = t.data;
                            "success" != n.status && e.$notify({
                                group: "main",
                                type: "error",
                                text: n.info
                            })
                        }).catch(function(t) {
                            e.$notify({
                                group: "main",
                                type: "error",
                                text: t
                            })
                        })
                    },
                    stop: function(t) {
                        var e = this,
                            n = "/control/stop_playing?path=" + encodeURIComponent(t);
                        e.$http.get(n).then(function(t) {
                            var n = t.data;
                            "success" != n.status && e.$notify({
                                group: "main",
                                type: "error",
                                text: n.info
                            })
                        }).catch(function(t) {
                            e.$notify({
                                group: "main",
                                type: "error",
                                text: t
                            })
                        })
                    },
                    renameFile: function(t) {
                        var e, n, r, i = this,
                            o = prompt("Please input the new filename", "");
                        o && (e = t, n = i.currentPath + "/" + o, r = "/file/rename?path=" + encodeURIComponent(e) + "&newPath=" + encodeURIComponent(n), i.$http.get(r).then(function(t) {
                            var e = t.data;
                            "success" == e.status ? i.loadFiles() : i.$notify({
                                group: "main",
                                type: "error",
                                text: e.info
                            })
                        }).catch(function(t) {
                            i.$notify({
                                group: "main",
                                type: "error",
                                text: t
                            })
                        }))
                    },
                    deleteFile: function(t) {
                        var e = this;
                        if (confirm("Are you sure to delete the file?")) {
                            var n = "/file/delete?path=" + encodeURIComponent(t);
                            e.$http.get(n).then(function(t) {
                                var n = t.data;
                                "success" == n.status ? e.loadFiles() : e.$notify({
                                    group: "main",
                                    type: "error",
                                    text: n.info
                                })
                            }).catch(function(t) {
                                e.$notify({
                                    group: "main",
                                    type: "error",
                                    text: t
                                })
                            })
                        }
                    },
                    isFolder: function(t) {
                        return $.isFolder(t)
                    },
                    isLuaPackage: function(t) {
                        return $.isLuaPackage(t)
                    },
                    isScript: function(t) {
                        return $.isScript(t)
                    },
                    isRunning: function(t) {
                        return this.runningScripts.includes(t)
                    },
                    newFile: function() {
                        var t, e, n = this,
                            r = prompt("Please input the filename", "");
                        r && (r.toLowerCase().endsWith(".txt") || r.toLowerCase().endsWith(".lua") || r.toLowerCase().endsWith(".js") || (r += ".js"), e = "/file/new?path=" + encodeURIComponent(t = n.currentPath + "/" + r), n.$http.get(e).then(function(t) {
                            var e = t.data;
                            "success" == e.status ? n.loadFiles() : n.$notify({
                                group: "main",
                                type: "error",
                                text: e.info
                            })
                        }).catch(function(t) {
                            n.$notify({
                                group: "main",
                                type: "error",
                                text: t
                            })
                        }))
                    },
                    newFolder: function() {
                        var t, e, n = this,
                            r = prompt("Please input the folder name", "");
                        r && (e = "/file/newFolder?path=" + encodeURIComponent(t = n.currentPath + "/" + r), n.$http.get(e).then(function(t) {
                            var e = t.data;
                            "success" == e.status ? n.loadFiles() : n.$notify({
                                group: "main",
                                type: "error",
                                text: e.info
                            })
                        }).catch(function(t) {
                            n.$notify({
                                group: "main",
                                type: "error",
                                text: t
                            })
                        }))
                    },
                    uploadFile: function() {
                        var t = this,
                            e = document.getElementById("file").files[0];
                        if (e) {
                            var n = "/file/upload?path=" + encodeURIComponent(this.currentPath + "/" + e.name),
                                r = new FormData;
                            r.append("file", e), t.$http.post(n, r, {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            }).then(function(e) {
                                var n = e.data;
                                "success" == n.status ? (t.loadFiles(), t.$refs["modal-upload-file"].hide(), t.$notify({
                                    group: "main",
                                    type: "success",
                                    text: "Uploaded successfully!"
                                })) : t.$notify({
                                    group: "main",
                                    type: "error",
                                    text: n.info
                                })
                            }).catch(function(e) {
                                t.$notify({
                                    group: "main",
                                    type: "error",
                                    text: e
                                })
                            })
                        }
                    },
                    getFileContent: function(t) {
                        var e = this;
                        e.$store.commit("setShowLoading", !0);
                        var n = "/file/content?path=" + encodeURIComponent(t);
                        e.$http.get(n).then(function(n) {
                            var r = n.data;
                            if ("success" === r.status) {
                                var i = r.content;
                                e.$store.commit("setCurrentFile", {
                                    filePath: t,
                                    content: i
                                })
                            } else e.$notify({
                                group: "main",
                                type: "error",
                                text: r.info
                            })
                        }).catch(function(t) {
                            e.$notify({
                                group: "main",
                                type: "error",
                                text: t
                            })
                        }).finally(function() {
                            e.$store.commit("setShowLoading", !1)
                        })
                    }
                }
            }, u, [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("table", {
                    staticClass: "table table-striped",
                    attrs: {
                        border: "0",
                        cellspacing: "0",
                        cellpadding: "0"
                    }
                }, [e("thead", [e("tr", [e("th", [this._v("Filename")]), e("th", [this._v("Control")]), e("th", [this._v("Options")])])])])
            }], !1, null, "6bf36662", null)).exports,
            g = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [this.showLoading ? e("div", {
                    staticClass: "loading"
                }, [e("bounce-loader")], 1) : this._e(), this.showLog ? e("div", [e("LogView")], 1) : [e("Editor", {
                    style: {
                        display: "js" == this.currentFileType || "lua" == this.currentFileType || "txt" == this.currentFileType ? "block" : "none"
                    }
                }), "img" == this.currentFileType ? e("div", [e("ImageView")], 1) : this._e()]], 2)
            },
            v = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "toolbar"
                }, [t.currentScript.filePath ? n("div", {
                    domProps: {
                        textContent: t._s("File: " + t.currentScript.filePath)
                    }
                }) : n("div"), n("div", {
                    staticClass: "d-flex flex-row justify-content-end align-items-center pr-3"
                }, [t.code ? [n("div", {
                    staticClass: "m-1"
                }, [t._v("Font Size")]), n("b-form-spinbutton", {
                    staticClass: "m-2",
                    attrs: {
                        inline: "",
                        size: "sm"
                    },
                    model: {
                        value: t.options.fontSize,
                        callback: function(e) {
                            t.$set(t.options, "fontSize", e)
                        },
                        expression: "options.fontSize"
                    }
                }), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.options.theme,
                        expression: "options.theme"
                    }],
                    staticClass: "m-2 mr-5",
                    staticStyle: {
                        height: "30px"
                    },
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(t) {
                                return "_value" in t ? t._value : t.value
                            });
                            t.$set(t.options, "theme", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "vs-dark"
                    }
                }, [t._v("Dark")]), n("option", {
                    attrs: {
                        value: "vs"
                    }
                }, [t._v("Light")])]), n("button", {
                    staticClass: "btn btn-secondary btn-sm m-2",
                    on: {
                        click: function(e) {
                            return t.play()
                        }
                    }
                }, [t._v("\n          Play\n          "), n("span", {
                    staticClass: "span-btn-subtitle"
                }, [t._v("(Ctrl+r,⌘+r)")])]), t.isSaving ? n("button", {
                    staticClass: "btn btn-secondary btn-sm m-2",
                    attrs: {
                        disabled: ""
                    }
                }, [t._v("\n          Saving\n          "), n("span", {
                    staticClass: "span-btn-subtitle"
                }, [t._v("Ctrl+s,⌘+s)")])]) : n("button", {
                    staticClass: "btn btn-secondary btn-sm m-2",
                    on: {
                        click: function(e) {
                            return t.saveFile()
                        }
                    }
                }, [t._v("\n          Save\n          "), n("span", {
                    staticClass: "span-btn-subtitle"
                }, [t._v("Ctrl+s,⌘+s)")])])] : t._e()], 2)]), n("div", {
                    staticClass: "editor-field"
                }, [null != t.code ? n("MonacoEditor", {
                    staticClass: "editor",
                    attrs: {
                        language: t.language,
                        theme: t.options.theme,
                        options: t.options
                    },
                    model: {
                        value: t.code,
                        callback: function(e) {
                            t.code = e
                        },
                        expression: "code"
                    }
                }) : t._e()], 1)])
            },
            m = (n("4917"), n("059c"));

        function b(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }
        var y = n("69d9"),
            w = {
                name: "Editor",
                components: {
                    MonacoEditor: m.a
                },
                data: function() {
                    return {
                        fileType: null,
                        isSaving: !1,
                        code: this.currentScript ? this.currentScript.content : null,
                        language: null,
                        options: {
                            fontSize: 13,
                            theme: "vs-dark"
                        }
                    }
                },
                created: function() {
                    window.addEventListener("keydown", this.onHotKey, !1)
                },
                beforeDestroy: function() {
                    window.removeEventListener("keydown", this.onkey)
                },
                methods: {
                    saveFile: function() {
                        var t = this;
                        t.isSaving = !0;
                        var e = this.currentScript.filePath,
                            n = this.code,
                            r = "/file/update?path=" + encodeURIComponent(e),
                            i = "content=" + encodeURIComponent(n);
                        t.$http.post(r, i).then(function(r) {
                            var i = r.data;
                            "success" == i.status ? t.$store.commit("setCurrentFile", {
                                filePath: e,
                                content: n
                            }) : t.$notify({
                                group: "main",
                                type: "error",
                                text: i.info
                            })
                        }).catch(function(e) {
                            t.$notify({
                                group: "main",
                                type: "error",
                                text: e
                            })
                        }).then(function() {
                            t.isSaving = !1
                        })
                    },
                    onHotKey: function(t) {
                        if (!t.defaultPrevented) return (83 === t.which || 83 === t.keyCode || "s" === t.key) && (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? (this.saveFile(), void t.preventDefault()) : (82 === t.which || 82 === t.keyCode || "r" === t.key) && (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? (this.play(), void t.preventDefault()) : void 0
                    },
                    play: function() {
                        var t = this,
                            e = "/control/start_playing?path=" + encodeURIComponent(this.currentScript.filePath);
                        t.$http.get(e).then(function(e) {
                            var n = e.data;
                            "success" != n.status && t.$notify({
                                group: "main",
                                type: "error",
                                text: n.info
                            })
                        }).catch(function(e) {
                            t.$notify({
                                group: "main",
                                type: "error",
                                text: e
                            })
                        })
                    },
                    updateMode: function() {
                        "js" == this.fileType ? this.language = "javascript" : "ts" == this.fileType ? this.language = "typescript" : "lua" == this.fileType ? this.language = "lua" : "text" == this.fileType && (this.language = "text")
                    }
                },
                computed: function t(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? b(Object(r), !0).forEach(function(t) {
                            Object(o.a)(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                    }
                    return e
                }({}, Object(f.b)({
                    currentScript: "getCurrentFile"
                })),
                watch: {
                    currentScript: function(t) {
                        this.code = t.content, this.fileType = y.getFileType(t.filePath), this.updateMode()
                    }
                }
            },
            k = (n("cfde"), Object(s.a)(w, v, [], !1, null, "39ed7fd4", null)).exports,
            P = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "log-view"
                }, [n("div", {
                    staticClass: "toolbar d-flex flex-row justify-content-between"
                }, [n("div"), n("button", {
                    staticClass: "btn btn-secondary btn-sm",
                    on: {
                        click: function(e) {
                            return t.clearLog()
                        }
                    }
                }, [t._v("Clear Log")])]), n("div", {
                    staticClass: "log"
                }, [n("pre", [t._v(t._s(t.log))])])])
            },
            C = (n("9c2a"), Object(s.a)({
                name: "LogView",
                components: {},
                data: function() {
                    return {
                        log: null,
                        refreshIntervalId: null
                    }
                },
                mounted: function() {
                    var t = this;
                    this.getLog(!0), this.refreshIntervalId = setInterval(function() {
                        t.getLog()
                    }, 2e3)
                },
                destroyed: function() {
                    clearInterval(this.refreshIntervalId)
                },
                methods: {
                    getLog: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = this;
                        t && e.$store.commit("setShowLoading", !0), e.$http.get("/log").then(function(t) {
                            var n = t.data;
                            "success" === n.status ? e.log = n.content : console.error("Failed to get log:", n.info)
                        }).catch(function(t) {
                            e.$notify({
                                group: "main",
                                type: "error",
                                text: t
                            })
                        }).finally(function() {
                            t && e.$store.commit("setShowLoading", !1)
                        })
                    },
                    clearLog: function() {
                        var t = this;
                        t.$http.get("/log/clear").then(function(e) {
                            var n = e.data;
                            "success" == n.status ? (t.log = null, t.$notify({
                                group: "main",
                                type: "success",
                                text: "Cleared!"
                            })) : t.$notify({
                                group: "main",
                                type: "error",
                                text: n.info
                            })
                        }).catch(function(e) {
                            t.$notify({
                                group: "main",
                                type: "error",
                                text: e
                            })
                        })
                    }
                }
            }, P, [], !1, null, "17d29f90", null)).exports,
            x = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "img-view"
                }, [e("div", {
                    staticClass: "toolbar"
                }), e("div", {
                    staticClass: "img-container"
                }, [e("img", {
                    attrs: {
                        src: "" + this.currentFile.content,
                        alt: ""
                    }
                })])])
            };

        function L(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }
        var F = {
                name: "ImageView",
                computed: function t(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? L(Object(r), !0).forEach(function(t) {
                            Object(o.a)(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                    }
                    return e
                }({}, Object(f.b)({
                    currentFile: "getCurrentFile"
                }))
            },
            S = (n("1c4c"), Object(s.a)(F, x, [], !1, null, "3f49a1c8", null)).exports,
            D = n("00d3");

        function O(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }
        var E = n("69d9"),
            T = {
                name: "MainField",
                components: {
                    Editor: k,
                    LogView: C,
                    ImageView: S,
                    BounceLoader: D.a
                },
                data: function() {
                    return {
                        currentFileType: null
                    }
                },
                computed: function t(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? O(Object(r), !0).forEach(function(t) {
                            Object(o.a)(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                    }
                    return e
                }({}, Object(f.b)({
                    currentFile: "getCurrentFile",
                    showLog: "getShowLog",
                    showLoading: "getShowLoading"
                })),
                watch: {
                    currentFile: function(t) {
                        this.currentFileType = E.getFileType(t.filePath)
                    }
                }
            },
            M = (n("7b34"), Object(s.a)(T, g, [], !1, null, "b72be396", null)).exports,
            I = function() {
                return this.$createElement, this._self._c, this._m(0)
            },
            z = (n("1f48"), Object(s.a)({
                name: "Footer"
            }, I, [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "footer"
                }, [e("div")])
            }], !1, null, "0667b50f", null)).exports,
            j = n("8c4f");

        function H(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }
        var W = {
                name: "app",
                router: new j.a({
                    routes: [{
                        path: "**",
                        component: _
                    }]
                }),
                components: {
                    Navbar: c,
                    MainField: M,
                    Footer: z
                },
                data: function() {
                    return {
                        host: null,
                        hostInput: null
                    }
                },
                computed: function t(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? H(Object(r), !0).forEach(function(t) {
                            Object(o.a)(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                    }
                    return e
                }({}, Object(f.b)({
                    showLeft: "getShowLeft"
                })),
                created: function() {
                    var t = this.$route.query.host;
                    t && this.updateHost(t)
                },
                methods: {
                    updateHost: function(t) {
                        t && (this.host = t, this.$http.defaults.baseURL = t.startsWith("http") ? t : "http://".concat(t), this.$router.replace({
                            query: {
                                host: t
                            }
                        }).catch(function() {}))
                    },
                    connect: function() {
                        this.updateHost(this.hostInput)
                    }
                }
            },
            N = (n("8bb3"), Object(s.a)(W, i, [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-12"
                }, [e("div", {
                    staticClass: "d-flex justify-content-center"
                }, [e("div", {
                    staticClass: "brand"
                }, [e("img", {
                    attrs: {
                        src: "/logo.png"
                    }
                }), e("h1", {
                    staticClass: "mt-3 mb-5"
                }, [this._v("AutoTouch Dashboard")])])])])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "col-12 text-center pb-2"
                }, [e("p", {
                    staticClass: "text-secondary"
                }, [this._v("Turn on Web Server at AutoTouch>Settings, then input the address here.")])])
            }], !1, null, "21dcfcda", null)).exports,
            A = n("5f5b"),
            B = n("ee98"),
            q = n.n(B),
            R = n("bc3a"),
            K = n.n(R);
        n("944d"), r.default.prototype.$http = K.a, r.default.use(j.a), r.default.use(f.a), r.default.use(A.a), r.default.use(q.a);
        var U = new f.a.Store({
            state: {
                host: null,
                showLoading: !1,
                showLeft: !0,
                showLog: !1,
                currentDir: null,
                currentFile: {
                    filePath: null,
                    content: null
                }
            },
            mutations: {
                setHost: function(t, e) {
                    t.host = e
                },
                setShowLoading: function(t, e) {
                    t.showLoading = e
                },
                setShowLeft: function(t, e) {
                    t.showLeft = e
                },
                setShowLog: function(t, e) {
                    t.showLog = e
                },
                setCurrentDir: function(t, e) {
                    t.currentDir = e
                },
                setCurrentFile: function(t, e) {
                    t.currentFile = e
                }
            },
            getters: {
                getHost: function(t) {
                    return t.host
                },
                getShowLoading: function(t) {
                    return t.showLoading
                },
                getShowLeft: function(t) {
                    return t.showLeft
                },
                getShowLog: function(t) {
                    return t.showLog
                },
                getCurrentDir: function(t) {
                    return t.currentDir
                },
                getCurrentFile: function(t) {
                    return t.currentFile
                }
            }
        });
        r.default.config.productionTip = !1, new r.default({
            store: U,
            render: function(t) {
                return t(N)
            }
        }).$mount("#app")
    },
    5872: function(t, e, n) {
        var r = n("d1a4");
        n.n(r).a
    },
    "69d9": function(t, e, n) {
        function r(t) {
            var e = t.split("/");
            return e[e.length - 1]
        }

        function i() {
            var t = window.location.search;
            if (t.length > 2) {
                t = t.substring(1, t.length);
                for (var e = t.split("&"), n = 0; n < e.length; n++) {
                    var r = e[n].split("=");
                    if ("path" == r[0]) return decodeURIComponent(r[1])
                }
            }
            return "/"
        }

        function o(t) {
            return 0 === t.indexOf("folder")
        }

        function a(t) {
            return 0 === t.indexOf("bmp") || 0 === t.indexOf("png") || 0 === t.indexOf("jpg") || 0 === t.indexOf("jpeg")
        }

        function s(t) {
            var e = t.toLowerCase();
            return e.endsWith(".js") || e.endsWith(".lua") || e.endsWith(".at") || e.endsWith(".ate")
        }

        function c(t) {
            return t.toLowerCase().endsWith(".at")
        }

        function u(t) {
            var e = t.toLowerCase();
            return e.endsWith(".js") ? "js" : e.endsWith(".lua") ? "lua" : e.endsWith(".txt") ? "txt" : e.endsWith(".bmp") || e.endsWith(".png") || e.endsWith(".jpg") || e.endsWith(".jpeg") ? "img" : "unkown"
        }
        n.r(e), n.d(e, "getFilename", function() {
            return r
        }), n.d(e, "getCurrentPath", function() {
            return i
        }), n.d(e, "isFolder", function() {
            return o
        }), n.d(e, "isImage", function() {
            return a
        }), n.d(e, "isScript", function() {
            return s
        }), n.d(e, "isLuaPackage", function() {
            return c
        }), n.d(e, "getFileType", function() {
            return u
        }), n("aef6"), n("386d"), n("28a5")
    },
    "7b34": function(t, e, n) {
        var r = n("03f5");
        n.n(r).a
    },
    "8bb3": function(t, e, n) {
        var r = n("b775");
        n.n(r).a
    },
    9128: function(t, e, n) {},
    "944d": function(t, e, n) {},
    "9c2a": function(t, e, n) {
        var r = n("f544");
        n.n(r).a
    },
    "9fe3": function(t, e, n) {
        var r = n("9128");
        n.n(r).a
    },
    b775: function(t, e, n) {},
    cfde: function(t, e, n) {
        var r = n("4621");
        n.n(r).a
    },
    d1a4: function(t, e, n) {},
    ef9e: function(t, e, n) {},
    f544: function(t, e, n) {}
});