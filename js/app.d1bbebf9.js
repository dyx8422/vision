(function (t) {
    function s(s) {
        for (var e, l, n = s[0], d = s[1], o = s[2], h = 0, u = []; h < n.length; h++) l = n[h], Object.prototype.hasOwnProperty.call(a, l) && a[l] && u.push(a[l][0]), a[l] = 0;
        for (e in d) Object.prototype.hasOwnProperty.call(d, e) && (t[e] = d[e]);
        c && c(s);
        while (u.length) u.shift()();
        return r.push.apply(r, o || []), i()
    }

    function i() {
        for (var t, s = 0; s < r.length; s++) {
            for (var i = r[s], e = !0, n = 1; n < i.length; n++) {
                var d = i[n];
                0 !== a[d] && (e = !1)
            }
            e && (r.splice(s--, 1), t = l(l.s = i[0]))
        }
        return t
    }
    var e = {},
        a = {
            app: 0
        },
        r = [];

    function l(s) {
        if (e[s]) return e[s].exports;
        var i = e[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(i.exports, i, i.exports, l), i.l = !0, i.exports
    }
    l.m = t, l.c = e, l.d = function (t, s, i) {
        l.o(t, s) || Object.defineProperty(t, s, {
            enumerable: !0,
            get: i
        })
    }, l.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function (t, s) {
        if (1 & s && (t = l(t)), 8 & s) return t;
        if (4 & s && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (l.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & s && "string" != typeof t)
            for (var e in t) l.d(i, e, function (s) {
                return t[s]
            }.bind(null, e));
        return i
    }, l.n = function (t) {
        var s = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return l.d(s, "a", s), s
    }, l.o = function (t, s) {
        return Object.prototype.hasOwnProperty.call(t, s)
    }, l.p = "/";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = n.push.bind(n);
    n.push = s, n = n.slice();
    for (var o = 0; o < n.length; o++) s(n[o]);
    var c = d;
    r.push([0, "chunk-vendors"]), i()
})({
    0: function (t, s, i) {
        t.exports = i("56d7")
    },
    4942: function (t, s) {
        function i() {
            let t = document.documentElement.clientWidth || document.body.clientWidth;
            var s = t / 17.85;
            document.documentElement.style.fontSize = s + "px"
        }
        i(), window.onresize = function () {
            i()
        }
    },
    "56d7": function (t, s, i) {
        "use strict";
        i.r(s);
        var e = i("2b0e"),
            a = function () {
                var t = this,
                    s = t._self._c;
                return s("div", {
                    attrs: {
                        id: "app"
                    }
                }, [s("div", {
                    staticClass: "tab"
                }, [s("router-link", {
                    class: ["Home" == t.luyou ? "active" : ""],
                    attrs: {
                        to: "/"
                    }
                }, [t._v("看板主页")]), s("router-link", {
                    class: ["Peizhi" == t.luyou ? "active" : ""],
                    attrs: {
                        to: "/Peizhi"
                    }
                }, [t._v("配置显示")]), s("router-link", {
                    class: ["Dingdan" == t.luyou ? "active" : ""],
                    attrs: {
                        to: "/Dingdan"
                    }
                }, [t._v("订单数据")]), s("router-link", {
                    class: ["Shixiang" == t.luyou ? "active" : ""],
                    attrs: {
                        to: "/Shixiang"
                    }
                }, [t._v("事项总览")]), s("router-link", {
                    class: ["Liulan" == t.luyou ? "active" : ""],
                    attrs: {
                        to: "/Liulan"
                    }
                }, [t._v("浏览统计")])], 1), s("router-view", {
                    staticClass: "main"
                })], 1)
            },
            r = [],
            l = {
                data() {
                    return {
                        luyou: "Home"
                    }
                },
                mounted() {
                    this.luyou = this.$route.name
                },
                watch: {
                    $route(t, s) {
                        this.luyou = t.name
                    }
                }
            },
            n = l,
            d = (i("e497"), i("2877")),
            o = Object(d["a"])(n, a, r, !1, null, null, null),
            c = o.exports,
            h = i("8c4f"),
            u = function () {
                var t = this,
                    s = t._self._c;
                t._self._setupProxy;
                return s("div", {
                    staticClass: "home"
                }, [t.tjxflag ? s("div", {
                    staticClass: "dialog1"
                }, [s("div", {
                    staticClass: "dialog1_item"
                }, [s("p", [t._v("请选择统计项")]), s("div", {
                    staticClass: "dialog1_item_main"
                }, t._l(t.tjxsjarr, (function (i, e) {
                    return s("div", {
                        key: e,
                        staticClass: "dialog1_item_main_ipt"
                    }, [s("input", {
                        attrs: {
                            type: "checkbox",
                            name: "",
                            id: ""
                        },
                        domProps: {
                            checked: "1" == i.zt
                        },
                        on: {
                            click: function (s) {
                                return t.tjxclick(e)
                            }
                        }
                    }), t._v(t._s(i.name) + " ")])
                })), 0), s("div", {
                    staticClass: "dialog1_bottom"
                }, [s("button", {
                    on: {
                        click: function (s) {
                            return t.tjxsjclick()
                        }
                    }
                }, [t._v("确定")]), s("button", {
                    on: {
                        click: function (s) {
                            return t.tjxflagclick()
                        }
                    }
                }, [t._v("取消")])])])]) : t._e(), s("div", {
                    staticClass: "home_l"
                }, [t._m(0), s("ul", {
                    staticClass: "home_l_ul"
                }, t._l(t.tpzsjarr, (function (i, e) {
                    return s("li", {
                        key: e,
                        staticClass: "home_l_li"
                    }, [s("div", {
                        staticClass: "home_l_img"
                    }, [s("img", {
                        attrs: {
                            src: i.img
                        }
                    })]), s("ul", {
                        staticClass: "home_l_list"
                    }, t._l(i.children, (function (i, e) {
                        return s("li", {
                            key: e
                        }, [s("span", {
                            staticClass: "home_l_list_span"
                        }, [t._v("· " + t._s(i.item))]), s("CountTo", {
                            staticClass: "home_l_list_CountTo",
                            attrs: {
                                startVal: i.oldvalue,
                                endVal: i.value,
                                duration: 1e3
                            }
                        }), s("div", {
                            staticClass: "clear"
                        })], 1)
                    })), 0)])
                })), 0)]), s("div", {
                    staticClass: "home_mid"
                }, [s("div", {
                    staticClass: "home_mid_top"
                }, [s("div", {
                    staticClass: "home_mid_top_title"
                }, [s("p", [t._v(t._s(t.getdateYMD(new Date)))]), s("p", [t._v("星期" + t._s(t.getdatew(new Date)))])]), s("div", {
                    staticClass: "home_mid_top_bottom"
                }, [t._l(t.midsjarr, (function (i, e) {
                    return s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "1" == i.zt,
                            expression: "item.zt == '1'"
                        }],
                        key: e,
                        staticClass: "home_mid_top_bottom_item"
                    }, [s("p", [t._v(t._s(i.name))]), s("div", {
                        staticClass: "home_mid_top_bottom_item_bg"
                    }, [s("CountTo", {
                        staticClass: "home_mid_top_bottom_item_bg_CountTo",
                        attrs: {
                            startVal: JSON.parse(i.oldval),
                            endVal: JSON.parse(i.val),
                            duration: 1e3
                        }
                    })], 1), "" != i.children ? s("div", ["" != i.children ? s("p", [t._v(t._s(i.children.item))]) : t._e(), "" != i.children ? s("CountTo", {
                        staticClass: "home_mid_top_bottom_item_lastp",
                        attrs: {
                            startVal: JSON.parse(i.children.oldvalue),
                            endVal: JSON.parse(i.children.value),
                            duration: 1e3
                        }
                    }) : t._e()], 1) : t._e()])
                })), s("div", {
                    staticClass: "home_mid_top_bottom_item_slh"
                }, [s("span", {
                    staticClass: "slh",
                    on: {
                        click: function (s) {
                            return t.tjxflagclick()
                        }
                    }
                }, [t._v("···")])])], 2)]), t._m(1)]), s("div", {
                    staticClass: "home_r"
                }, [s("div", {
                    staticClass: "home_r_top"
                }, [s("div", {
                    staticClass: "home_r_top_main"
                }, [t._m(2), s("ul", {
                    staticClass: "home_r_top_list"
                }, [t._m(3), s("transition-group", {
                    staticClass: "home_r_top_list_transition",
                    attrs: {
                        name: "flip-list"
                    }
                }, t._l(t.ddsjarr.slice(0, 8), (function (i, e) {
                    return s("li", {
                        key: "" + i.id,
                        staticClass: "home_r_top_listli"
                    }, [s("span", {
                        staticClass: "cm"
                    }, [t._v(t._s(i.cm))]), s("span", {
                        staticClass: "ddpl"
                    }, [t._v(t._s(i.ddpl))]), s("span", {
                        staticClass: "sl"
                    }, [t._v(t._s(i.sl))]), s("span", {
                        staticClass: "ddsj"
                    }, [t._v(t._s(t.getdateMDhm(i.ddsj)))])])
                })), 0)], 1)])]), s("div", {
                    staticClass: "home_r_bottom",
                    attrs: {
                        id: "home_r_bottom"
                    }
                }, [s("div", {
                    staticClass: "home_r_bottom_main"
                }, [t._m(4), s("ul", {
                    staticClass: "home_r_bottom_list",
                    attrs: {
                        id: "home_r_bottom_list"
                    }
                }, [t._m(5), s("transition-group", {
                    staticClass: "home_r_bottom_list_transition",
                    attrs: {
                        name: "flip-list"
                    }
                }, t._l(t.sxsjarr.slice(0, 5), (function (i, e) {
                    return s("li", {
                        key: "" + i.id,
                        staticClass: "home_r_bottom_listli"
                    }, [s("span", {
                        staticClass: "jtsj"
                    }, [t._v(t._s(i.jtsj))]), s("span", {
                        staticClass: "kssj"
                    }, [t._v(t._s(t.getdateMD(i.kssj)))]), "0" == i.zt ? s("span", {
                        staticClass: "zt0"
                    }, [t._v("未完")]) : t._e(), "1" == i.zt ? s("span", {
                        staticClass: "zt1"
                    }, [t._v("完成")]) : t._e()])
                })), 0)], 1)])])])])
            },
            m = [function () {
                var t = this,
                    s = t._self._c;
                t._self._setupProxy;
                return s("div", {
                    staticClass: "home_l_title"
                }, [s("p", [t._v("平台总数据")])])
            }, function () {
                var t = this,
                    s = t._self._c;
                t._self._setupProxy;
                return s("div", {
                    staticClass: "home_mid_bottom"
                }, [s("div", {
                    staticStyle: {
                        width: "50%",
                        height: "100%",
                        position: "relative"
                    }
                }, [s("div", {
                    staticClass: "home_mid_bottom_l",
                    staticStyle: {
                        width: "100%",
                        height: "100%"
                    },
                    attrs: {
                        id: "home_mid_bottom_l"
                    }
                }), s("span", {
                    staticClass: "slh"
                }, [t._v("···")])]), s("div", {
                    staticStyle: {
                        width: "46%",
                        height: "100%",
                        position: "relative"
                    }
                }, [s("div", {
                    staticClass: "home_mid_bottom_r",
                    staticStyle: {
                        width: "100%",
                        height: "100%"
                    },
                    attrs: {
                        id: "home_mid_bottom_r"
                    }
                }), s("span", {
                    staticClass: "slh"
                }, [t._v("···")])])])
            }, function () {
                var t = this,
                    s = t._self._c;
                t._self._setupProxy;
                return s("div", {
                    staticClass: "home_r_top_title"
                }, [s("p", [t._v("订单")]), s("span", {
                    staticClass: "slh"
                }, [t._v("···")])])
            }, function () {
                var t = this,
                    s = t._self._c;
                t._self._setupProxy;
                return s("li", {
                    staticClass: "home_r_top_listtitle"
                }, [s("span", [t._v("村民")]), s("span", [t._v("订单品类")]), s("span", [t._v("数量")]), s("span", [t._v("订单时间")])])
            }, function () {
                var t = this,
                    s = t._self._c;
                t._self._setupProxy;
                return s("div", {
                    staticClass: "home_r_bottom_title"
                }, [s("p", [t._v("事项")]), s("span", {
                    staticClass: "slh"
                }, [t._v("···")])])
            }, function () {
                var t = this,
                    s = t._self._c;
                t._self._setupProxy;
                return s("li", {
                    staticClass: "home_r_bottom_listtitle"
                }, [s("span", [t._v("具体事件")]), s("span", [t._v("开始时间")]), s("span", [t._v("状态")])])
            }],
            p = (i("14d9"), i("ec1b")),
            _ = i.n(p),
            v = i("313e"),
            j = {
                name: "Home",
                components: {
                    CountTo: _.a
                },
                data() {
                    return {
                        id1: 9,
                        id2: 6,
                        myChart1: "",
                        myChart2: "",
                        tpzsj: [{
                            id: 1,
                            img: "https://s1.ax1x.com/2022/11/12/ziVnOS.png",
                            children: [{
                                cid: 1,
                                pid: 1,
                                item: "扫码",
                                value: 2339,
                                oldvalue: 0
                            }, {
                                cid: 2,
                                pid: 1,
                                item: "分享",
                                value: 1206,
                                oldvalue: 0
                            }]
                        }, {
                            id: 2,
                            img: "https://s1.ax1x.com/2022/11/12/ziV3Yn.png",
                            children: [{
                                cid: 3,
                                pid: 2,
                                item: "通话",
                                value: 277,
                                oldvalue: 0
                            }, {
                                cid: 4,
                                pid: 2,
                                item: "到访",
                                value: 145,
                                oldvalue: 0
                            }]
                        }, {
                            id: 3,
                            img: "https://s1.ax1x.com/2022/11/12/ziV1Fs.png",
                            children: [{
                                cid: 5,
                                pid: 3,
                                item: "订单",
                                value: 870,
                                oldvalue: 0
                            }]
                        }, {
                            id: 4,
                            img: "https://s1.ax1x.com/2022/11/12/ziVQoj.png",
                            children: [{
                                cid: 6,
                                pid: 4,
                                item: "发布品类",
                                value: 30,
                                oldvalue: 0
                            }]
                        }, {
                            id: 5,
                            img: "https://s1.ax1x.com/2022/11/12/ziVMwQ.png",
                            children: [{
                                cid: 7,
                                pid: 5,
                                item: "事项",
                                value: 288,
                                oldvalue: 0
                            }]
                        }],
                        tpzsjarr: [],
                        midsj: [{
                            id: 1,
                            name: "扫码人次",
                            val: "23",
                            oldval: "0",
                            children: {
                                item: "当月累积",
                                value: "536",
                                oldvalue: "0"
                            },
                            zt: "1"
                        }, {
                            id: 2,
                            name: "通话人次",
                            val: "20",
                            oldval: "0",
                            children: {
                                item: "当月累积",
                                value: "315",
                                oldvalue: "0"
                            },
                            zt: "1"
                        }, {
                            id: 3,
                            name: "到访人次",
                            val: "10",
                            oldval: "0",
                            children: {
                                item: "当月累积",
                                value: "200",
                                oldvalue: "0"
                            },
                            zt: "1"
                        }, {
                            id: 4,
                            name: "语音搜索次数",
                            val: "36",
                            oldval: "0",
                            children: {
                                item: "当月累积",
                                value: "276",
                                oldvalue: "0"
                            },
                            zt: "1"
                        }, {
                            id: 5,
                            name: "本月事项",
                            val: "21",
                            oldval: "0",
                            children: "",
                            zt: "1"
                        }, {
                            id: 6,
                            name: "本月完成事项",
                            val: "18",
                            oldval: "0",
                            children: "",
                            zt: "1"
                        }, {
                            id: 7,
                            name: "统计项7",
                            val: "100",
                            oldval: "0",
                            children: {
                                item: "当月累积",
                                value: "300",
                                oldvalue: "0"
                            },
                            zt: "0"
                        }, {
                            id: 8,
                            name: "统计项8",
                            val: "200",
                            oldval: "0",
                            children: "",
                            zt: "0"
                        }],
                        midsjarr: [],
                        tjxflag: !1,
                        tjxsjarr: [],
                        tb1sj: [{
                            id: 1,
                            dd: "土鸡",
                            cs: "24"
                        }, {
                            id: 2,
                            dd: "鸡蛋",
                            cs: "40"
                        }, {
                            id: 3,
                            dd: "鸭蛋",
                            cs: "30"
                        }, {
                            id: 4,
                            dd: "橘子",
                            cs: "16"
                        }, {
                            id: 5,
                            dd: "兔子",
                            cs: "14"
                        }, {
                            id: 6,
                            dd: "葡萄",
                            cs: "22"
                        }, {
                            id: 7,
                            dd: "红薯",
                            cs: "26"
                        }],
                        tb1sjarr: [],
                        tb2sj: [{
                            id: 1,
                            dd: "李国刚",
                            cs: "300"
                        }, {
                            id: 2,
                            dd: "张会强",
                            cs: "270"
                        }, {
                            id: 3,
                            dd: "杨明台",
                            cs: "250"
                        }, {
                            id: 4,
                            dd: "周丽琼",
                            cs: "230"
                        }, {
                            id: 5,
                            dd: "刘慧英",
                            cs: "200"
                        }],
                        tb2sjarr: [],
                        ddsj: [{
                            id: 1,
                            cm: "周丽琼",
                            ddpl: "鸭蛋",
                            sl: "20",
                            ddsj: "1667621820000"
                        }, {
                            id: 2,
                            cm: "李涛",
                            ddpl: "小山猪",
                            sl: "1",
                            ddsj: "1667736780000"
                        }, {
                            id: 3,
                            cm: "张德平",
                            ddpl: "土鸡",
                            sl: "2",
                            ddsj: "1667741700000"
                        }, {
                            id: 4,
                            cm: "刘慧英",
                            ddpl: "鸡蛋",
                            sl: "20",
                            ddsj: "1667743260000"
                        }, {
                            id: 5,
                            cm: "杨军",
                            ddpl: "橘子",
                            sl: "10",
                            ddsj: "1667789100000"
                        }, {
                            id: 6,
                            cm: "杨明台",
                            ddpl: "兔子",
                            sl: "1",
                            ddsj: "1667794260000"
                        }, {
                            id: 7,
                            cm: "李国刚",
                            ddpl: "土鸡",
                            sl: "1",
                            ddsj: "1667794800000"
                        }, {
                            id: 8,
                            cm: "张会强",
                            ddpl: "鸡蛋",
                            sl: "10",
                            ddsj: "1667802000000"
                        }],
                        ddsjarr: [],
                        sxsj: [{
                            id: 1,
                            jtsj: "全村义诊",
                            kssj: "1664208000000",
                            zt: "1"
                        }, {
                            id: 2,
                            jtsj: "接洽眉山市政府领导视察",
                            kssj: "1665331200000",
                            zt: "1"
                        }, {
                            id: 3,
                            jtsj: "家禽疫苗",
                            kssj: "1666281600000",
                            zt: "1"
                        }, {
                            id: 4,
                            jtsj: "新型葡萄种子分发",
                            kssj: "1667577600000",
                            zt: "1"
                        }, {
                            id: 5,
                            jtsj: "统计家庭数据",
                            kssj: "1667750400000",
                            zt: "0"
                        }],
                        sxsjarr: []
                    }
                },
                computed: {
                    tpzsjWatch: function () {
                        return JSON.parse(JSON.stringify(this.tpzsj))
                    },
                    midsjWatch: function () {
                        return JSON.parse(JSON.stringify(this.midsj))
                    },
                    tb1sjWatch: function () {
                        return JSON.parse(JSON.stringify(this.tb1sj))
                    },
                    tb2sjWatch: function () {
                        return JSON.parse(JSON.stringify(this.tb2sj))
                    },
                    ddsjWatch: function () {
                        return JSON.parse(JSON.stringify(this.ddsj))
                    },
                    sxsjWatch: function () {
                        return JSON.parse(JSON.stringify(this.sxsj))
                    }
                },
                methods: {
                    tjxflagclick() {
                        1 == this.tjxflag ? this.tjxflag = !1 : this.tjxflag = !0
                    },
                    tjxclick(t) {
                        console.log(t), "1" == this.tjxsjarr[t].zt ? this.tjxsjarr[t].zt = "0" : this.tjxsjarr[t].zt = "1"
                    },
                    tjxsjclick() {
                        this.midsj = this.tjxsjarr, this.midsjarr = this.midsj, this.tjxflag = !1
                    },
                    time() {
                        setInterval(() => {
                            this.tpzsj[0].children[0].value = this.tpzsj[0].children[0].value + 5, this.tpzsj[0].children[1].value = this.tpzsj[0].children[1].value + 10, this.tpzsj[1].children[0].value = this.tpzsj[1].children[0].value - 2, this.tpzsj[2].children[0].value = this.tpzsj[2].children[0].value + 2, this.tpzsj[4].children[0].value = this.tpzsj[4].children[0].value - 1, this.midsj[0].val = JSON.parse(this.midsj[0].val) + 1, this.midsj[0].children.value = JSON.parse(this.midsj[0].children.value) + 4, this.midsj[1].val = JSON.parse(this.midsj[1].val) + 2, this.midsj[2].val = JSON.parse(this.midsj[2].val) + 4, this.midsj[3].val = JSON.parse(this.midsj[3].val) + 8, this.midsj[3].children.value = JSON.parse(this.midsj[3].children.value) - 4, this.midsj[4].val = JSON.parse(this.midsj[4].val) + 3, this.midsj[6].val = JSON.parse(this.midsj[6].val) + 5, this.midsj[6].children.value = JSON.parse(this.midsj[6].children.value) - 4, this.midsj[7].val = JSON.parse(this.midsj[7].val) + 5, this.tb1sj[0].cs = JSON.parse(this.tb1sj[0].cs) + 1, this.tb1sj[2].cs = JSON.parse(this.tb1sj[2].cs) + 3, this.tb1sj[3].cs = JSON.parse(this.tb1sj[3].cs) + 3, this.tb1sj[4].cs = JSON.parse(this.tb1sj[4].cs) + 1, this.tb1sj[6].cs = JSON.parse(this.tb1sj[6].cs) + 1, this.tb2sj[1].cs = JSON.parse(this.tb2sj[1].cs) + 6, this.tb2sj[2].cs = JSON.parse(this.tb2sj[2].cs) + 2, this.tb2sj[3].cs = JSON.parse(this.tb2sj[3].cs) + 10, this.tb2sj[4].cs = JSON.parse(this.tb2sj[4].cs) + 3, this.ddsj.push({
                                id: this.id1,
                                cm: "村民" + this.id1,
                                ddpl: "品类" + Math.ceil(100 * Math.random()),
                                sl: Math.ceil(10 * Math.random()),
                                ddsj: (new Date).getTime()
                            }), this.sxsj.push({
                                id: this.id2,
                                jtsj: "具体事件" + this.id2,
                                kssj: (new Date).getTime(),
                                zt: Math.round(Math.random())
                            }), this.id1 = this.id1 + 1, this.id2 = this.id2 + 1
                        }, 2e3)
                    },
                    tb1() {
                        var t = [],
                            s = [];
                        this.tb1sjarr.forEach(i => {
                            t.push(i.dd), s.push(JSON.parse(i.cs))
                        }), this.myChart1 = v["a"](document.getElementById("home_mid_bottom_l")), this.myChart1.setOption({
                            title: {
                                text: "最受欢迎品类订单次数"
                            },
                            tooltip: {},
                            xAxis: {
                                data: t
                            },
                            yAxis: {},
                            series: [{
                                type: "bar",
                                data: s,
                                itemStyle: {
                                    color: "#A8B95F"
                                }
                            }],
                            grid: {
                                top: "20%",
                                left: "8px",
                                right: "0px",
                                bottom: "10%",
                                containLabel: !0
                            }
                        })
                    },
                    tb2() {
                        var t = [],
                            s = [];
                        this.tb2sjarr.forEach(i => {
                            t.push(i.dd), s.push(JSON.parse(i.cs))
                        }), this.myChart2 = v["a"](document.getElementById("home_mid_bottom_r")), this.myChart2.setOption({
                            title: {
                                text: "村民订购次数排行"
                            },
                            tooltip: {},
                            xAxis: {
                                data: t,
                                axisLabel: {
                                    rotate: 45,
                                    textStyle: {
                                        fontSize: 10
                                    }
                                }
                            },
                            yAxis: {},
                            series: [{
                                type: "bar",
                                data: s,
                                itemStyle: {
                                    color: "#5570C7"
                                }
                            }],
                            grid: {
                                top: "20%",
                                left: "8px",
                                right: "0px",
                                bottom: "1%",
                                containLabel: !0
                            }
                        })
                    },
                    paixu(t, s) {
                        return t.sort((function (t, i) {
                            let e = t[s],
                                a = i[s];
                            return e > a ? -1 : e < a ? 1 : 0
                        }))
                    },
                    getdatew(t) {
                        let s = t.getDay().toString();
                        switch (s) {
                            case "1":
                                s = "一";
                                break;
                            case "2":
                                s = "二";
                                break;
                            case "3":
                                s = "三";
                                break;
                            case "4":
                                s = "四";
                                break;
                            case "5":
                                s = "五";
                                break;
                            case "6":
                                s = "六";
                                break;
                            default:
                                s = "日"
                        }
                        return s
                    },
                    getdateYMD(t) {
                        const s = t.getFullYear() + "-",
                            i = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) + "-" : t.getMonth() + 1 + "-",
                            e = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
                        return s + i + e
                    },
                    getdateMDhm(t) {
                        var s = new Date(JSON.parse(t));
                        const i = s.getMonth() + 1 < 10 ? "0" + (s.getMonth() + 1) + "-" : s.getMonth() + 1 + "-",
                            e = s.getDate() < 10 ? "0" + s.getDate() + " " : s.getDate() + " ",
                            a = s.getHours() < 10 ? "0" + s.getHours() + ":" : s.getHours() + ":",
                            r = s.getMinutes() < 10 ? "0" + s.getMinutes() : s.getMinutes();
                        return i + e + a + r
                    },
                    getdateMD(t) {
                        var s = new Date(JSON.parse(t));
                        const i = s.getMonth() + 1 < 10 ? "0" + (s.getMonth() + 1) + "-" : s.getMonth() + 1 + "-",
                            e = s.getDate() < 10 ? "0" + s.getDate() : s.getDate();
                        return i + e
                    }
                },
                mounted() {
                    this.tb1sjarr = JSON.parse(JSON.stringify(this.tb1sj)), this.tb2sjarr = JSON.parse(JSON.stringify(this.tb2sj)), this.midsjarr = JSON.parse(JSON.stringify(this.midsj)), this.tjxsjarr = JSON.parse(JSON.stringify(this.midsj)), this.tb1(), this.tb2(), window.addEventListener("resize", () => {
                        this.myChart1.resize()
                    }), window.addEventListener("resize", () => {
                        this.myChart2.resize()
                    }), this.tpzsjarr = JSON.parse(JSON.stringify(this.tpzsj)), this.ddsjarr = this.paixu(JSON.parse(JSON.stringify(this.ddsj)), "ddsj"), this.sxsjarr = this.paixu(JSON.parse(JSON.stringify(this.sxsj)), "kssj"), this.time()
                },
                watch: {
                    tpzsjWatch: {
                        handler(t, s) {
                            var i = JSON.parse(JSON.stringify(this.tpzsjarr)),
                                e = JSON.parse(JSON.stringify(t));
                            i.forEach(t => {
                                t.children.forEach(t => {
                                    t.oldvalue = t.value, e.forEach(s => {
                                        s.children.forEach(s => {
                                            s.cid == t.cid && (t.value = s.value)
                                        })
                                    })
                                })
                            }), this.tpzsjarr = i
                        }
                    },
                    midsjWatch: {
                        handler(t, s) {
                            var i = JSON.parse(JSON.stringify(this.midsjarr)),
                                e = JSON.parse(JSON.stringify(t));
                            i.forEach(t => {
                                t.oldval = t.val, "" != t.children && (t.children.oldvalue = t.children.value), e.forEach(s => {
                                    s.id == t.id && (t.val = s.val, "" != t.children && (t.children.value = s.children.value))
                                })
                            }), this.midsjarr = i
                        }
                    },
                    tb1sjWatch: {
                        handler(t, s) {
                            this.tb1sjarr = t;
                            var i = [],
                                e = [];
                            this.tb1sjarr.forEach(t => {
                                i.push(t.dd), e.push(JSON.parse(t.cs))
                            }), this.myChart1.setOption({
                                title: {
                                    text: "最受欢迎品类订单次数"
                                },
                                xAxis: {
                                    data: i
                                },
                                series: [{
                                    data: e
                                }]
                            })
                        }
                    },
                    tb2sjWatch: {
                        handler(t, s) {
                            this.tb2sjarr = t;
                            var i = [],
                                e = [];
                            this.tb2sjarr.forEach(t => {
                                i.push(t.dd), e.push(JSON.parse(t.cs))
                            }), this.myChart2.setOption({
                                title: {
                                    text: "村民订购次数排行"
                                },
                                xAxis: {
                                    data: i
                                },
                                series: [{
                                    data: e
                                }]
                            })
                        }
                    },
                    ddsjWatch: {
                        handler(t, s) {
                            this.ddsjarr = this.paixu(t, "ddsj")
                        }
                    },
                    sxsjWatch: {
                        handler(t, s) {
                            this.sxsjarr = this.paixu(t, "kssj")
                        }
                    }
                }
            },
            f = j,
            g = (i("96b5"), Object(d["a"])(f, u, m, !1, null, "560abba7", null)),
            b = g.exports,
            x = function () {
                var t = this,
                    s = t._self._c;
                return s("div", {
                    staticClass: "peizhi"
                }, [t._v(" peizhi ")])
            },
            O = [],
            S = {
                name: "Peizhi",
                components: {}
            },
            y = S,
            C = Object(d["a"])(y, x, O, !1, null, null, null),
            J = C.exports,
            N = function () {
                var t = this,
                    s = t._self._c;
                return s("div", {
                    staticClass: "dingdan"
                }, [t._v(" dingdan ")])
            },
            z = [],
            k = {
                name: "Dingdan",
                components: {}
            },
            w = k,
            M = Object(d["a"])(w, N, z, !1, null, null, null),
            D = M.exports,
            P = function () {
                var t = this,
                    s = t._self._c;
                return s("div", {
                    staticClass: "shixiang"
                }, [t._v(" shixiang ")])
            },
            E = [],
            W = {
                name: "Shixiang",
                components: {}
            },
            T = W,
            V = Object(d["a"])(T, P, E, !1, null, null, null),
            L = V.exports,
            A = function () {
                var t = this,
                    s = t._self._c;
                return s("div", {
                    staticClass: "liulan"
                }, [t._v(" liulan ")])
            },
            H = [],
            Y = {
                name: "Liulan",
                components: {}
            },
            B = Y,
            F = Object(d["a"])(B, A, H, !1, null, null, null),
            I = F.exports;
        e["a"].use(h["a"]);
        const $ = [{
                path: "*",
                name: "Home",
                component: b
            }, {
                path: "/Peizhi",
                name: "Peizhi",
                component: J
            }, {
                path: "/Dingdan",
                name: "Dingdan",
                component: D
            }, {
                path: "/Shixiang",
                name: "Shixiang",
                component: L
            }, {
                path: "/Liulan",
                name: "Liulan",
                component: I
            }],
            Q = new h["a"]({
                routes: $
            });
        var q = Q,
            G = i("2f62");
        e["a"].use(G["a"]);
        var K = new G["a"].Store({
            state: {},
            mutations: {},
            actions: {},
            modules: {}
        });
        i("4942");
        e["a"].config.productionTip = !1, new e["a"]({
            router: q,
            store: K,
            render: t => t(c)
        }).$mount("#app")
    },
    "96b5": function (t, s, i) {
        "use strict";
        i("b4e3")
    },
    b4e3: function (t, s, i) {},
    e497: function (t, s, i) {
        "use strict";
        i("e6df")
    },
    e6df: function (t, s, i) {}
});
//# sourceMappingURL=app.d1bbebf9.js.map