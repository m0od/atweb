(function(t) {
	function e(e) {
		for (var o, a, c = e[0], s = e[1], u = e[2], f = 0, d = []; f < c.length; f++) a = c[f], r[a] && d.push(r[a][0]), r[a] = 0;
		for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o]);
		l && l(e);
		while (d.length) d.shift()();
		return i.push.apply(i, u || []), n()
	}

	function n() {
		for (var t, e = 0; e < i.length; e++) {
			for (var n = i[e], o = !0, c = 1; c < n.length; c++) {
				var s = n[c];
				0 !== r[s] && (o = !1)
			}
			o && (i.splice(e--, 1), t = a(a.s = n[0]))
		}
		return t
	}
	var o = {},
		r = {
			app: 0
		},
		i = [];

	function a(e) {
		if (o[e]) return o[e].exports;
		var n = o[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
	}
	a.m = t, a.c = o, a.d = function(t, e, n) {
		a.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, a.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, a.t = function(t, e) {
		if (1 & e && (t = a(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (a.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var o in t) a.d(n, o, function(e) {
				return t[e]
			}.bind(null, o));
		return n
	}, a.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return a.d(e, "a", e), e
	}, a.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, a.p = "/";
	var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
		s = c.push.bind(c);
	c.push = e, c = c.slice();
	for (var u = 0; u < c.length; u++) e(c[u]);
	var l = s;
	i.push([0, "chunk-vendors"]), n()
})({
	0: function(t, e, n) {
		t.exports = n("56d7")
	},
	"0f03": function(t, e, n) {},
	1183: function(t, e, n) {},
	1645: function(t, e, n) {},
	"1c4c": function(t, e, n) {
		"use strict";
		var o = n("64d5"),
			r = n.n(o);
		r.a
	},
	"1f48": function(t, e, n) {
		"use strict";
		var o = n("1645"),
			r = n.n(o);
		r.a
	},
	2966: function(t, e, n) {},
	"56d7": function(t, e, n) {
		"use strict";
		n.r(e);
		n("cadf"), n("551c"), n("f751"), n("097d");
		var o = n("2b0e"),
			r = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					attrs: {
						id: "app"
					}
				}, [n("Navbar", {
					staticClass: "top"
				}), n("div", {
					staticClass: "main",
					class: {
						hideLeft: !t.showLeft, showLeft: t.showLeft
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
				})], 1)
			},
			i = [],
			a = n("cebc"),
			c = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				// console.log(n);
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
				}, [n("octicon", {
					attrs: {
						name: "grabber"
					}
				})], 1), n("a", {
					staticClass: "navbar-brand",
					attrs: {
						href: "../"
					}
				}, [t._v("AutoTouch Dashboard")]), n("div", {
					staticClass: "navbar-nav ml-auto"
				}, [n("button", {
					staticClass: "btn btn-secondary btn-sm mr-2",
					on: {
						click: function(e) {
							// console.log(t);
							return t.snapShotLua(!t.snapshot)
						}
					}
				}, [t._v("Snapshot")]),

					n("button", {
					staticClass: "btn btn-secondary btn-sm",
					on: {
						click: function(e) {
							// alert(1)
							// return t.demo()
							return t.switchLog(!t.showLog)
						}
					}
				}, [t._v("Show Log")])])])])
			},
			s = [],
			u = {
				name: "Navbar",
				data: function() {
					return {
						showLeft: !0,
						showLog: !1,
						snapShot: !1
					}
				},
				methods: {
					snapShotLua: function(t) {
						// console.log(189);
						this.snapShot = t, this.$store.commit("setSnapShot", t)
						// alert(123)
					},
					switchLog: function(t) {
						this.showLog = t, this.$store.commit("setShowLog", t)
					},
					toggleLeft: function() {
						this.showLeft = !this.showLeft, this.$store.commit("setShowLeft", this.showLeft)
					}
				}
			},
			l = u,
			f = (n("aee5"), n("2877")),
			d = Object(f["a"])(l, c, s, !1, null, "1ffa1534", null),
			p = d.exports,
			h = function() {
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
					staticClass: "btn btn-secondary btn-sm mr-2",
					on: {
						click: function(e) {
							return e.stopPropagation(), e.preventDefault(), t.loadFiles()
						}
					}
				}, [t._v("Refresh")]), n("button", {
					staticClass: "btn btn-secondary btn-sm mr-2",
					on: {
						click: function(e) {
							return e.stopPropagation(), e.preventDefault(), t.newFolder()
						}
					}
				}, [t._v("New Folder")]),
					n("button", {
					staticClass: "btn btn-secondary btn-sm mr-2",
					on: {
						click: function(e) {
							return e.stopPropagation(), e.preventDefault(), t.newFile()
						}
					}
				}, [t._v("New Script")]),

				// 	n("button", {
				// 	directives: [{
				// 		name: "b-modal",
				// 		rawName: "v-b-modal.modal-upload-file",
				// 		modifiers: {
				// 			"modal-upload-file": !0
				// 		}
				// 	}],
				// 	staticClass: "btn btn-secondary btn-sm mr-2"
				// },
                //     [t._v("Upload File")])
				])], 1),
                    n("div", {
					staticClass: "file-list-wrapper"
				},
						[t._m(0), n("div", {
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
							src: t.fileIcon(e.iconName)
						}
					}), t.isFolder(e.iconName) || t.isLuaPackage(e.filePath) ? n("router-link", {
						attrs: {
							to: e.filePath
						}
					}, [t._v(t._s(t.fileName(e)))]) : n("a", {
						attrs: {
							href: "#"
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
					}, [n("octicon", {
						attrs: {
							name: "gear"
						}
					})], 1), n("b-dropdown-item", {
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
			m = [function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("table", {
					staticClass: "table table-striped",
					attrs: {
						border: "0",
						cellspacing: "0",
						cellpadding: "0"
					}
				}, [n("thead", [n("tr", [n("th", [t._v("Filename")]), n("th", [t._v("Control")]), n("th", [t._v("Options")])])])])
			}],
			g = (n("7f7f"), n("aef6"), n("6762"), n("2fdb"), function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("ol", {
					staticClass: "breadcrumb",
					domProps: {
						innerHTML: t._s(t.breadcrumbHTML)
					}
				})
			}),
			v = [],
			b = (n("28a5"), n("2f62")),
			y = {
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
				computed: Object(a["a"])({}, Object(b["b"])({
					currentDir: "getCurrentDir"
				})),
				methods: {
					updateBreadcrumbHTML: function() {
						for (var t = this.$store.state.currentDir, e = t.split("/"), n = "", o = "", r = 0; r < e.length; r++) 0 == r ? o = "/" : o += 1 == r ? e[r] : "/" + e[r], 0 == r ? n += '<li class="breadcrumb-item"><a href="#' + o + '">Home</a></li>' : r == e.length - 1 ? n += '<li class="breadcrumb-item active">' + e[r] + "</li>" : n += '<li class="breadcrumb-item"><a href="#' + o + '">' + e[r] + "</a></li>";
						this.breadcrumbHTML = n
					}
				}
			},
			w = y,
			C = (n("9fe3"), Object(f["a"])(w, g, v, !1, null, "1c8bdcae", null)),
			L = C.exports,
			F = n("69d9"),
			_ = n("bc3a"),
			x = {
				name: "FileList",
				components: {
					Breadcrumb: L
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
					}, 2e3)
				},
				beforeRouteUpdate: function(t, e, n) {
					n(), this.currentPath = this.$route.path, this.$store.commit("setCurrentDir", this.currentPath), this.loadFiles()
				},
				destroyed: function() {
					clearInterval(this.refreshIntervalId)
				},
				methods: {
					clickOnFile: function(t) {
						// console.log(t);
						this.$store.commit("setShowLog", !1);
						var e = F.getFileType(t.filePath);
						"lua" !== e && "txt" !== e && "img" !== e || this.getFileContent(t.filePath)
					},
					hasFiles: function() {
						return this.files && this.files.length > 0
					},
					loadFiles: function() {
						var t = this,
							e = this.currentPath,
							n = "/files?path=" + encodeURIComponent(e);
						_.get(n).then(function(e) {
							t.files = e.data.files
						}).catch(function(e) {
							t.$notify({
								group: "main",
								type: "error",
								text: e
							})
						})
					},
					getRunningScripts: function() {
						var t = this,
							e = "/runningScripts";
						_.get(e).then(function(e) {
							t.runningScripts = e.data
						}).catch(function(t) {
							// console.log(t)
						})
					},
					fileName: function(t) {
						var e = F.getFilename(t.filePath);
						return e
					},
					fileIcon: function(t) {
						return "/icons/" + t
					},
					fileNameLink: function(t) {
						var e, n = t.filePath,
							o = t.iconName;
						return e = F.isFolder(o) ? "/?path=" + encodeURIComponent(n) : F.isImage(o) ? "/file/view?path=" + encodeURIComponent(n) : "/file/edit?path=" + encodeURIComponent(n), e
					},
					play: function(t) {
						var e = this,
							n = "/control/start_playing?path=" + encodeURIComponent(t);
						_.get(n).then(function(t) {
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
						_.get(n).then(function(t) {
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
						var e = this,
							n = prompt("Please input the new filename", "");
						if (n) {
							var o = e.currentPath + "/" + n;
							r(t, o)
						}

						function r(t, n) {
							var o = "/file/rename?path=" + encodeURIComponent(t) + "&newPath=" + encodeURIComponent(n);
							_.get(o).then(function(t) {
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
					deleteFile: function(t) {
						var e = this;
						if (confirm("Are you sure to delete the file?")) {
							var n = "/file/delete?path=" + encodeURIComponent(t);
							_.get(n).then(function(t) {
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
						return F.isFolder(t)
					},
					isLuaPackage: function(t) {
						return F.isLuaPackage(t)
					},
					isScript: function(t) {
						return F.isScript(t)
					},
					isRunning: function(t) {
						return this.runningScripts.includes(t)
					},
					newFile: function() {
						var t = this,
							e = prompt("Please input the filename", "");
						if (e) {
							e.toLowerCase().endsWith(".txt") || e.toLowerCase().endsWith(".lua") || (e += ".lua");
							var n = t.currentPath + "/" + e;
							o(n)
						}

						function o(e) {
							var n = "/file/new?path=" + encodeURIComponent(e);
							_.get(n).then(function(e) {
								var n = e.data;
								"success" == n.status ? t.loadFiles() : t.$notify({
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
					newFolder: function() {
						var t = this,
							e = prompt("Please input the folder name", "");
						if (e) {
							var n = t.currentPath + "/" + e;
							o(n)
						}

						function o(e) {
							var n = "/file/newFolder?path=" + encodeURIComponent(e);
							_.get(n).then(function(e) {
								var n = e.data;
								"success" == n.status ? t.loadFiles() : t.$notify({
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
					uploadFile: function() {
						var t = this,
							e = document.getElementById("file").files[0];
						if (e) {
							var n = this.currentPath + "/" + e.name,
								o = "/file/upload?path=" + encodeURIComponent(n),
								r = new FormData;
							r.append("file", e), _.post(o, r, {
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
						_.get(n).then(function(n) {
							var o = n.data;
							if ("success" === o.status) {
								var r = o.content;
								e.$store.commit("setCurrentFile", {
									filePath: t,
									content: r
								})
							} else e.$notify({
								group: "main",
								type: "error",
								text: o.info
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
			},
			P = x,
			$ = (n("d895"), Object(f["a"])(P, h, m, !1, null, "24f090b6", null)),
			S = $.exports,
			I = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", [t.showLoading ? n("div", {
					staticClass: "loading"
				}, [n("bounce-loader")], 1) : t._e(), t.showLog ? n("div", [n("LogView")], 1) : [n("Editor", {
					style: {
						display: "lua" == t.currentFileType || "txt" == t.currentFileType ? "block" : "none"
					}
				}), "img" == t.currentFileType ? n("div", [n("ImageView")], 1) : t._e()]], 2)
			},
			O = [],
			k = function() {
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
					staticClass: "d-flex flex-row align-items-center"
				}, [t.code ? [n("div", [t._v("(Ctrl+r,âŒ˜+r)")]), n("button", {
					staticClass: "btn btn-secondary btn-sm m-2",
					on: {
						click: function(e) {
							return t.play()
						}
					}
				}, [t._v("Play")]), n("div", [t._v("(Ctrl+s,âŒ˜+s)")]), t.isSaving ? n("button", {
					staticClass: "btn btn-secondary btn-sm ml-2",
					attrs: {
						disabled: ""
					}
				}, [t._v("Saving")]) : n("button", {
					staticClass: "btn btn-secondary btn-sm ml-2",
					on: {
						click: function(e) {
							return t.saveFile()
						}
					}
				}, [t._v("Save")])] : t._e()], 2)]), n("codemirror", {
					ref: "editor",
					attrs: {
						options: t.cmOptions
					},
					model: {
						value: t.code,
						callback: function(e) {
							t.code = e
						},
						expression: "code"
					}
				})], 1)
			},
			j = [],
			D = (n("4917"), n("8f94")),
			R = n.n(D),
			U = (n("8eb3"), n("8c2e"), n("bc3a")),
			T = {
				name: "Editor",
				components: {
					codemirror: D["codemirror"]
				},
				data: function() {
					return {
						isSaving: !1,
						code: this.currentScript,
						cmOptions: {
							mode: "text/x-lua",
							indentUnit: 4,
							tabSize: 4,
							indentWithTabs: !0,
							smartIndent: !0,
							lineNumbers: !0,
							line: !0
						}
					}
				},
				methods: {
					onCmReady: function(t) {
						console.log("the editor is readied!", t)
					},
					onCmFocus: function(t) {
						console.log("the editor is focus!", t)
					},
					onCmCodeChange: function(t) {
						console.log("this is new code", t), this.code = t
					},
					saveFile: function() {
						var t = this;
						t.isSaving = !0;
						var e = this.currentScript.filePath,
							n = this.codemirror.getValue(),
							o = "/file/update?path=" + encodeURIComponent(e),
							r = "content=" + encodeURIComponent(n);
						U.post(o, r).then(function(o) {
							var r = o.data;
							"success" == r.status ? t.$store.commit("setCurrentFile", {
								filePath: e,
								content: n
							}) : t.$notify({
								group: "main",
								type: "error",
								text: r.info
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
						83 == t.keyCode && (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? (t.preventDefault(), this.saveFile()) : 82 == t.keyCode && (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) && (t.preventDefault(), this.play())
					},
					play: function() {
						var t = this,
							e = this.currentScript.filePath,
							n = "/control/start_playing?path=" + encodeURIComponent(e);
						U.get(n).then(function(e) {
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
					}
				},
				computed: Object(a["a"])({}, Object(b["b"])({
					currentScript: "getCurrentFile"
				}), {
					codemirror: function() {
						return this.$refs.editor.codemirror
					}
				}),
				watch: {
					currentScript: function(t) {
						this.code = t.content
					}
				},
				created: function() {
					document.addEventListener("keydown", this.onHotKey, !1)
				},
				beforeDestroy: function() {
					window.removeEventListener("keydown", this.onkey)
				}
			},
			E = T,
			M = Object(f["a"])(E, k, j, !1, null, "62bbbe0a", null),
			N = M.exports,
			W = function() {
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
			H = [],
			B = n("bc3a"),
			V = {
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
						t && e.$store.commit("setShowLoading", !0);
						var n = "/log";
						B.get(n).then(function(t) {
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
						var t = this,
							e = "/log/clear";
						B.get(e).then(function(e) {
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
			},
			K = V,
			z = (n("b315"), Object(f["a"])(K, W, H, !1, null, "364fe08a", null)),
			A = z.exports,
			J = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "img-view"
				}, [n("div", {
					staticClass: "toolbar"
				}), n("div", {
					staticClass: "img-container"
				}, [n("img", {
					attrs: {
						src: "" + t.currentFile.content,
						alt: ""
					}
				})])])
			},
			q = [],
			G = {
				name: "ImageView",
				computed: Object(a["a"])({}, Object(b["b"])({
					currentFile: "getCurrentFile"
				}))
			},
			Q = G,
			X = (n("1c4c"), Object(f["a"])(Q, J, q, !1, null, "3f49a1c8", null)),
			Y = X.exports,
			Z = n("00d3"),
			tt = n("69d9"),
			et = {
				name: "MainField",
				components: {
					Editor: N,
					LogView: A,
					ImageView: Y,
					BounceLoader: Z["a"]
				},
				data: function() {
					return {
						currentFileType: null
					}
				},
				computed: Object(a["a"])({}, Object(b["b"])({
					currentFile: "getCurrentFile",
					showLog: "getShowLog",
					showLoading: "getShowLoading"
				})),
				watch: {
					currentFile: function(t) {
						this.currentFileType = tt.getFileType(t.filePath)
					}
				}
			},
			nt = et,
			ot = (n("736d"), Object(f["a"])(nt, I, O, !1, null, "16225b67", null)),
			rt = ot.exports,
			it = function() {
				var t = this,
					e = t.$createElement;
				t._self._c;
				return t._m(0)
			},
			at = [function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "footer"
				}, [n("div")])
			}],
			ct = {
				name: "Footer"
			},
			st = ct,
			ut = (n("1f48"), Object(f["a"])(st, it, at, !1, null, "0667b50f", null)),
			lt = ut.exports,
			ft = n("8c4f"),
			dt = [{
				path: "**",
				component: S
			}],
			pt = new ft["a"]({
				routes: dt
			}),
			ht = {
				name: "app",
				router: pt,
				components: {
					Navbar: p,
					MainField: rt,
					Footer: lt
				},
				computed: Object(a["a"])({}, Object(b["b"])({
					showLeft: "getShowLeft"
				}))
			},
			mt = ht,
			gt = (n("cfd7"), Object(f["a"])(mt, r, i, !1, null, "b745000a", null)),
			vt = gt.exports,
			bt = n("9f7b"),
			yt = n.n(bt),
			wt = n("8ab8"),
			Ct = n("ee98"),
			Lt = n.n(Ct);
		n("b67b"), n("bb11"), n("944d"), n("a7be");
		o["default"].use(ft["a"]), o["default"].use(b["a"]), o["default"].use(yt.a), o["default"].use(Lt.a), o["default"].use(R.a), o["default"].component("octicon", wt["a"]);
		var Ft = new b["a"].Store({
			state: {
				showLoading: !1,
				showLeft: !0,
				showLog: !1,
				snapshot: !1,
				currentDir: null,
				currentFile: {
					filePath: null,
					content: null
				}
			},
			mutations: {
				setShowLoading: function(t, e) {
					t.showLoading = e
				},
				setShowLeft: function(t, e) {
					// console.log(t);
					// console.log(e);
					t.showLeft = e
				},
				setShowLog: function(t, e) {
					t.showLog = e
				},
				setSnapShot: function(t, e) {
					try {
						e = "/../Library/LuaLibraries/snapshot.lua";
						var xmlHttp = new XMLHttpRequest();
						var url = "/control/start_playing?path=" + encodeURIComponent(e);
						// console.log(url);
						xmlHttp.open("GET", url, true);
						xmlHttp.send(null);
					}catch(err) {
						alert(err.toString());
					}
					// var t = this,
					// 	e = "/../Library/LuaLibraries/snapshot.lua",
					// 	n = "/control/start_playing?path=" + encodeURIComponent(e);
					// t.snapshot = e;
					// alert(1)
					// var t = this,
					// 	e = this.currentScript.filePath,
					// 	n = "/control/start_playing?path=" + encodeURIComponent(e);
					// U.get(n).then(function(e) {
					// 	var n = e.data;
					// 	"success" != n.status && t.$notify({
					// 		group: "main",
					// 		type: "error",
					// 		text: n.info
					// 	})
					// }).catch(function(e) {
					// 	// t.$notify({
					// 	// 	group: "main",
					// 	// 	type: "error",
					// 	// 	text: e
					// 	// })
					// })
				},
				setCurrentDir: function(t, e) {
					t.currentDir = e
				},
				setCurrentFile: function(t, e) {
					t.currentFile = e
				}
			},
			getters: {
				getShowLoading: function(t) {
					return t.showLoading
				},
				getShowLeft: function(t) {
					return t.showLeft
				},
				getShowLog: function(t) {
					return t.showLog
				},
				getSnapshot: function(t) {
					return t.snapshot
				},
				getCurrentDir: function(t) {
					return t.currentDir
				},
				getCurrentFile: function(t) {
					return t.currentFile
				}
			}
		});
		o["default"].config.productionTip = !1, new o["default"]({
			store: Ft,
			render: function(t) {
				return t(vt)
			}
		}).$mount("#app")
	},
	"64d5": function(t, e, n) {},
	"69d9": function(t, e, n) {
		"use strict";
		n.r(e), n.d(e, "getFilename", function() {
			return o
		}), n.d(e, "getCurrentPath", function() {
			return r
		}), n.d(e, "isFolder", function() {
			return i
		}), n.d(e, "isImage", function() {
			return a
		}), n.d(e, "isScript", function() {
			return c
		}), n.d(e, "isLuaPackage", function() {
			return s
		}), n.d(e, "isLuaFile", function() {
			return u
		}), n.d(e, "getFileType", function() {
			return l
		});
		n("aef6"), n("386d"), n("28a5");

		function o(t) {
			var e = t.split("/");
			return e[e.length - 1]
		}

		function r() {
			var t = window.location.search;
			if (t.length > 2) {
				t = t.substring(1, t.length);
				for (var e = t.split("&"), n = 0; n < e.length; n++) {
					var o = e[n].split("=");
					if ("path" == o[0]) return decodeURIComponent(o[1])
				}
			}
			return "/"
		}

		function i(t) {
			return 0 === t.indexOf("folder")
		}

		function a(t) {
			return 0 === t.indexOf("bmp") || 0 === t.indexOf("png") || 0 === t.indexOf("jpg") || 0 === t.indexOf("jpeg")
		}

		function c(t) {
			var e = t.toLowerCase();
			return e.endsWith(".lua") || e.endsWith(".at") || e.endsWith(".ate")
		}

		function s(t) {
			var e = t.toLowerCase();
			return e.endsWith(".at")
		}

		function u(t) {
			var e = t.toLowerCase();
			return e.endsWith(".lua")
		}

		function l(t) {
			var e = t.toLowerCase();
			return e.endsWith(".lua") ? "lua" : e.endsWith(".txt") ? "txt" : e.endsWith(".bmp") || e.endsWith(".png") || e.endsWith(".jpg") || e.endsWith(".jpeg") ? "img" : "unkown"
		}
	},
	"736d": function(t, e, n) {
		"use strict";
		var o = n("e8be"),
			r = n.n(o);
		r.a
	},
	"944d": function(t, e, n) {},
	"9fe3": function(t, e, n) {
		"use strict";
		var o = n("2966"),
			r = n.n(o);
		r.a
	},
	aee5: function(t, e, n) {
		"use strict";
		var o = n("bc10"),
			r = n.n(o);
		r.a
	},
	b315: function(t, e, n) {
		"use strict";
		var o = n("0f03"),
			r = n.n(o);
		r.a
	},
	bc10: function(t, e, n) {},
	cfd7: function(t, e, n) {
		"use strict";
		var o = n("1183"),
			r = n.n(o);
		r.a
	},
	d5c8: function(t, e, n) {},
	d895: function(t, e, n) {
		"use strict";
		var o = n("d5c8"),
			r = n.n(o);
		r.a
	},
	e8be: function(t, e, n) {}
});
