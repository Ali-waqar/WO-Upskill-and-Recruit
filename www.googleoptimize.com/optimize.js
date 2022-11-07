// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "67",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__dee"
            }, {
                "vtp_experimentKey": "OPT-MPW2FJ4_OPT-PFPTX",
                "function": "__c",
                "vtp_value": true
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__exs",
                "vtp_measurementId": "zduW32uUQiaXI6zBM27Eug",
                "vtp_sections": ["list", 3]
            }, {
                "vtp_experimentKey": "OPT-MPW2FJ4_OPT-PFPTX",
                "function": "__c",
                "vtp_value": 1000
            }, {
                "vtp_experimentKey": "OPT-MPW2FJ4_OPT-PFPTX",
                "function": "__c",
                "vtp_value": 672
            }, {
                "function": "__cie",
                "vtp_experimentState": ["macro", 4],
                "vtp_trafficCoverage": ["macro", 5],
                "vtp_trafficCoverageHash": ["macro", 6]
            }, {
                "function": "__c",
                "vtp_value": false
            }, {
                "function": "__gaoo_c",
                "vtp_trackingId": "UA-68966060-1"
            }, {
                "function": "__ctto",
                "vtp_isDynamic": false
            }, {
                "function": "__sel",
                "vtp_selector": ":root"
            }, {
                "function": "__c",
                "vtp_value": ["map", "", 19303, "9-OcIU9qSumdhjyyyuXCLQ", 0, "zduW32uUQiaXI6zBM27Eug", 19329, "s4KzDVQ3STCy54lkiI2aRw", 0]
            }, {
                "vtp_experimentKey": "OPT-MPW2FJ4_OPT-PFPTX",
                "vtp_sectionIndex": 0,
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__cevi",
                "vtp_experimentState": ["macro", 4],
                "vtp_sectionIndex": 0,
                "vtp_serverVariationIndex": ["macro", 13]
            }],
            "tags": [{
                "function": "__asprv",
                "vtp_globalName": "google_optimize",
                "vtp_listenForMutations": false,
                "tag_id": 6
            }, {
                "function": "__asprv",
                "tag_id": 7
            }, {
                "function": "__exsu",
                "once_per_event": true,
                "vtp_measurementId": "zduW32uUQiaXI6zBM27Eug",
                "vtp_newState": ["template", "x", ["macro", 6]],
                "vtp_expirationDay": 19416,
                "vtp_expirationDates": ["macro", 12],
                "tag_id": 24
            }, {
                "function": "__noop",
                "setup_tags": ["list", ["tag", 7, 1]],
                "vtp_measurementId": "zduW32uUQiaXI6zBM27Eug",
                "vtp_contextIndex": 0,
                "vtp_sectionIndex": 0,
                "vtp_variant": 0,
                "tag_id": 32
            }, {
                "function": "__noop",
                "setup_tags": ["list", ["tag", 7, 1]],
                "teardown_tags": ["list", ["tag", 10, 0]],
                "vtp_measurementId": "zduW32uUQiaXI6zBM27Eug",
                "vtp_contextIndex": 0,
                "vtp_sectionIndex": 0,
                "vtp_variant": 1,
                "tag_id": 33
            }, {
                "function": "__noop",
                "setup_tags": ["list", ["tag", 7, 1]],
                "teardown_tags": ["list", ["tag", 9, 0]],
                "vtp_measurementId": "zduW32uUQiaXI6zBM27Eug",
                "vtp_contextIndex": 0,
                "vtp_sectionIndex": 0,
                "vtp_variant": 2,
                "tag_id": 34
            }, {
                "function": "__eximp",
                "live_only": true,
                "setup_tags": ["list", ["tag", 8, 1]],
                "once_per_load": true,
                "vtp_measurementId": "zduW32uUQiaXI6zBM27Eug",
                "vtp_trackingId": "UA-68966060-1",
                "vtp_variantId": ["template", ["macro", 14]],
                "tag_id": 25
            }, {
                "function": "__dr",
                "setup_tags": ["list", ["tag", 6, 1]],
                "once_per_event": true,
                "vtp_measurementId": "zduW32uUQiaXI6zBM27Eug",
                "vtp_experimentCombination": ["template", ["macro", 14]],
                "vtp_activate": true,
                "vtp_isEmpty": false,
                "vtp_treatmentId": "Experiment_OPT-MPW2FJ4_OPT-PFPTX:0",
                "vtp_contextIndex": 0,
                "vtp_useMutationObserver": true,
                "vtp_waitForElements": true,
                "tag_id": 27
            }, {
                "function": "__exsu",
                "once_per_event": true,
                "vtp_measurementId": "zduW32uUQiaXI6zBM27Eug",
                "vtp_newState": ["template", ["macro", 14]],
                "vtp_expirationDay": 19416,
                "vtp_expirationDates": ["macro", 12],
                "tag_id": 12
            }, {
                "function": "__esc",
                "vtp_selector": "",
                "vtp_identifier": "",
                "vtp_script": "window.$loaded(function (window, document, $, undefined) {\n  $(\".js-company-signup-original\").remove();\n  $(\".js-multi-step-form\").show();\n  $(\".js-company-signup-container\")[0] \u0026\u0026 $(\".js-company-signup-container\").show();\n\n  setTimeout(function loadAnalytics() {\n    if (window.analytics) {\n      window.analytics.page('Company Lead Form: Experiment 1', { form_variant: 'Variant B' });\n      return\n    }\n    loadAnalytics();\n  }, 200)\n});",
                "vtp_requiresContent": false,
                "tag_id": 31
            }, {
                "function": "__esc",
                "vtp_selector": "",
                "vtp_identifier": "",
                "vtp_script": "window.$loaded(function (window, document, $, undefined) {\n  $(\".js-multi-step-form\").remove();\n  $(\".js-company-signup-original\").show();\n  $(\".js-company-signup-container\")[0] \u0026\u0026 $(\".js-company-signup-container\").show();\n\n  setTimeout(function loadAnalytics() {\n    if (window.analytics) {\n      window.analytics.page('Company Lead Form: Experiment 1', { form_variant: 'Variant A' });\n      return\n    }\n    loadAnalytics();\n  }, 200)\n});",
                "vtp_requiresContent": false,
                "tag_id": 29
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": ["macro", 1]
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "optimize.callback"
            }, {
                "function": "_um",
                "arg0": ["macro", 3],
                "arg1": ["list", "https:\/\/www.offerzen.com\/employers\/hire-remote-devs", "https:\/\/www.offerzen.com\/employers", "https:\/\/www.offerzen.com\/nl\/employers", "https:\/\/www.offerzen.com\/employers\/signup"],
                "any_of": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 7],
                "arg1": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": ""
            }, {
                "function": "_eq",
                "arg0": true,
                "arg1": ["list", ["macro", 8],
                    ["macro", 9]
                ],
                "any_of": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 10],
                "arg1": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 11],
                "arg1": "null"
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": 0
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": 1
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": 2
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1]
                ],
                [
                    ["if", 0, 2, 4],
                    ["unless", 3],
                    ["add", 2]
                ],
                [
                    ["if", 0, 2, 3, 8],
                    ["add", 3]
                ],
                [
                    ["if", 0, 2, 3, 9],
                    ["add", 4]
                ],
                [
                    ["if", 0, 2, 3, 10],
                    ["add", 5]
                ],
                [
                    ["if", 5],
                    ["block", 2, 3, 4, 5]
                ],
                [
                    ["if", 6],
                    ["block", 2, 3, 4, 5]
                ],
                [
                    ["if", 7],
                    ["block", 2, 3, 4, 5]
                ]
            ]
        },
        "runtime": []





    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    a: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.a;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = da,
        ka = function(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Fk = b.prototype
        },
        la = this || self,
        ma = function(a) {
            return a
        };
    var na = function() {},
        oa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        pa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        qa = Array.isArray,
        ra = function(a, b) {
            if (a && qa(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        sa = function(a, b) {
            if (!pa(a) || !pa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ua = function(a, b) {
            for (var c = new ta, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        xa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        za = function(a) {
            return Math.round(Number(a)) || 0
        },
        Aa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ba = function(a) {
            var b = [];
            if (qa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ca = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Da = function() {
            return new Date(Date.now())
        },
        z = function() {
            return Da().getTime()
        },
        ta = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ta.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ta.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ea = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Fa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ga = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ha = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ia = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ja = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ka = /^\w{1,9}$/,
        La = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Ka.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ma = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Pa() {
        for (var a = Qa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ra() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Qa, Sa;

    function Ta(a) {
        Qa = Qa || Ra();
        Sa = Sa || Pa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Qa[m], Qa[n], Qa[p], Qa[q])
        }
        return b.join("")
    }

    function Ua(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Sa[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Qa = Qa || Ra();
        Sa = Sa || Pa();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Va = {},
        Wa = function(a, b) {
            Va[a] = Va[a] || [];
            Va[a][b] = !0
        },
        Xa = function() {
            delete Va.GA4_EVENT
        },
        Ya = function(a) {
            var b = Va[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Ta(c.join("")).replace(/\.+$/, "")
        };
    var Za = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var $a, ab = function() {
        if (void 0 === $a) {
            var a = null,
                b = la.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (c) {
                    la.console && la.console.error(c.message)
                }
                $a = a
            } else $a = a
        }
        return $a
    };
    var cb = function(a, b) {
        this.h = b === bb ? a : ""
    };
    cb.prototype.toString = function() {
        return this.h + ""
    };
    var bb = {};
    var db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function eb() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function fb(a) {
        return -1 != eb().indexOf(a)
    };

    function gb() {
        return fb("Firefox") || fb("FxiOS")
    }

    function hb() {
        return (fb("Chrome") || fb("CriOS")) && !fb("Edge") || fb("Silk")
    };
    var ib = {},
        jb = function(a, b) {
            this.h = b === ib ? a : ""
        };
    jb.prototype.toString = function() {
        return this.h.toString()
    };
    var kb = function(a) {
            return a instanceof jb && a.constructor === jb ? a.h : "type_error:SafeHtml"
        },
        lb = function(a) {
            var b = a,
                c = ab(),
                d = c ? c.createHTML(b) : b;
            return new jb(d, ib)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function mb(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };
    var E = window,
        F = document,
        nb = navigator,
        ob = F.currentScript && F.currentScript.src,
        pb = function(a, b) {
            var c = E[a];
            E[a] = void 0 === c ? b : c;
            return E[a]
        },
        qb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        rb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        sb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function tb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var ub = function(a, b, c, d, e) {
            var f = F.createElement("script");
            tb(f, d, rb);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = a,
                m = ab(),
                n = m ? m.createScriptURL(l) : l;
            g = new cb(n, bb);
            f.src = g instanceof cb && g.constructor === cb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, t, u = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
            (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            qb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var r =
                    F.getElementsByTagName("script")[0] || F.body || F.head;
                r.parentNode.insertBefore(f, r)
            }
            return f
        },
        vb = function() {
            if (ob) {
                var a = ob.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        wb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = F.createElement("iframe"), l = !0);
            tb(g, c, sb);
            d && k(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = F.body && F.body.lastChild || F.body || F.head;
                m.parentNode.insertBefore(g, m)
            }
            qb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        xb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        yb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        zb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            E.setTimeout(a, 0)
        },
        Ab = function(a, b) {
            return a && b && a.attributes &&
                a.attributes[b] ? a.attributes[b].value : null
        },
        Bb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Cb = function(a) {
            var b = F.createElement("div"),
                c = b,
                d = lb("A<div>" + a + "</div>");
            void 0 !== c.tagName && mb(c);
            c.innerHTML = kb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Db = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f &&
                g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Eb = function(a) {
            var b;
            try {
                b = nb.sendBeacon && nb.sendBeacon(a)
            } catch (c) {
                Wa("TAGGING", 15)
            }
            b || xb(a)
        },
        Fb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Gb = function() {
            var a = E.performance;
            if (a && oa(a.now)) return a.now()
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Hb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ib = function(a) {
            if (null == a) return String(a);
            var b = Hb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Jb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Kb = function(a) {
            if (!a || "object" != Ib(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Jb(a, "constructor") && !Jb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Jb(a, b)
        },
        J = function(a, b) {
            var c = b || ("array" == Ib(a) ? [] : {}),
                d;
            for (d in a)
                if (Jb(a, d)) {
                    var e = a[d];
                    "array" == Ib(e) ? ("array" != Ib(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : Kb(e) ? (Kb(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
                }
            return c
        };
    var Lb = function(a) {
        if (void 0 === a || qa(a) || Kb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Mb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Oh: a("consent"),
            Kf: a("convert_case_to"),
            Lf: a("convert_false_to"),
            Mf: a("convert_null_to"),
            Nf: a("convert_true_to"),
            Of: a("convert_undefined_to"),
            sk: a("debug_mode_metadata"),
            Ra: a("function"),
            Ue: a("instance_name"),
            Ei: a("live_only"),
            Fi: a("malware_disabled"),
            Gi: a("metadata"),
            Ji: a("original_activity_id"),
            wk: a("original_vendor_template_id"),
            vk: a("once_on_load"),
            Ii: a("once_per_event"),
            Rg: a("once_per_load"),
            xk: a("priority_override"),
            yk: a("respected_consent_types"),
            Vg: a("setup_tags"),
            Qc: a("tag_id"),
            Wg: a("teardown_tags")
        }
    }();
    var ic;
    var jc = [],
        kc = [],
        lc = [],
        mc = [],
        nc = [],
        oc = {},
        pc, qc, sc = function() {
            var a = rc;
            qc = qc || a
        },
        tc, uc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = oc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.bh && d.bh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.ah && (f.vtp_gtmCachedValues = d.ah);
            if (b) {
                if (null == b.name) {
                    var l;
                    a: {
                        var m = b.index;
                        if (null == m) l = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = jc[m];
                                    break;
                                case 1:
                                    n = mc[m];
                                    break;
                                default:
                                    l = "";
                                    break a
                            }
                            var p = n && n[Mb.Ue];
                            l = p ? String(p) : ""
                        }
                    }
                    b.name = l
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : ic(c, f, b)
        },
        wc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = vc(a[e], b, c));
            return d
        },
        vc = function(a, b, c) {
            if (qa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(vc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = jc[f];
                        if (!g || b.nf(g)) return;
                        c[f] = !0;
                        var l =
                            String(g[Mb.Ue]);
                        try {
                            var m = wc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = uc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            tc && (d = tc.Yi(d, m))
                        } catch (x) {
                            b.qh && b.qh(x, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[vc(a[n], b, c)] = vc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = vc(a[q], b, c);
                            qc && (p = p || t === qc.Rd);
                            d.push(t)
                        }
                        return qc && p ? qc.Zi(d) : d.join("");
                    case "escape":
                        d = vc(a[1], b, c);
                        if (qc && qa(a[1]) && "macro" ===
                            a[1][0] && qc.yj(a)) return qc.Qj(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Nb[a[u]] && (d = Nb[a[u]](d));
                        return d;
                    case "tag":
                        var r = a[1];
                        if (!mc[r]) throw Error("Unable to resolve tag reference " + r + ".");
                        return d = {
                            ih: a[2],
                            index: r
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = xc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        xc = function(a, b, c) {
            try {
                return pc(wc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Ac = function(a) {
            function b(t) {
                for (var u = 0; u < t.length; u++) d[t[u]] = !0
            }
            for (var c = [], d = [], e = yc(a), f = 0; f < kc.length; f++) {
                var g = kc[f],
                    l = zc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < mc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        zc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        yc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = xc(lc[c], a));
                return b[c]
            }
        };
    var Bc = {
        Yi: function(a, b) {
            b[Mb.Kf] && "string" === typeof a && (a = 1 == b[Mb.Kf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Mb.Mf) && null === a && (a = b[Mb.Mf]);
            b.hasOwnProperty(Mb.Of) && void 0 === a && (a = b[Mb.Of]);
            b.hasOwnProperty(Mb.Nf) && !0 === a && (a = b[Mb.Nf]);
            b.hasOwnProperty(Mb.Lf) && !1 === a && (a = b[Mb.Lf]);
            return a
        }
    };
    var Dc = [];
    Dc[7] = !0;
    Dc[9] = !0;
    Dc[27] = !0;
    Dc[6] = !0;
    Dc[12] = !0;
    Dc[11] = !0;
    Dc[15] = !0;
    Dc[18] = !0;
    Dc[23] = !0;
    Dc[29] = !0;
    Dc[33] = !0;
    Dc[35] = !0;
    Dc[36] = !0;
    Dc[38] = !0;
    Dc[43] = !0;
    Dc[44] = !0;
    Ec(46, 47);
    Dc[51] = !0;
    Dc[54] = !0;
    Dc[57] = !0;

    function Ec(a, b) {
        for (var c, d, e = 0; c === d;)
            if (c = Math.floor(2 * Math.random()), d = Math.floor(2 * Math.random()), e++, 20 < e) return;
        c ? Dc[a] = !0 : Dc[b] = !0;
    }
    var N = function(a) {
        return !!Dc[a]
    };
    var Zc = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function $c(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var ed = function(a) {
            return ad ? F.querySelectorAll(a) : null
        },
        fd = function(a, b) {
            if (!ad) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        gd = !1;
    if (F.querySelectorAll) try {
        var hd = F.querySelectorAll(":root");
        hd && 1 == hd.length && hd[0] == F.documentElement && (gd = !0)
    } catch (a) {}
    var ad = gd;
    var P = function(a) {
        Wa("GTM", a)
    };
    var R = {
            g: {
                F: "ad_storage",
                R: "analytics_storage",
                Hf: "region",
                If: "consent_updated",
                Jf: "wait_for_update",
                Sh: "app_remove",
                Th: "app_store_refund",
                Uh: "app_store_subscription_cancel",
                Vh: "app_store_subscription_convert",
                Wh: "app_store_subscription_renew",
                Pf: "add_payment_info",
                Qf: "add_shipping_info",
                kc: "add_to_cart",
                mc: "remove_from_cart",
                Rf: "view_cart",
                Ib: "begin_checkout",
                nc: "select_item",
                sb: "view_item_list",
                Jb: "select_promotion",
                tb: "view_promotion",
                Ba: "purchase",
                oc: "refund",
                Ha: "view_item",
                Sf: "add_to_wishlist",
                Xh: "first_open",
                Yh: "first_visit",
                va: "gtag.config",
                Ca: "gtag.get",
                Zh: "in_app_purchase",
                qc: "page_view",
                ai: "session_start",
                we: "user_engagement",
                Kb: "gclid",
                ia: "ads_data_redaction",
                X: "allow_ad_personalization_signals",
                xe: "allow_custom_scripts",
                bi: "allow_display_features",
                sc: "allow_enhanced_conversions",
                uc: "allow_google_signals",
                wa: "allow_interest_groups",
                vd: "auid",
                ci: "auto_detection_enabled",
                Wa: "aw_remarketing",
                wd: "aw_remarketing_only",
                vc: "discount",
                wc: "aw_feed_country",
                xc: "aw_feed_language",
                Z: "items",
                yc: "aw_merchant_id",
                Tf: "aw_basket_type",
                xd: "campaign_content",
                yd: "campaign_id",
                zd: "campaign_medium",
                Ad: "campaign_name",
                zc: "campaign",
                Bd: "campaign_source",
                Cd: "campaign_term",
                kb: "client_id",
                di: "content_group",
                ei: "content_type",
                Da: "conversion_cookie_prefix",
                Ac: "conversion_id",
                Xa: "conversion_label",
                qa: "conversion_linker",
                ye: "conversion_api",
                Ya: "cookie_domain",
                Ia: "cookie_expires",
                Za: "cookie_flags",
                Bc: "cookie_name",
                ze: "cookie_path",
                Pa: "cookie_prefix",
                ub: "cookie_update",
                Lb: "country",
                ma: "currency",
                Cc: "customer_lifetime_value",
                Dc: "custom_map",
                fi: "debug_mode",
                aa: "developer_id",
                Uf: "disable_merchant_reported_purchases",
                gi: "dc_custom_params",
                hi: "dc_natural_search",
                Ae: "dynamic_event_settings",
                ii: "affiliation",
                Vf: "checkout_option",
                Wf: "checkout_step",
                ji: "coupon",
                Xf: "item_list_name",
                Yf: "list_name",
                ki: "promotions",
                Ec: "shipping",
                Zf: "tax",
                Dd: "engagement_time_msec",
                Fc: "enhanced_client_id",
                Gc: "enhanced_conversions",
                ag: "enhanced_conversions_automatic_settings",
                Hc: "estimated_delivery_date",
                Be: "euid_logged_in_state",
                Mb: "event_callback",
                Nb: "event_developer_id_string",
                cg: "event",
                Ed: "event_settings",
                Fd: "event_timeout",
                li: "experiments",
                Ce: "firebase_id",
                Gd: "first_party_collection",
                Hd: "_x_20",
                vb: "_x_19",
                dg: "fledge",
                eg: "flight_error_code",
                fg: "flight_error_message",
                gg: "gac_gclid",
                Id: "gac_wbraid",
                hg: "gac_wbraid_multiple_conversions",
                Ic: "ga_restrict_domain",
                De: "ga_temp_client_id",
                ig: "gdpr_applies",
                jg: "geo_granularity",
                ab: "value_callback",
                Qa: "value_key",
                Ob: "global_developer_id_string",
                tk: "google_ono",
                lb: "google_signals",
                Jd: "google_tld",
                Kd: "groups",
                kg: "gsa_experiment_id",
                lg: "iframe_state",
                Ld: "ignore_referrer",
                Ee: "internal_traffic_results",
                Md: "is_legacy_loaded",
                mg: "is_passthrough",
                Ja: "language",
                Fe: "legacy_developer_id_string",
                ra: "linker",
                Pb: "accept_incoming",
                Qb: "decorate_forms",
                T: "domains",
                Jc: "url_position",
                ng: "method",
                Rb: "new_customer",
                og: "non_interaction",
                mi: "optimize_id",
                Ka: "page_location",
                Ge: "page_path",
                La: "page_referrer",
                Sb: "page_title",
                pg: "passengers",
                qg: "phone_conversion_callback",
                ni: "phone_conversion_country_code",
                rg: "phone_conversion_css_class",
                oi: "phone_conversion_ids",
                sg: "phone_conversion_number",
                ug: "phone_conversion_options",
                vg: "quantity",
                Kc: "redact_device_info",
                He: "redact_enhanced_user_id",
                ri: "redact_ga_client_id",
                si: "redact_user_id",
                Nd: "referral_exclusion_definition",
                nb: "restricted_data_processing",
                ui: "retoken",
                wg: "screen_name",
                wb: "screen_resolution",
                vi: "search_term",
                xa: "send_page_view",
                xb: "send_to",
                Lc: "session_duration",
                Od: "session_engaged",
                Ie: "session_engaged_time",
                ob: "session_id",
                Pd: "session_number",
                Tb: "delivery_postal_code",
                xg: "tc_privacy_string",
                yg: "temporary_client_id",
                wi: "tracking_id",
                Je: "traffic_type",
                Ea: "transaction_id",
                na: "transport_url",
                zg: "trip_type",
                Mc: "update",
                cb: "url_passthrough",
                Ke: "_user_agent_architecture",
                Le: "_user_agent_bitness",
                Me: "_user_agent_full_version_list",
                Ag: "_user_agent_mobile",
                Ne: "_user_agent_model",
                Oe: "_user_agent_platform",
                Pe: "_user_agent_platform_version",
                Bg: "_user_agent_wait",
                Qe: "_user_agent_wow64",
                ca: "user_data",
                Cg: "user_data_auto_latency",
                Dg: "user_data_auto_meta",
                Eg: "user_data_auto_multi",
                Fg: "user_data_auto_selectors",
                Gg: "user_data_auto_status",
                Hg: "user_data_mode",
                Re: "user_data_settings",
                sa: "user_id",
                Ma: "user_properties",
                Ig: "us_privacy_string",
                ka: "value",
                Qd: "wbraid",
                Jg: "wbraid_multiple_conversions",
                Mg: "_host_name",
                Ng: "_in_page_command",
                Og: "_is_linker_valid",
                Pg: "_is_passthrough_cid",
                Qg: "non_personalized_ads"
            }
        },
        Fd = {},
        Gd = Object.freeze((Fd[R.g.X] = 1, Fd[R.g.sc] = 1, Fd[R.g.uc] = 1, Fd[R.g.Z] = 1, Fd[R.g.Ya] = 1, Fd[R.g.Ia] = 1, Fd[R.g.Za] = 1, Fd[R.g.Bc] = 1, Fd[R.g.ze] = 1, Fd[R.g.Pa] = 1, Fd[R.g.ub] = 1, Fd[R.g.Dc] = 1, Fd[R.g.aa] = 1, Fd[R.g.Ae] = 1,
            Fd[R.g.Mb] = 1, Fd[R.g.Ed] = 1, Fd[R.g.Fd] = 1, Fd[R.g.Gd] = 1, Fd[R.g.Ic] = 1, Fd[R.g.lb] = 1, Fd[R.g.Jd] = 1, Fd[R.g.Kd] = 1, Fd[R.g.Ee] = 1, Fd[R.g.Md] = 1, Fd[R.g.ra] = 1, Fd[R.g.He] = 1, Fd[R.g.Nd] = 1, Fd[R.g.nb] = 1, Fd[R.g.xa] = 1, Fd[R.g.xb] = 1, Fd[R.g.Lc] = 1, Fd[R.g.Ie] = 1, Fd[R.g.Tb] = 1, Fd[R.g.na] = 1, Fd[R.g.Mc] = 1, Fd[R.g.Re] = 1, Fd[R.g.Ma] = 1, Fd));
    Object.freeze([R.g.Ka, R.g.La, R.g.Sb, R.g.Ja, R.g.wg, R.g.sa, R.g.Ce, R.g.di]);
    var Hd = {},
        Id = Object.freeze((Hd[R.g.Sh] = 1, Hd[R.g.Th] = 1, Hd[R.g.Uh] = 1, Hd[R.g.Vh] = 1, Hd[R.g.Wh] = 1, Hd[R.g.Xh] = 1, Hd[R.g.Yh] = 1, Hd[R.g.Zh] = 1, Hd[R.g.ai] = 1, Hd[R.g.we] = 1, Hd)),
        Jd = {},
        Kd = Object.freeze((Jd[R.g.Pf] = 1, Jd[R.g.Qf] = 1, Jd[R.g.kc] = 1, Jd[R.g.mc] = 1, Jd[R.g.Rf] = 1, Jd[R.g.Ib] = 1, Jd[R.g.nc] = 1, Jd[R.g.sb] = 1, Jd[R.g.Jb] = 1, Jd[R.g.tb] = 1, Jd[R.g.Ba] = 1, Jd[R.g.oc] = 1, Jd[R.g.Ha] = 1, Jd[R.g.Sf] = 1, Jd)),
        Md = Object.freeze([R.g.X, R.g.uc, R.g.ub]),
        Nd = Object.freeze([].concat(Md)),
        Od = Object.freeze([R.g.Ia, R.g.Fd, R.g.Lc, R.g.Ie, R.g.Dd]),
        Pd = Object.freeze([].concat(Od)),
        Qd = {},
        Rd = (Qd[R.g.F] = "1", Qd[R.g.R] = "2", Qd),
        Sd = {},
        Td = Object.freeze((Sd[R.g.X] = 1, Sd[R.g.sc] = 1, Sd[R.g.wa] = 1, Sd[R.g.Wa] = 1, Sd[R.g.wd] = 1, Sd[R.g.vc] = 1, Sd[R.g.wc] = 1, Sd[R.g.xc] = 1, Sd[R.g.Z] = 1, Sd[R.g.yc] = 1, Sd[R.g.Da] = 1, Sd[R.g.qa] = 1, Sd[R.g.Ya] = 1, Sd[R.g.Ia] = 1, Sd[R.g.Za] = 1, Sd[R.g.Pa] = 1, Sd[R.g.ma] = 1, Sd[R.g.Cc] = 1, Sd[R.g.aa] = 1, Sd[R.g.Uf] = 1, Sd[R.g.Gc] = 1, Sd[R.g.Hc] = 1, Sd[R.g.Ce] = 1, Sd[R.g.Gd] = 1, Sd[R.g.Md] = 1, Sd[R.g.Ja] = 1, Sd[R.g.Rb] = 1, Sd[R.g.Ka] = 1, Sd[R.g.La] = 1, Sd[R.g.qg] = 1, Sd[R.g.rg] = 1, Sd[R.g.sg] =
            1, Sd[R.g.ug] = 1, Sd[R.g.nb] = 1, Sd[R.g.xa] = 1, Sd[R.g.xb] = 1, Sd[R.g.Tb] = 1, Sd[R.g.Ea] = 1, Sd[R.g.na] = 1, Sd[R.g.Mc] = 1, Sd[R.g.cb] = 1, Sd[R.g.ca] = 1, Sd[R.g.sa] = 1, Sd[R.g.ka] = 1, Sd));
    Object.freeze(R.g);
    var Ud = {},
        Vd = E.google_tag_manager = E.google_tag_manager || {},
        Wd = Math.random();
    Ud.Pc = "b20";
    Ud.Xe = Number("0") || 0;
    Ud.fa = "dataLayer";
    Ud.Qh = "";
    var Xd = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Yd = {
            __paused: !0,
            __tg: !0
        },
        Zd;
    for (Zd in Xd) Xd.hasOwnProperty(Zd) && (Yd[Zd] = !0);
    var $d = Aa(""),
        ae = Aa(""),
        be, ce = !1;
    be = ce;
    var de, ee = !1;
    de = ee;
    var fe, ge = !1;
    fe = ge;
    var he, ie = !1;
    ie = !0;
    he = ie;
    Ud.ud = "www.googletagmanager.com";
    var je = "" + Ud.ud + (be ? "/gtag/js" : "/gtm.js"),
        ke = null,
        le = null,
        me = {},
        ne = {},
        oe = {},
        pe = function() {
            var a = Vd.sequence || 1;
            Vd.sequence = a + 1;
            return a
        };
    Ud.Ph = "";
    var qe = "";
    Ud.Vd = qe;
    var re = new ta,
        se = {},
        te = {},
        we = {
            name: Ud.fa,
            set: function(a, b) {
                J(Ja(a, b), se);
                ue()
            },
            get: function(a) {
                return ve(a, 2)
            },
            reset: function() {
                re = new ta;
                se = {};
                ue()
            }
        },
        ve = function(a, b) {
            return 2 != b ? re.get(a) : xe(a)
        },
        xe = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = se, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        ye = function(a, b) {
            te.hasOwnProperty(a) || (re.set(a, b), J(Ja(a, b), se), ue())
        },
        ue = function(a) {
            k(te, function(b, c) {
                re.set(b, c);
                J(Ja(b), se);
                J(Ja(b,
                    c), se);
                a && delete te[b]
            })
        },
        ze = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? xe(a) : re.get(a);
            "array" === Ib(d) || "object" === Ib(d) ? c = J(d) : c = d;
            return c
        };
    var Ae, Be = !1,
        Ce = function(a) {
            if (!Be) {
                Be = !0;
                Ae = Ae || {}
            }
            return Ae[a]
        };
    var De = function() {
            var a = E.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Ee = function(a) {
            if (F.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
            var c = E.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = E.getComputedStyle(d, null))
            }
            return !1
        };
    var Pe = /:[0-9]+$/,
        Qe = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        Te = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Re(a.protocol) || Re(E.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
                b && (a.hostname = (a.hostname || E.location.hostname).replace(Pe, "").toLowerCase());
            return Se(a, b, c, d, e)
        },
        Se = function(a, b, c, d, e) {
            var f, g = Re(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Ue(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Pe, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Wa("TAGGING",
                        1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Qe(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Re = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Ue = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Ve = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Wa("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Pe, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        We = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Ve(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        };
    var Xe = {};
    var zf = {},
        Af = function(a, b) {
            if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a)) return E._gtmexpgrp[a];
            void 0 === zf[a] && (zf[a] = Math.floor(Math.random() * b));
            return zf[a]
        };
    var Cf = {
        eh: "",
        Wj: ""
    };
    var Df = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Ef = function(a) {
        Ef[" "](a);
        return a
    };
    Ef[" "] = function() {};
    var Gf = function() {
        var a = Ff,
            b = "kf";
        if (a.kf && a.hasOwnProperty(b)) return a.kf;
        var c = new a;
        return a.kf = c
    };
    var Ff = function() {
        var a = {};
        this.h = function() {
            var b = Df.h,
                c = Df.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[Df.h] = !0
        }
    };
    var Hf = [];

    function If() {
        var a = pb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Jf,
            update: Kf,
            addListener: Lf,
            notifyListeners: Mf,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Jf(a, b, c, d, e, f) {
        var g = If();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) l[a] = t;
                q && E.setTimeout(function() {
                    l[a] === t && t.quiet && (t.quiet = !1, Nf(a), Mf(), Wa("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function Kf(a, b) {
        var c = If();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Of(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Of(c, a);
            f.quiet ? (f.quiet = !1, Nf(a)) : g !== d && Nf(a)
        }
    }

    function Lf(a, b) {
        Hf.push({
            bf: a,
            ij: b
        })
    }

    function Nf(a) {
        for (var b = 0; b < Hf.length; ++b) {
            var c = Hf[b];
            qa(c.bf) && -1 !== c.bf.indexOf(a) && (c.vh = !0)
        }
    }

    function Mf(a, b) {
        for (var c = 0; c < Hf.length; ++c) {
            var d = Hf[c];
            if (d.vh) {
                d.vh = !1;
                try {
                    d.ij({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Of(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var Pf = function(a) {
            var b = If();
            b.accessedAny = !0;
            return Of(b, a)
        },
        Qf = function(a) {
            var b = If();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        Rf = function(a) {
            var b = If();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Sf = function() {
            if (!Gf().h()) return !1;
            var a = If();
            a.accessedAny = !0;
            return a.active
        },
        Tf = function() {
            var a = If();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Uf = function(a, b) {
            If().addListener(a, b)
        },
        Vf = function(a, b) {
            If().notifyListeners(a, b)
        },
        Wf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Rf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Uf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Xf = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === Pf(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && Uf(d, function(f) {
                var g = c();
                0 < g.length && (f.bf = g, a(f))
            })
        };

    function Yf() {}

    function Zf() {};

    function $f(a) {
        for (var b = [], c = 0; c < ag.length; c++) {
            var d = a(ag[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var ag = [R.g.F, R.g.R],
        bg = function(a) {
            var b = a[R.g.Hf];
            b && P(40);
            var c = a[R.g.Jf];
            c && P(41);
            for (var d = qa(b) ? b : [b], e = {
                    hc: 0
                }; e.hc < d.length; e = {
                    hc: e.hc
                }, ++e.hc) k(a, function(f) {
                return function(g, l) {
                    if (g !== R.g.Hf && g !== R.g.Jf) {
                        var m = d[f.hc],
                            n = Cf.eh,
                            p = Cf.Wj;
                        If().set(g, l, m, n, p, c)
                    }
                }
            }(e))
        },
        cg = 0,
        dg = function(a, b) {
            k(a, function(e, f) {
                If().update(e, f)
            });
            Vf(b.eventId, b.priorityId);
            var c = z(),
                d = c - cg;
            cg && 0 <= d && 1E3 > d && P(66);
            cg = c
        },
        eg = function(a) {
            var b = Pf(a);
            return void 0 != b ? b : !0
        },
        fg = function() {
            return "G1" + $f(Pf)
        },
        gg = function(a,
            b) {
            Xf(a, b)
        },
        hg = function(a, b) {
            Wf(a, b)
        };
    var ig = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var jg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var kg = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        lg = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function mg(a) {
        return "null" !== a.origin
    };
    var pg = function(a, b, c, d) {
            return ng(d) ? jg(a, String(b || og()), c) : []
        },
        sg = function(a, b, c, d, e) {
            if (ng(e)) {
                var f = qg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = rg(f, function(g) {
                        return g.be
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = rg(f, function(g) {
                        return g.fd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Ag(a, b, c, d) {
        var e = og(),
            f = window;
        mg(f) && (f.document.cookie = a);
        var g = og();
        return e != g || void 0 != c && 0 <= pg(b, g, !1, d).indexOf(c)
    }
    var Eg = function(a, b, c) {
            function d(u, r, v) {
                if (null == v) return delete g[r], u;
                g[r] = v;
                return u + "; " + r + "=" + v
            }

            function e(u, r) {
                if (null == r) return delete g[r], u;
                g[r] = !0;
                return u + "; " + r
            }
            if (!ng(c.rb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Bg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.Ck);
            f = d(f, "samesite",
                c.Dk);
            c.Ek && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Cg(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!Dg(q, c.path) && Ag(t, a, b, c.rb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Dg(m, c.path) ? 1 : Ag(f, a, b, c.rb) ? 0 : 1
        },
        Fg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Eg(a, b, c)
        };

    function rg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function qg(a, b, c) {
        for (var d = [], e = pg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    be: 1 * m[0] || 1,
                    fd: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Bg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Gg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Hg = /(^|\.)doubleclick\.net$/i,
        Dg = function(a, b) {
            return Hg.test(window.document.location.hostname) || "/" === b && Gg.test(a)
        },
        og = function() {
            return mg(window) ? window.document.cookie : ""
        },
        Cg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Hg.test(e) || Gg.test(e) || a.push("none");
            return a
        },
        ng = function(a) {
            if (!Gf().h() || !a || !Sf()) return !0;
            if (!Rf(a)) return !1;
            var b = Pf(a);
            return null == b ? !0 : !!b
        };
    var Ig = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ ig(a) & 2147483647) : String(b)
        },
        Jg = function(a) {
            return [Ig(a), Math.round(z() / 1E3)].join(".")
        },
        Mg = function(a, b, c, d, e) {
            var f = Kg(b);
            return sg(a, f, Lg(c), d, e)
        },
        Ng = function(a, b, c, d) {
            var e = "" + Kg(c),
                f = Lg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Kg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Lg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var Og = function() {
        Vd.dedupe_gclid || (Vd.dedupe_gclid = "" + Jg());
        return Vd.dedupe_gclid
    };
    var Pg = function() {
        var a = !1;
        return a
    };
    var Qg = {
            M: "OPT-MPW2FJ4",
            Hb: ""
        },
        Rg = {
            sh: "OPT-MPW2FJ4",
            th: "OPT-MPW2FJ4"
        };
    Qg.Ve = Aa("");
    var Sg = function() {
            return Rg.sh ? Rg.sh.split("|") : [Qg.M]
        },
        Tg = function() {
            if (Rg.th) return Rg.th.split("|");
            P(84);
            return []
        },
        Ug = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        Wg = function() {
            for (var a = Vg(), b = Sg(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || pa(d) ? a.container[b[c]] = {
                    state: 2
                } : d.state = 2
            }
            for (var e = Tg(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && P(93);
                g ? g.state = 2 : a.destination[e[f]] = {
                    state: 2
                }
            }
            a.canonical[Qg.Hb] = 2
        },
        Xg = function(a) {
            return !!Vg().container[a]
        },
        Yg = function() {
            var a = Vg().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if (pa(c)) {
                        if (1 === c) return !0
                    } else if (1 === c.state) return !0
                }
            return !1
        },
        Zg = function() {
            var a = {};
            k(Vg().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };

    function Vg() {
        var a = Vd.tidr;
        a || (a = new Ug, Vd.tidr = a);
        return a
    }
    var $g = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            GT: "t",
            HA: "h",
            MC: "m",
            GTM: "g",
            OPT: "o"
        },
        ah = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        bh = function(a) {
            var b = Qg.M.split("-"),
                c = b[0].toUpperCase();
            if (N(45)) {
                var d = {};
                d.aj = Qg.M;
                d.bk = Ud.Xe;
                d.fk = Ud.Pc;
                d.Hj = Qg.Ve ? 2 : 1;
                be ? (d.pe = ah[c], d.pe || (d.pe = 0)) : d.pe = he ? 13 : 10;
                fe ? d.ph = 1 : Pg() && (d.ph = 2);
                var e;
                var f = d.pe,
                    g = d.ph;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + $c(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
                var l = d.zk,
                    m = 4 + e + (l ? "" + $c(2, 1) +
                        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l] : ""),
                    n, p = d.fk;
                n = p && Zc.test(p) ? "" + $c(3, 2) + p : "";
                var q, t = d.bk;
                q = t ? "" + $c(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [t] : "";
                var u;
                var r = d.aj;
                if (r && a) {
                    var v = r.split("-"),
                        w = v[0].toUpperCase();
                    if ("GTM" !== w && "OPT" !== w) u = "";
                    else {
                        var y = v[1];
                        u = "" + $c(5, 3) + (1 + y.length) + (d.Hj || 0) + y
                    }
                } else u = "";
                return m + n + q + u
            }
            var x = $g[c] || "i",
                A = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                B = "w";
            be && (B = Pg() ? "s" : "o");
            de ? ("w" === B && (B = "x"), "o" === B &&
                (B = "q")) : fe ? ("w" === B && (B = "y"), "o" === B && (B = "r")) : he && (B = "z");
            return "2" + B + x + (4 === Ud.Pc.length ? Ud.Pc.slice(1) : Ud.Pc) + A
        };

    function ch(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var dh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function eh() {
        return fb("iPhone") && !fb("iPod") && !fb("iPad")
    }

    function fh() {
        eh() || fb("iPad") || fb("iPod")
    };
    fb("Opera");
    fb("Trident") || fb("MSIE");
    fb("Edge");
    !fb("Gecko") || -1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge") || fb("Trident") || fb("MSIE") || fb("Edge"); - 1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge") && fb("Mobile");
    fb("Macintosh");
    fb("Windows");
    fb("Linux") || fb("CrOS");
    var gh = la.navigator || null;
    gh && (gh.appVersion || "").indexOf("X11");
    fb("Android");
    eh();
    fb("iPad");
    fb("iPod");
    fh();
    eb().toLowerCase().indexOf("kaios");
    var hh = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        ih = /#|$/,
        jh = function(a, b) {
            var c = a.search(ih),
                d = hh(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        kh = /[?&]($|#)/,
        lh = function(a, b, c) {
            for (var d, e = a.search(ih), f = 0, g, l = []; 0 <= (g = hh(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(kh, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, t = d.indexOf("#");
                0 > t && (t = d.length);
                var u = d.indexOf("?"),
                    r;
                0 > u || u > t ? (u = t, r = "") : r = d.substring(u + 1, t);
                q = [d.slice(0, u), r, d.slice(t)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var mh = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

    function nh(a) {
        if (!a || !F.head) return null;
        var b = oh("META");
        F.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var ph = function() {
            if (E.top == E) return 0;
            var a = E.location.ancestorOrigins;
            if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
            var b;
            var c = E.top;
            try {
                var d;
                if (d = !!c && null != c.location.href) b: {
                    try {
                        Ef(c.foo);
                        d = !0;
                        break b
                    } catch (e) {}
                    d = !1
                }
                b = d
            } catch (e) {
                b = !1
            }
            return b ? 1 : 2
        },
        oh = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function qh(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = oh("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Za(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            dh(d, "load", e);
            dh(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var sh = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            mh(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            rh(c, b)
        },
        rh = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            c.fetch ? c.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : qh(c, a, void 0 === b ? !1 : b)
        };
    var th = function() {};
    var uh = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        vh = function(a, b, c) {
            this.m = a;
            this.h = null;
            this.K = {};
            this.Ga = 0;
            this.P = void 0 === b ? 500 : b;
            this.D = void 0 === c ? !1 : c;
            this.B = null
        };
    ka(vh, th);
    vh.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.D
            },
            d = lg(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.P && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.P));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = uh(c), c.internalBlockOnErrors = b.D, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            wh(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    vh.prototype.removeEventListener = function(a) {
        a && a.listenerId && wh(this, "removeEventListener", null, a.listenerId)
    };
    var yh = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = xh(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && xh(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? xh(a.purpose.legitimateInterests,
                b) && xh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        xh = function(a, b) {
            return !(!a || !a[b])
        },
        wh = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (zh(a)) {
                Ah(a);
                var f = ++a.Ga;
                a.K[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        zh = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Ah = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.K[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, dh(a.m, "message", a.B))
        },
        Bh = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = uh(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (sh({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Ch = !0;
    Ch = !1;
    var Dh = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Eh = ch("", 550),
        Fh = ch("", 500);

    function Gh() {
        var a = Vd.tcf || {};
        return Vd.tcf = a
    }
    var Lh = function() {
        var a = Gh(),
            b = new vh(E, Ch ? 3E3 : -1);
        if (!0 === E.gtag_enable_tcf_support && !a.active && ("function" === typeof E.__tcfapi || "function" === typeof b.m.__tcfapi || null != zh(b))) {
            a.active = !0;
            a.hd = {};
            Hh();
            var c = null;
            Ch ? c = E.setTimeout(function() {
                Ih(a);
                Jh(a);
                c = null
            }, Fh) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Ih(a), Jh(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Kh(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in Dh)
                                if (Dh.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var l, m = d,
                                            n = !0;
                                        n = void 0 === n ? !1 : n;
                                        l = Bh(m) ? !1 === m.gdprApplies || "tcunavailable" === m.tcString || void 0 === m.gdprApplies && !n || "string" !== typeof m.tcString || !m.tcString.length ? !0 : yh(m, "1", 0) : !1;
                                        f["1"] = l
                                    } else f[g] = yh(d, g, Dh[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.hd = e, Jh(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), Ih(a), Jh(a)
            }
        }
    };

    function Ih(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Ch && (a.hd = Kh())
    }

    function Hh() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Eh, a);
        bg(b)
    }

    function Kh() {
        var a = {},
            b;
        for (b in Dh) Dh.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Jh(a) {
        var b = {},
            c = (b.ad_storage = a.hd["1"] ? "granted" : "denied", b);
        dg(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Mh()
        })
    }
    var Mh = function() {
            var a = Gh();
            return a.active ? a.tcString || "" : ""
        },
        Nh = function() {
            var a = Gh();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Oh = function(a) {
            if (!Dh.hasOwnProperty(String(a))) return !0;
            var b = Gh();
            return b.active && b.hd ? !!b.hd[String(a)] : !0
        };

    function Ph(a, b, c, d) {
        var e, f = Number(null != a.Ta ? a.Ta : void 0);
        0 !== f && (e = new Date((b || z()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            rb: d
        }
    };
    var Qh = ["1"],
        Rh = {},
        Sh = {},
        Uh = function(a) {
            return Rh[Th(a)]
        },
        Xh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Th(a.prefix);
            if (!Rh[c] && !Vh(c, a.path, a.domain) && b) {
                var d = Th(a.prefix),
                    e = Jg();
                if (0 === Wh(d, e, a)) {
                    var f = pb("google_tag_data", {});
                    f._gcl_au ? Wa("GTM", 57) : f._gcl_au = e
                }
                Vh(c, a.path, a.domain)
            }
        };

    function Wh(a, b, c, d) {
        var e = Ng(b, "1", c.domain, c.path),
            f = Ph(c, d);
        f.rb = "ad_storage";
        return Fg(a, e, f)
    }

    function Vh(a, b, c) {
        var d = Mg(a, b, c, Qh, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (Rh[a] = e.slice(0, 2).join("."), Sh[a] = {
            id: e.slice(2, 4).join("."),
            oh: Number(e[4]) || 0
        }) : 3 === e.length ? Sh[a] = {
            id: e.slice(0, 2).join("."),
            oh: Number(e[2]) || 0
        } : Rh[a] = d;
        return !0
    }

    function Th(a) {
        return (a || "_gcl") + "_au"
    };
    var Yh;
    var bi = function() {
            var a = Zh,
                b = $h,
                c = ai(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                yb(F, "mousedown", d);
                yb(F, "keyup", d);
                yb(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        ci = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            ai().decorators.push(f)
        },
        di = function(a, b, c) {
            for (var d = ai().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== F.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && Ga(e, g.callback())
                }
            }
            return e
        };

    function ai() {
        var a = pb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var ei = /(.*?)\*(.*?)\*(.*)/,
        fi = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        gi = /^(?:www\.|m\.|amp\.)+/,
        hi = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function ii(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var ki = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ta(String(d))))
            }
        var e = b.join("*");
        return ["1", ji(e), e].join("*")
    };

    function ji(a, b) {
        var c = [E.navigator.userAgent, (new Date).getTimezoneOffset(), nb.userLanguage || nb.language, Math.floor(z() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Yh)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Yh = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Yh[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function li() {
        return function(a) {
            var b = Ve(E.location.href),
                c = b.search.replace("?", ""),
                d = Qe(c, "_gl", !0) || "";
            a.query = mi(d) || {};
            var e = Te(b, "fragment").match(ii("_gl"));
            a.fragment = mi(e && e[3] || "") || {}
        }
    }

    function ni(a, b) {
        var c = ii(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var oi = function(a, b) {
            b || (b = "_gl");
            var c = hi.exec(a);
            if (!c) return "";
            var d = c[1],
                e = ni(b, (c[2] || "").slice(1)),
                f = ni(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        pi = function(a) {
            var b = li(),
                c = ai();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ga(d, e.query), a && Ga(d, e.fragment));
            return d
        },
        mi = function(a) {
            try {
                var b = qi(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Ua(d[e + 1]);
                        c[f] = g
                    }
                    Wa("TAGGING", 6);
                    return c
                }
            } catch (l) {
                Wa("TAGGING",
                    8)
            }
        };

    function qi(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = ei.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === ji(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                Wa("TAGGING", 7)
            }
        }
    }

    function ri(a, b, c, d) {
        function e(p) {
            p = ni(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = hi.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function si(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = di(b, 1, c),
            e = di(b, 2, c),
            f = di(b, 3, c);
        if (Ha(d)) {
            var g = ki(d);
            c ? ti("_gl", g, a) : ui("_gl", g, a, !1)
        }
        if (!c && Ha(e)) {
            var l = ki(e);
            ui("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        ui(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        ti(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && ri(n, p, q)
            }
    }

    function ui(a, b, c, d) {
        if (c.href) {
            var e = ri(a, b, c.href, void 0 === d ? !1 : d);
            db.test(e) && (c.href = e)
        }
    }

    function ti(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = F.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = ri(a, b, c.action);
                db.test(n) && (c.action = n)
            }
        }
    }

    function Zh(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || si(e, e.hostname)
            }
        } catch (g) {}
    }

    function $h(a) {
        try {
            if (a.action) {
                var b = Te(Ve(a.action), "host");
                si(a, b)
            }
        } catch (c) {}
    }
    var vi = function(a, b, c, d) {
            bi();
            ci(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        wi = function(a, b) {
            bi();
            ci(a, [Se(E.location, "host", !0)], b, !0, !0)
        },
        xi = function() {
            var a = F.location.hostname,
                b = fi.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(gi, ""),
                m = e.replace(gi, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        yi = function(a, b) {
            return !1 === a ? !1 : a || b || xi()
        };
    var zi = {};
    var Ai = function(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Df: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function Bi(a, b) {
        var c = Ai(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Df] || (d[c[e].Df] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    da: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Df].push(g)
            }
        }
        return d
    };
    var Ci = /^\w+$/,
        Di = /^[\w-]+$/,
        Ei = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Fi = function() {
            if (!Gf().h() || !Sf()) return !0;
            var a = Pf("ad_storage");
            return null == a ? !0 : !!a
        },
        Gi = function(a, b) {
            Rf("ad_storage") ? Fi() ? a() : Xf(a, "ad_storage") : b ? Wa("TAGGING", 3) : Wf(function() {
                Gi(a, !0)
            }, ["ad_storage"])
        },
        Ii = function(a) {
            return Hi(a).map(function(b) {
                return b.da
            })
        },
        Hi = function(a) {
            var b = [];
            if (!mg(E) || !F.cookie) return b;
            var c = pg(a, F.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    od: d.od
                }, e++) {
                var f = Ji(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.od = g.da;
                    var m = g.timestamp,
                        n = g.labels,
                        p = ra(b, function(q) {
                            return function(t) {
                                return t.da === q.od
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Ki(p.labels, n || [])) : b.push({
                        version: l,
                        da: d.od,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, t) {
                return t.timestamp - q.timestamp
            });
            return Li(b)
        };

    function Ki(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Mi(a) {
        return a && "string" == typeof a && a.match(Ci) ? a : "_gcl"
    }
    var Oi = function() {
            var a = Ve(E.location.href),
                b = Te(a, "query", !1, void 0, "gclid"),
                c = Te(a, "query", !1, void 0, "gclsrc"),
                d = Te(a, "query", !1, void 0, "wbraid"),
                e = Te(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Qe(f, "gclid");
                c = c || Qe(f, "gclsrc");
                d = d || Qe(f, "wbraid")
            }
            return Ni(b, c, e, d)
        },
        Ni = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Di.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Di)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Qi = function(a) {
            var b = Oi();
            Gi(function() {
                Pi(b, !1, a)
            })
        };

    function Pi(a, b, c, d, e) {
        function f(w, y) {
            var x = Ri(w, g);
            x && (Fg(x, y, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Mi(c.prefix);
        d = d || z();
        var l = Ph(c, d, !0);
        l.rb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == zi.enable_gbraid_cookie_write ? 0 : zi.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0],
                t = Ri("gb", g),
                u = !1;
            if (!b)
                for (var r = Hi(t), v = 0; v < r.length; v++) r[v].da === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Ti = function(a, b) {
            var c = pi(!0);
            Gi(function() {
                for (var d = Mi(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Ei[f]) {
                        var g = Ri(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(Si(l), z()),
                                n;
                            b: {
                                var p = m;
                                if (mg(E))
                                    for (var q = pg(g, F.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                        if (Si(q[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = Ph(b, m, !0);
                                u.rb = "ad_storage";
                                Fg(g, l, u)
                            }
                        }
                    }
                }
                Pi(Ni(c.gclid, c.gclsrc), !1, b)
            })
        },
        Ri = function(a, b) {
            var c = Ei[a];
            if (void 0 !== c) return b + c
        },
        Si = function(a) {
            return 0 !== Ui(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Ji(a) {
        var b = Ui(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            da: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Ui(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Di.test(a[2]) ? [] : a
    }
    var Vi = function(a, b, c, d, e) {
            if (qa(b) && mg(E)) {
                var f = Mi(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Ri(a[m], f);
                            if (n) {
                                var p = pg(n, F.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Gi(function() {
                    vi(g, b, c, d)
                })
            }
        },
        Li = function(a) {
            return a.filter(function(b) {
                return Di.test(b.da)
            })
        },
        Wi = function(a, b) {
            if (mg(E)) {
                for (var c = Mi(b.prefix), d = {}, e = 0; e < a.length; e++) Ei[a[e]] && (d[a[e]] = Ei[a[e]]);
                Gi(function() {
                    k(d, function(f, g) {
                        var l = pg(c + g, F.cookie, void 0, "ad_storage");
                        l.sort(function(u,
                            r) {
                            return Si(r) - Si(u)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Si(m),
                                p = 0 !== Ui(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== Ui(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            Pi(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Xi(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Yi = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Sf()) {
                var c = Oi();
                if (Xi(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    wi(function() {
                        return d
                    }, 3);
                    wi(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Zi = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Fi()) return e;
            var f = Hi(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.da].concat(l.labels || [], [b]).join("."),
                    p = Ph(c, m, !0);
                p.rb = "ad_storage";
                Fg(a, n, p)
            }
            return e
        };

    function $i(a, b) {
        var c = Mi(b),
            d = Ri(a, c);
        if (!d) return 0;
        for (var e = Hi(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function aj(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var bj = function(a) {
        var b = Math.max($i("aw", a), aj(Fi() ? Bi() : {}));
        return Math.max($i("gb", a), aj(Fi() ? Bi("_gac_gb", !0) : {})) > b
    };
    var gj = /[A-Z]+/,
        hj = /\s/,
        ij = function(a) {
            if (h(a)) {
                a = Ca(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (gj.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || hj.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            U: c + "-" + d[0],
                            I: d
                        }
                    }
                }
            }
        },
        kj = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = ij(a[c]);
                d && (b[d.id] = d)
            }
            jj(b);
            var e = [];
            k(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function jj(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.I[1] && b.push(d.U)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var mj = function(a, b, c, d) {
            return (2 === lj() || d || "http:" != E.location.protocol ? a : b) + c
        },
        lj = function() {
            var a = vb(),
                b;
            if (1 === a) a: {
                var c = je;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = F.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                    var m = g[l].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Oj = function(a, b, c) {
            this.target = a;
            this.eventName = b;
            this.h = c;
            this.m = {};
            this.metadata = J(c.eventMetadata || {});
            this.H = !1
        },
        Pj = function(a, b, c) {
            var d = U(a.h, b);
            void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
        },
        Qj = function(a, b, c) {
            var d = Ce(a.target.U);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function Rj(a) {
        return {
            getDestinationId: function() {
                return a.target.U
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                return void(a.m[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                Pj(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.H = !0)
            },
            getProcessedEvent: function() {
                return a
            },
            getFromEventContext: function(b) {
                return U(a.h, b)
            }
        }
    };
    var kk = ["L", "S", "Y"],
        lk = ["S", "E"],
        mk = {
            sampleRate: "0.005000",
            Kh: "",
            Jh: Number("5"),
            Ih: Number("")
        },
        nk = 0 <= F.location.search.indexOf("?gtm_latency=") || 0 <= F.location.search.indexOf("&gtm_latency="),
        ok;
    if (!(ok = nk)) {
        var pk = Math.random(),
            qk = mk.sampleRate;
        ok = pk < qk
    }
    var rk = ok,
        sk = "https://www.googletagmanager.com/a?id=" + Qg.M + "&cv=67",
        tk = {
            label: Qg.M + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        };

    function uk() {
        return [sk, "&v=3&t=t", "&pid=" + sa(), "&rv=" + Ud.Pc].join("")
    }
    var vk = uk();

    function wk() {
        vk = uk()
    }
    var xk = {},
        yk = "",
        zk = "",
        Ak = "",
        Bk = "",
        Ck = [],
        Dk = "",
        Ek = {},
        Fk = !1,
        Gk = {},
        Hk = {},
        Ik = {},
        Jk = "",
        Kk = void 0,
        Lk = {},
        Mk = {},
        Nk = void 0,
        Ok = 5;
    0 < mk.Jh && (Ok = mk.Jh);
    var Pk = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                zj: function() {
                    return c < a ? !1 : z() - d[c % a] < b
                },
                Xj: function() {
                    var f = c++ % a;
                    d[f] = z()
                }
            }
        }(Ok, 1E3),
        Qk = 1E3;

    function Rk(a, b) {
        var c = Kk;
        if (void 0 === c) return "";
        var d = Ya("GTM"),
            e = Ya("TAGGING"),
            f = Ya("HEALTH"),
            g = vk,
            l = xk[c] ? "" : "&es=1",
            m = Lk[c],
            n = Sk(c),
            p = Tk(),
            q = yk,
            t = zk,
            u = Jk,
            r = Uk(a),
            v = Ak,
            w = Bk,
            y = Vk(a, b),
            x;
        return [g, l, m, n, d ? "&u=" + d : "", e ? "&ut=" + e : "", f ? "&h=" + f : "", p, q, t, u, r, v, w, y, x, Dk ? "&dl=" + encodeURIComponent(Dk) : "", 0 < Ck.length ? "&tdp=" + Ck.join(".") :
            "", Ud.Xe ? "&x=" + Ud.Xe : "", "&z=0"
        ].join("")
    }

    function Xk(a) {
        Nk && (E.clearTimeout(Nk), Nk = void 0);
        if (void 0 !== Kk && (!xk[Kk] || yk || zk || Yk(a)))
            if (void 0 === Zk[Kk] && (Mk[Kk] || Pk.zj() || 0 >= Qk--)) P(1), Mk[Kk] = !0;
            else {
                void 0 === Zk[Kk] && Pk.Xj();
                var b = Rk(!0, a);
                a ? Eb(b) : xb(b);
                if (Bk || Dk && 0 < Ck.length) {
                    var c = b.replace("/a?", "/td?");
                    xb(c)
                }
                xk[Kk] = !0;
                Dk = Bk = Ak = Jk = zk = yk = "";
                Ck = []
            }
    }

    function $k() {
        Nk || (Nk = E.setTimeout(Xk, 500))
    }

    function al(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function bl() {
        2022 <= Rk().length && Xk()
    }

    function Tk() {
        return "&tc=" + mc.filter(function(a) {
            return a
        }).length
    }
    var dl = function(a, b) {
            if (rk && !Mk[a] && Kk !== a) {
                Xk();
                Kk = a;
                Ak = yk = "";
                Lk[a] = "&e=" + al(b) + "&eid=" + a;
                $k();
            }
        },
        el = function(a, b, c, d) {
            if (rk && b) {
                var e, f = String(b[Mb.Ra] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Mk[a]) {
                    a !== Kk && (Xk(), Kk = a);
                    yk = yk ? yk + "." + g : "&tr=" + g;
                    var m = b["function"];
                    if (!m) throw Error("Error: No function name given for function call.");
                    var n = (oc[m] ? "1" : "2") + e;
                    Ak = Ak ? Ak + "." + n : "&ti=" + n;
                    $k();
                    bl()
                }
            }
        };

    function Uk(a) {}

    function Sk(a) {}
    var ll = function(a, b, c) {
            if (rk && void 0 !== a && !Mk[a]) {
                a !== Kk && (Xk(), Kk = a);
                var d = c + b;
                zk = zk ? zk + "." + d : "&epr=" + d;
                $k();
                bl()
            }
        },
        ml = function(a, b, c) {},
        nl = ["S", "P", "C", "Z"],
        ol = {},
        pl = (ol[1] = 5, ol[2] = 5, ol[3] = 5, ol),
        ql = {},
        Zk = {},
        Wk = void 0,
        rl = function(a, b) {
            var c = !1;
            if (!rk || Zk[a] || 0 === pl[b]) return !1;
            --pl[b];
            Zk[a] = b;
            c = !0;
            return c
        },
        sl = function(a, b, c) {
            if (!rk || !Zk[a]) return;
            var d = ql[a];
            d || (ql[a] = d = {});
            d[b] = c;
        };

    function Vk(a, b) {
        var c;
        if (!Kk || !Yk(b)) return "";
        var d = ql[Kk];
        c = "&al=" + nl.filter(function(e) {
            return void 0 !== d[e]
        }).map(function(e) {
            return e + Math.floor(d[e])
        }).join(".") + (".Z" + Zk[Kk]);
        a && delete ql[Kk];
        return c
    }

    function Yk(a) {
        var b = !1;
        if (!Kk || !ql[Kk]) return !1;
        b = a || "C" in ql[Kk];
        return b
    }
    var tl = function() {
        if (rk) {
            E.setInterval(wk, 864E5);
            yb(E, "pagehide", function() {
                Kk && Zk[Kk] && Xk(!0);
                for (var a in ql) ql.hasOwnProperty(a) && (Kk = Number(a), Xk(!0));
            });
        }
    };
    var ul = function(a, b, c, d, e, f, g, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.K = d;
            this.m = e;
            this.D = f;
            this.P = g;
            this.B = l;
            this.eventMetadata = m;
            this.O = n;
            this.N = p;
            this.C = q
        },
        U = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.K[b]) return a.K[b];
            if (void 0 !== a.m[b]) return a.m[b];
            rk && vl(a, a.D[b], a.P[b]) && (P(71), P(79));
            return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        wl = function(a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.K);
            b(a.m);
            b(a.D);
            if (rk)
                for (var d = Object.keys(a.P), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        P(71);
                        P(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        xl = function(a, b, c) {
            function d(m) {
                Kb(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.K[b]));
            c && 2 !== c || d(a.h[b]);
            if (rk) {
                var g = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.P[b]), d(a.m[b]), d(a.K[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || vl(a, e, l)) P(71), P(81);
                f = g;
                e = l
            }
            return f ? e : void 0
        },
        yl = function(a) {
            var b = [R.g.zc, R.g.xd, R.g.yd, R.g.zd, R.g.Ad, R.g.Bd, R.g.Cd],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.K) || e(a.m)) return c;
            e(a.D);
            if (rk) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.P);
                vl(a, c, f) && (P(71), P(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        vl = function(a, b, c) {
            if (!rk) return !1;
            try {
                if (b === c) return !1;
                var d = Ib(b);
                if (d !== Ib(c) || !(Kb(b) && Kb(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (vl(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || vl(a, b[g], c[g])) return !0
                }
            } catch (l) {
                P(72)
            }
            return !1
        },
        zl = function(a, b) {
            this.zi = a;
            this.Ai = b;
            this.D = {};
            this.Kg = {};
            this.h = {};
            this.K = {};
            this.m = {};
            this.Nc = {};
            this.B = {};
            this.jc = function() {};
            this.Ga = function() {};
            this.P = !1
        },
        Al = function(a, b) {
            a.D = b;
            return a
        },
        Bl = function(a, b) {
            a.Kg = b;
            return a
        },
        Cl = function(a, b) {
            a.h = b;
            return a
        },
        Dl = function(a, b) {
            a.K = b;
            return a
        },
        El = function(a, b) {
            a.m = b;
            return a
        },
        Fl = function(a,
            b) {
            a.Nc = b;
            return a
        },
        Gl = function(a, b) {
            a.B = b || {};
            return a
        },
        Hl = function(a, b) {
            a.jc = b;
            return a
        },
        Il = function(a, b) {
            a.Ga = b;
            return a
        },
        Jl = function(a) {
            a.P = !0;
            return a
        },
        Kl = function(a) {
            return new ul(a.zi, a.Ai, a.D, a.Kg, a.h, a.K, a.m, a.Nc, a.B, a.jc, a.Ga, a.P)
        };
    gb();
    eh() || fb("iPod");
    fb("iPad");
    !fb("Android") || hb() || gb() || fb("Opera") || fb("Silk");
    hb();
    !fb("Safari") || hb() || fb("Coast") || fb("Opera") || fb("Edge") || fb("Edg/") || fb("OPR") || gb() || fb("Silk") || fb("Android") || fh();
    var Ol = {},
        Pl = null,
        Ql = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Pl) {
                Pl = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    Ol[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Pl[q] && (Pl[q] = p)
                    }
                }
            }
            for (var t = Ol[f], u = Array(Math.floor(b.length / 3)), r = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    A = b[v + 2],
                    B = t[y >> 2],
                    C = t[(y & 3) << 4 | x >> 4],
                    H = t[(x & 15) << 2 | A >> 6],
                    I = t[A & 63];
                u[w++] = "" + B + C + H + I
            }
            var D = 0,
                K = r;
            switch (b.length - v) {
                case 2:
                    D = b[v + 1], K = t[(D & 15) << 2] || r;
                case 1:
                    var O = b[v];
                    u[w] = "" + t[O >> 2] + t[(O & 3) << 4 | D >> 4] + K + r
            }
            return u.join("")
        };
    var Rl = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Sl() {
        var a;
        return null != (a = E.google_tag_data) ? a : E.google_tag_data = {}
    }

    function Tl() {
        var a = E.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Ul() {
        var a, b;
        return null != (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Vl() {
        var a, b;
        return "function" === typeof(null == (a = E.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function Wl() {
        if (!Vl()) return null;
        var a = Sl();
        if (a.uach_promise) return a.uach_promise;
        var b = E.navigator.userAgentData.getHighEntropyValues(Rl).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };

    function bm() {
        return "attribution-reporting"
    }

    function cm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var dm = !1;

    function em() {
        if (cm("join-ad-interest-group") && oa(nb.joinAdInterestGroup)) return !0;
        dm || (nh('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), dm = !0);
        return cm("join-ad-interest-group") && oa(nb.joinAdInterestGroup)
    }

    function fm(a, b) {
        var c = void 0;
        try {
            c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > z() - d) {
                Wa("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Wa("TAGGING", 10);
                return
            }
        } catch (e) {}
        wb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: z()
        }, c)
    }

    function gm() {
        return N(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };
    var hm = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        im = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        jm = /^\d+\.fls\.doubleclick\.net$/,
        km = /;gac=([^;?]+)/,
        lm = /;gacgb=([^;?]+)/,
        mm = /;gclaw=([^;?]+)/,
        nm = /;gclgb=([^;?]+)/;

    function om(a, b) {
        if (jm.test(F.location.host)) {
            var c = F.location.href.match(b);
            return c && 2 == c.length && c[1].match(hm) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].da);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var pm = function(a, b, c) {
        var d = Fi() ? Bi("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = Zi("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            lj: f ? e.join(";") : "",
            kj: om(d, lm)
        }
    };

    function qm(a, b, c) {
        if (jm.test(F.location.host)) {
            var d = F.location.href.match(c);
            if (d && 2 == d.length && d[1].match(im)) return [{
                da: d[1]
            }]
        } else return Hi((a || "_gcl") + b);
        return []
    }
    var rm = function(a) {
            return qm(a, "_aw", mm).map(function(b) {
                return b.da
            }).join(".")
        },
        sm = function(a) {
            return qm(a, "_gb", nm).map(function(b) {
                return b.da
            }).join(".")
        },
        tm = function(a, b) {
            var c = Zi((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var um = function() {
        if (oa(E.__uspapi)) {
            var a = "";
            try {
                E.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var dn = function(a, b) {
        var c, d = E.GooglebQhCsO;
        d || (d = {}, E.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var en = function(a, b) {
        var c = jh(a, "fmt");
        if (b) {
            var d = jh(a, "random"),
                e = jh(a, "label") || "";
            if (!d) return !1;
            var f = Ql(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!dn(f, b)) return !1
        }
        c && 4 != c && (a = lh(a, "rfmt", c));
        var g = lh(a, "fmt", 4);
        ub(g, function() {
            E.google_noFurtherRedirects && b && b.call && (E.google_noFurtherRedirects = null, b())
        }, void 0, void 0, F.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var vn = function() {
            this.h = {}
        },
        wn = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        xn = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        zn = function(a, b, c, d, e) {};

    function Bn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ve("" + c + b).href
        }
    }

    function Cn(a, b) {
        return de || fe ? Bn(a, b) : void 0
    }

    function Dn() {
        return !!Ud.Vd && "SGTM_TOKEN" !== Ud.Vd.split("@@").join("")
    };
    var Fn = function(a, b, c, d) {
            if (!En() && !Xg(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + Ud.fa,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var l = Dn();
                l && (f += "&sign=" + Ud.Vd);
                var m = Cn(b, e + f);
                if (!m) {
                    var n = Ud.ud + e;
                    l && ob && g && (n = ob.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = mj("https://", "http://", n + f)
                }
                Vg().container[a] = {
                    state: 1,
                    context: d
                };
                ub(m)
            }
        },
        Gn = function(a, b, c) {
            var d;
            if (d = !En()) {
                var e = Vg().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Yg()) Vg().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                }, P(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Ud.fa + "&cx=c";
                    Dn() && (f += "&sign=" + Ud.Vd);
                    var g = Cn(b, f);
                    g || (g = mj("https://", "http://", Ud.ud + f));
                    Vg().destination[a] = {
                        state: 1,
                        context: c
                    };
                    ub(g)
                }
        };

    function En() {
        if (Pg()) {
            return !0
        }
        return !1
    };
    var Hn = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        In = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Jn = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Kn = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Nn = function(a) {
            var b = ve("gtm.allowlist") || ve("gtm.whitelist");
            b && P(9);
            be && (b = ["google", "gtagfl", "lcl", "zone"]);
            Ln && Mn() &&
                (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."));
            var c = b && Ia(Ba(b), In),
                d = ve("gtm.blocklist") || ve("gtm.blacklist");
            d || (d = ve("tagTypeBlacklist")) && P(3);
            d ? P(8) : d = [];
            Mn() && (d = Ba(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ba(d).indexOf("google") && P(2);
            var e = d && Ia(Ba(d), Jn),
                f = {};
            return function(g) {
                var l = g && g[Mb.Ra];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = ne[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        P(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(l);
                    if (u) t = u;
                    else {
                        var r = ua(e, m || []);
                        r && P(10);
                        t = r
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = ua(e, Kn));
                return f[l] = v
            }
        },
        Ln = !1;
    var Mn = function() {
        return Hn.test(E.location && E.location.hostname)
    };
    var On = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Pn = {},
        Qn = Object.freeze((Pn[R.g.xa] = !0, Pn)),
        Rn = 0 <= F.location.search.indexOf("?gtm_diagnostics=") || 0 <= F.location.search.indexOf("&gtm_diagnostics="),
        Tn = function(a, b, c) {
            if (rk && "config" === a && !(1 < ij(b).I.length)) {
                var d, e = pb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = J(c.D);
                J(c.h, f);
                var g = [],
                    l;
                for (l in d) {
                    var m = Sn(d[l], f);
                    m.length && (Rn && console.log(m), g.push(l))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        Bk = Bk ? Bk + "!" + n : "&tdc=" + n
                    }
                    Wa("TAGGING",
                        On[F.readyState] || 14)
                }
                d[b] = f
            }
        };

    function Un(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Sn(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, t) {
                var u = t[q];
                return void 0 === u ? Qn[q] : u
            },
            f;
        for (f in Un(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Ib(l) || "array" === Ib(l),
                p = "object" === Ib(m) || "array" === Ib(m);
            if (n && p) Sn(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Vn = !1,
        Wn = 0,
        Xn = [];

    function Yn(a) {
        if (!Vn) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Vn = !0;
                for (var e = 0; e < Xn.length; e++) G(Xn[e])
            }
            Xn.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function Zn() {
        if (!Vn && 140 > Wn) {
            Wn++;
            try {
                F.documentElement.doScroll("left"), Yn()
            } catch (a) {
                E.setTimeout(Zn, 50)
            }
        }
    }
    var $n = function(a) {
        Vn ? a() : Xn.push(a)
    };
    var ao = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: Qg.M
        }
    };
    var co = function(a, b) {
            this.h = !1;
            this.D = [];
            this.K = {
                tags: []
            };
            this.P = !1;
            this.m = this.B = 0;
            bo(this, a, b)
        },
        eo = function(a, b, c, d) {
            if (Yd.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Kb(d) && (e = J(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        fo = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        go = function(a) {
            if (!a.h) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.D.length = 0
            }
        },
        bo = function(a, b, c) {
            void 0 !== b && ho(a, b);
            c && E.setTimeout(function() {
                return go(a)
            }, Number(c))
        },
        ho =
        function(a, b) {
            var c = Fa(function() {
                return G(function() {
                    b(Qg.M, a.K)
                })
            });
            a.h ? c() : a.D.push(c)
        },
        io = function(a) {
            a.B++;
            return Fa(function() {
                a.m++;
                a.P && a.m >= a.B && go(a)
            })
        },
        jo = function(a) {
            a.P = !0;
            a.m >= a.B && go(a)
        };
    var ko = function() {
            function a(d) {
                return !pa(d) || 0 > d ? 0 : d
            }
            if (!Vd._li && E.performance && E.performance.timing) {
                var b = E.performance.timing.navigationStart,
                    c = pa(we.get("gtm.start")) ? we.get("gtm.start") : 0;
                Vd._li = {
                    cst: a(c - b),
                    cbt: a(le - b)
                }
            }
        },
        lo = function(a) {
            E.performance && E.performance.mark(Qg.M + "_" + a + "_start")
        },
        mo = function(a) {
            if (E.performance) {
                var b = Qg.M + "_" + a + "_start",
                    c = Qg.M + "_" + a + "_duration";
                E.performance.measure(c, b);
                var d = E.performance.getEntriesByName(c)[0];
                E.performance.clearMarks(b);
                E.performance.clearMeasures(c);
                var e = Vd._p || {};
                void 0 === e[a] && (e[a] = d.duration, Vd._p = e);
                return d.duration
            }
        },
        no = function() {
            var a = Gb();
            if (void 0 !== a) {
                var b = Vd._p || {};
                b.PAGEVIEW = a;
                Vd._p = b
            }
        };
    var oo = {},
        po = function() {
            return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject]
        },
        qo = !1;
    var ro = function(a) {
            E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
            var b = E.GoogleAnalyticsObject;
            if (E[b]) E.hasOwnProperty(b) || P(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Da());
                E[b] = c
            }
            ko();
            return E[b]
        },
        so = function(a) {
            if (Sf()) {
                var b = po();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function to() {
        return E.GoogleAnalyticsObject || "ga"
    }
    var uo = function(a) {
            if (oo[a] || qo) return;
            var b = E[to()];
            oa(b) && (b("provide", a, na), oo[a] = !0);
        },
        vo = function(a, b) {
            return function() {
                var c = po(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function Ao(a, b, c, d) {
        var e = mc[a],
            f = Bo(a, b, c, d);
        if (!f) return null;
        var g = vc(e[Mb.Vg], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Ao(l.index, {
                O: f,
                N: 1 === l.ih ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Bo(a, b, c, d) {
        function e() {
            if (f[Mb.Fi]) l();
            else {
                var w = wc(f, c, []),
                    y = w[Mb.Oh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!eg(y[x])) {
                            l();
                            return
                        }
                var A = eo(c.zb, String(f[Mb.Ra]), Number(f[Mb.Qc]), w[Mb.Gi]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var I = z() - H;
                        el(c.id, mc[a], "5", I);
                        fo(c.zb, A, "success", I);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var I = z() - H;
                        el(c.id, mc[a], "6", I);
                        fo(c.zb, A, "failure", I);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                el(c.id, f, "1");
                var C = function() {
                    var I = z() - H;
                    el(c.id, f, "7", I);
                    fo(c.zb, A, "exception", I);
                    B || (B = !0, l())
                };
                var H = z();
                try {
                    uc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (I) {
                    C(I)
                }
            }
        }
        var f = mc[a],
            g = b.O,
            l = b.N,
            m = b.terminate;
        if (c.nf(f)) return null;
        var n = vc(f[Mb.Wg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Ao(p.index, {
                    O: g,
                    N: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.ih ? m : q
        }
        if (f[Mb.Rg] || f[Mb.Ii]) {
            var t = f[Mb.Rg] ? nc : c.lk,
                u = g,
                r = l;
            if (!t[a]) {
                e = Fa(e);
                var v = Co(a, t, e);
                g = v.O;
                l = v.N
            }
            return function() {
                t[a](u, r)
            }
        }
        return e
    }

    function Co(a, b, c) {
        var d = [],
            e = [];
        b[a] = Do(d, e, c);
        return {
            O: function() {
                b[a] = Eo;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            N: function() {
                b[a] = Fo;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Do(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Eo(a) {
        a()
    }

    function Fo(a, b) {
        b()
    };
    var Ho = function(a, b) {
            return 1 === arguments.length ? Go("config", a) : Go("config", a, b)
        },
        Io = function(a, b, c) {
            c = c || {};
            c[R.g.xb] = a;
            return Go("event", b, c)
        };

    function Go(a) {
        return arguments
    }
    var Jo = function() {
        this.h = [];
        this.m = []
    };
    Jo.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    Jo.prototype.listen = function(a) {
        this.m.push(a)
    };
    Jo.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Jo.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Lo = function(a, b, c) {
            Ko().enqueue(a, b, c)
        },
        No = function() {
            var a = Mo;
            Ko().listen(a)
        };

    function Ko() {
        var a = Vd.mb;
        a || (a = new Jo, Vd.mb = a);
        return a
    }
    var Vo = function(a) {
            var b = Vd.zones;
            return b ? b.getIsAllowedFn(Sg(), a) : function() {
                return !0
            }
        },
        Wo = function(a) {
            var b = Vd.zones;
            return b ? b.isActive(Sg(), a) : !0
        };
    var Zo = function(a, b) {
        for (var c = [], d = 0; d < mc.length; d++)
            if (a[d]) {
                var e = mc[d];
                var f = io(b.zb);
                try {
                    var g = Ao(d, {
                        O: f,
                        N: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c,
                            m = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = oc[p];
                        m.call(l, {
                            Fh: n,
                            wh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Xo(d, b), f()
                } catch (u) {
                    f()
                }
            }
        c.sort(Yo);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function Yo(a, b) {
        var c, d = b.wh,
            e = a.wh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Fh,
                l = b.Fh;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function Xo(a, b) {
        if (rk) {
            var c = function(d) {
                var e = b.nf(mc[d]) ? "3" : "4",
                    f = vc(mc[d][Mb.Vg], b, []);
                f && f.length && c(f[0].index);
                el(b.id, mc[d], e);
                var g = vc(mc[d][Mb.Wg], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var bp = !1,
        $o;
    var Ep = function(a) {
        var b = z(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if (bp) return !1;
            bp = !0;
        }
        var l, m = !1;
        if (Wo(c)) l = Vo(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            m = !0;
            l = Vo(Number.MAX_SAFE_INTEGER)
        }
        dl(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var t = {
                id: c,
                priorityId: d,
                name: e,
                nf: Nn(l),
                lk: [],
                qh: function() {
                    P(6);
                    Wa("HEALTH", 0)
                },
                ah: cp(),
                bh: dp(c),
                zb: new co(q, p)
            },
            u = Ac(t);
        m && (u = Cp(u));
        var r = Zo(u, t),
            v = !1;
        jo(t.zb);
        "gtm.js" !== e && "gtm.sync" !== e || uo(Qg.M);
        return Dp(u, r) || v
    };

    function dp(a) {
        return function(b) {
            rk && (Lb(b) || ml(a, "input", b))
        }
    }

    function cp() {
        var a = {};
        a.event = ze("event", 1);
        a.ecommerce = ze("ecommerce", 1);
        a.gtm = ze("gtm");
        a.eventModel = ze("eventModel");
        return a
    }

    function Cp(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(mc[c][Mb.Ra]);
                if (Xd[d] || void 0 !== mc[c][Mb.Ji] || oe[d]) b[c] = !0;
                N(58) || 0 !== mc[c][Mb.Ra].indexOf("__ccd") && 0 !== mc[c][Mb.Ra].indexOf("__ogt") && "__set_product_settings" !== mc[c][Mb.Ra] || (b[c] = !0)
            }
        return b
    }

    function Dp(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && mc[c] && !Yd[String(mc[c][Mb.Ra])]) return !0;
        return !1
    }
    var Gp = function(a, b, c, d) {
            Fp.push("event", [b, a], c, d)
        },
        Hp = function(a, b, c, d) {
            Fp.push("get", [a, b], c, d)
        },
        Ip = function() {
            this.status = 1;
            this.D = {};
            this.h = {};
            this.K = {};
            this.P = null;
            this.B = {};
            this.m = !1
        },
        Jp = function(a, b, c, d) {
            var e = z();
            this.type = a;
            this.m = e;
            this.W = b || "";
            this.h = c;
            this.messageContext = d
        },
        Kp = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        Lp = function(a, b) {
            var c = ij(b);
            return a.m[c.U] = a.m[c.U] || new Ip
        },
        Mp = function(a, b, c, d) {
            if (d.W) {
                var e = Lp(a, d.W),
                    f = e.P;
                if (f) {
                    var g = J(c),
                        l = J(e.D[d.W]),
                        m = J(e.B),
                        n = J(e.h),
                        p = J(a.B),
                        q = {};
                    if (rk) try {
                        q = J(se)
                    } catch (v) {
                        P(72)
                    }
                    var t = ij(d.W).prefix,
                        u = function(v) {
                            ll(d.messageContext.eventId, t, v);
                            var w = g[R.g.Mb];
                            w && G(w)
                        },
                        r = Kl(Il(Hl(Gl(El(Dl(Fl(Cl(Bl(Al(new zl(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("2")
                            }
                        }), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("3")
                            }
                        }));
                    try {
                        ll(d.messageContext.eventId, t, "1"), Tn(d.type, d.W, r), f(d.W, b, d.m, r)
                    } catch (v) {
                        ll(d.messageContext.eventId, t, "4")
                    }
                }
            }
        };
    Kp.prototype.register = function(a, b, c) {
        var d = Lp(this, a);
        3 !== d.status && (d.P = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
    };
    Kp.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!ij(c)) return;
            if (c) {
                var e = ij(c);
                e && 1 === Lp(this, c).status && (Lp(this, c).status = 2, this.push("require", [{}], e.U, {}))
            }
            Lp(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new Jp(a, c, b, d));
        d.deferrable || this.flush()
    };
    Kp.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.W || Lp(this, f.W).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = Lp(this, f.W);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.h[0], function(t, u) {
                            J(Ja(t, u), b.B)
                        });
                        break;
                    case "config":
                        g = Lp(this, f.W);
                        e.hb = {};
                        k(f.h[0], function(t) {
                            return function(u, r) {
                                J(Ja(u, r), t.hb)
                            }
                        }(e));
                        var l = !!e.hb[R.g.Mc];
                        delete e.hb[R.g.Mc];
                        var m = ij(f.W),
                            n = m.U === m.id;
                        l || (n ? g.B = {} : g.D[f.W] = {});
                        g.m && l || Mp(this, R.g.va, e.hb, f);
                        g.m = !0;
                        n ? J(e.hb, g.B) : (J(e.hb, g.D[f.W]), P(70));
                        d = !0;
                        break;
                    case "event":
                        g = Lp(this, f.W);
                        e.nd = {};
                        k(f.h[0], function(t) {
                            return function(u, r) {
                                J(Ja(u, r), t.nd)
                            }
                        }(e));
                        Mp(this, f.h[1], e.nd, f);
                        break;
                    case "get":
                        g = Lp(this, f.W);
                        var p = {},
                            q = (p[R.g.Qa] = f.h[0], p[R.g.ab] = f.h[1], p);
                        Mp(this, R.g.Ca, q, f)
                }
                this.h.shift();
                Np(this, f)
            }
            e = {
                hb: e.hb,
                nd: e.nd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Np = function(a, b) {
            if ("require" !== b.type)
                if (b.W)
                    for (var c = Lp(a, b.W).K[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.K)
                                for (var g = f.K[b.type] || [], l = 0; l < g.length; l++) g[l]()
                        }
        },
        Op = function(a, b) {
            var c = Fp,
                d = J(b);
            J(Lp(c, a).h, d);
            Lp(c, a).h = d
        },
        Fp = new Kp;
    var Pp = {},
        Qp = {},
        Rp = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    sd: d.sd,
                    pd: d.pd
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) {
                    if (d.sd = ij(f), d.sd) {
                        var g = Tg();
                        ra(g, function(q) {
                            return function(t) {
                                return q.sd.U === t
                            }
                        }(d)) ? b.push(f) : c.push(f)
                    }
                } else {
                    var l = Pp[f] || [];
                    d.pd = {};
                    l.forEach(function(q) {
                        return function(t) {
                            return q.pd[t] = !0
                        }
                    }(d));
                    for (var m = Sg(), n = 0; n < m.length; n++)
                        if (d.pd[m[n]]) {
                            b = b.concat(Tg());
                            break
                        }
                    var p = Qp[f] || [];
                    p.length && (b = b.concat(p))
                }
            }
            return {
                Ij: b,
                Kj: c
            }
        },
        Sp = function(a) {
            k(Pp, function(b, c) {
                var d =
                    c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Tp = function(a) {
            k(Qp, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Up = "HA GF G UA AW DC MC".split(" "),
        Vp = !1,
        Wp = !1;

    function Xp(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: pe()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Yp = {
            config: function(a, b) {
                var c = Xp(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Kb(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = ij(a[1]);
                    if (e) {
                        dl(c.eventId, "gtag.config");
                        var f = e.U,
                            g = e.id !== f;
                        if (g ? -1 === Tg().indexOf(f) : -1 === Sg().indexOf(f)) {
                            if (!N(61) || !d[R.g.Md]) {
                                var l = d[R.g.na] || Fp.B[R.g.na];
                                g ? Gn(f, l, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : Fn(f, l, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (ae && !g && !d[R.g.Mc]) {
                                var m = Wp;
                                Wp = !0;
                                if (m) return
                            }
                            Vp || P(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    Tp(e.id);
                                    var n = e.id,
                                        p = d[R.g.Kd] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var t = Qp[p[q]] || [];
                                        Qp[p[q]] = t;
                                        0 > t.indexOf(n) && t.push(n)
                                    }
                                } else {
                                    Sp(e.id);
                                    var u = e.id,
                                        r = d[R.g.Kd] || "default";
                                    r = r.toString().split(",");
                                    for (var v = 0; v < r.length; v++) {
                                        var w = Pp[r[v]] || [];
                                        Pp[r[v]] = w;
                                        0 > w.indexOf(u) && w.push(u)
                                    }
                                }
                            delete d[R.g.Kd];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                                y;
                            delete d[R.g.Mb];
                            for (var x = g ? [e.id] : Tg(), A = 0; A < x.length; A++) {
                                var B = J(b);
                                Fp.push("config", [d], x[A], B)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    P(39);
                    var c = Xp(a, b),
                        d = a[1];
                    "default" === d ? bg(a[2]) : "update" === d && dg(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Kb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = J(e), e[R.g.Mb] && (g.eventCallback = e[R.g.Mb]), e[R.g.Fd] && (g.eventTimeout = e[R.g.Fd]));
                    var l = Xp(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        t = q && q[R.g.xb];
                    void 0 === t && (t = ve(R.g.xb, 2), void 0 === t && (t = "default"));
                    if (h(t) || qa(t)) {
                        var u = t.toString().replace(/\s+/g, "").split(","),
                            r = Rp(u),
                            v = r.Ij,
                            w = r.Kj;
                        if (w.length)
                            for (var y = q && q[R.g.na] || Fp.B[R.g.na], x = 0; x < w.length; x++) {
                                var A = ij(w[x]);
                                A && Gn(A.U, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = kj(v)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        dl(m,
                            c);
                        for (var C = [], H = 0; H < B.length; H++) {
                            var I = B[H],
                                D = J(b);
                            if (-1 !== Up.indexOf(I.prefix)) {
                                var K = J(d),
                                    O = D.eventMetadata || {};
                                O.hasOwnProperty("is_external_event") || (O.is_external_event = !D.fromContainerExecution);
                                D.eventMetadata = O;
                                delete K[R.g.Mb];
                                Gp(c, K, I.id, D)
                            }
                            C.push(I.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[R.g.xb] = C.join() : delete g.eventModel[R.g.xb];
                        Vp || P(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                P(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && oa(a[3])) {
                    var c = ij(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Vp || P(43);
                        var f = Fp.B[R.g.na];
                        if (!ra(Tg(), function(l) {
                                return c.U === l
                            })) Gn(c.U, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Up.indexOf(c.prefix)) {
                            Xp(a, b);
                            var g = {};
                            Yf(J((g[R.g.Qa] = d, g[R.g.ab] = e, g)));
                            Hp(d, function(l) {
                                G(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Vp = !0;
                    var c = Xp(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Kb(a[1]) ? c = J(a[1]) : 3 == a.length && h(a[1]) && (c = {}, Kb(a[2]) || qa(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Xp(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    J(c);
                    var g = J(c);
                    Fp.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    N(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Zp = {
            policy: !0
        };
    var $p = function(a) {
            var b = E[Ud.fa].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        aq = function(a) {
            var b = E[Ud.fa],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var bq = !1,
        cq = [];

    function dq() {
        if (!bq) {
            bq = !0;
            for (var a = 0; a < cq.length; a++) G(cq[a])
        }
    }
    var eq = function(a) {
        bq ? G(a) : cq.push(a)
    };
    var nq = function() {
            try {
                var a, b;
                var m, n = Qg.M,
                    p = ed('script[src*="gtm/js?id=' + n + '"],script[src*="optimize.js?id=' + n + '"]');
                m = p && 0 < p.length ? p[0] : null;
                b = m ? m.hasAttribute("gtm") ? "gtmo" : m.hasAttribute("async") ? "opta" : "opts" : "optu";
                b || (b = "gaoo");
                var q = gq(hq, m && m.src),
                    t = q.jd,
                    u = q.kd,
                    r = q.ne,
                    v = q.oe,
                    w = q.fe,
                    y = q.te,
                    x = q.Zc,
                    A = q.jf,
                    B = q.Yc;
                "h0" != x || iq || (x = "h3");
                jq = {
                    Zc: x,
                    Yc: B,
                    jj: a,
                    Gj: b,
                    jf: A,
                    oe: v,
                    fe: w,
                    te: y,
                    ne: r,
                    jd: t,
                    kd: u,
                    lh: kq,
                    Gh: lq
                };
                mq(jq)
            } catch (C) {}
        },
        oq = function() {
            var a = E.gaData,
                b = 0,
                c = void 0;
            if (a)
                for (var d in a)
                    if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
                        b += a[d].hitcount;
                        var e = Number(a[d].first_hit);
                        e && (!c || e < c) && (c = e)
                    }
            return {
                mh: b,
                jh: c
            }
        },
        gq = function(a, b) {
            var c, d, e, f, g, l, m, n, p;
            var q = E.performance;
            if (q) {
                if (b) {
                    var t = q.getEntriesByName(b)[0];
                    if (t) {
                        var u = q.getEntriesByType("resource"),
                            r = 0;
                        u && 0 < u.length && (r = u[0].startTime);
                        f = Math.round(t.startTime - r);
                        g = Math.round(t.duration);
                        e = u.indexOf(t); - 1 === e && (e =
                            void 0);
                        l = Math.round(a - (t.startTime + t.duration))
                    }
                }
                var v = q.timing;
                if (v.domContentLoadedEventStart) {
                    var w = v.domContentLoadedEventStart - v.navigationStart;
                    w && (d = Math.round(a - w))
                }
                var y = q.getEntriesByType("paint").filter(function(C) {
                    return "first-contentful-paint" === C.name
                })[0];
                y && (c = Math.round(a - y.startTime))
            }
            var x = E[Ud.fa].hide;
            if (x) {
                if (void 0 === x[Qg.M]) m = "h2";
                else {
                    var A = !1;
                    if (null === x.end)
                        for (var B in x)
                            if (x.hasOwnProperty(B) && B.startsWith(Qg.M) && !0 === x[B]) {
                                A = !0;
                                break
                            }
                    m = A ? "h0" : "h1"
                }
                x.start && !isNaN(x.start) &&
                    (q ? q.timing && (p = Math.round(a + q.timing.navigationStart - x.start)) : p = a - x.start);
                isNaN(x.timeout) || (n = x.timeout)
            }
            return {
                jd: d,
                kd: c,
                ne: e,
                oe: f,
                fe: g,
                te: l,
                Zc: m,
                jf: n,
                Yc: p
            }
        },
        mq = function(a, b) {
            b = void 0 === b ? "ol" : b;
            var c = function(e, f) {
                    null != f && (d += e + encodeURIComponent(f))
                },
                d = sk;
            c("&t=", b);
            c("&s=", a.Zc);
            c("&h=", a.Yc);
            c("&g=", a.jj);
            c("&p=", a.Gj);
            c("&o=", a.jf);
            c("&l=", function() {
                var e = ke;
                return e ? fq - za(e) : void 0
            }());
            c("&q=", a.oe);
            c("&f=", a.fe);
            c("&e=", a.te);
            c("&i=", a.ne);
            c("&d=", a.jd);
            c("&c=", a.kd);
            c("&tr=", a.pk);
            c("&jl=", a.Ej);
            c("&jf=", a.Cj);
            c("&ji=", a.Dj);
            c("&jq=", a.Fj);
            c("&jd=", a.Aj);
            c("&jx=", a.Bj);
            c("&hc=", a.lh);
            c("&fh=", a.Gh);
            d += "&sr=0.050000";
            c("&ps=", pq);
            c("&cb=", sa());
            xb(d);
        },
        qq = !1,
        fq, hq, iq, pq, jq, kq, lq;
    pq = Math.random(), qq = "0.050000" > pq;
    var rq = function() {
            if (!qq || fq) return;
            fq = z();
            hq = Gb() || fq;
            iq = !!F.querySelector("body");
            var a = oq(),
                b = a.jh;
            kq = a.mh;
            lq = b ? fq - b : void 0;
            eq(nq);
        },
        tq = function(a) {
            var b = sq;
            if (!qq) return;
            try {
                var c = z(),
                    d = Gb() || c,
                    e = oq(),
                    f = e.mh,
                    g = e.jh,
                    l = g ? c - g : void 0;
                eq(function() {
                    var m = gq(d, b),
                        n = m.jd,
                        p = m.kd,
                        q = m.ne,
                        t = m.oe,
                        u = m.fe,
                        r = m.te,
                        v = m.Zc,
                        w = m.Yc,
                        y = J(jq || {});
                    J(a, y);
                    J({
                        Zc: v,
                        Yc: w,
                        jd: n,
                        kd: p,
                        Dj: q,
                        Fj: t,
                        Aj: u,
                        Bj: r,
                        lh: f,
                        Gh: l
                    }, y);
                    mq(y, "od")
                })
            } catch (m) {}
        };
    var vq = function(a) {
        if (uq(a)) return a;
        this.h = a
    };
    vq.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var uq = function(a) {
        return !a || "object" !== Ib(a) || Kb(a) ? !1 : "getUntrustedMessageValue" in a
    };
    vq.prototype.getUntrustedMessageValue = vq.prototype.getUntrustedMessageValue;
    var wq = 0,
        xq = {},
        yq = [],
        zq = [],
        Aq = !1,
        Bq = !1;

    function Cq(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Dq = function(a) {
            return E[Ud.fa].push(a)
        },
        Eq = function(a, b) {
            var c = Vd[Ud.fa],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = E.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (E.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Fq(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && ye(e), ye(e, f))
        });
        ke || (ke = a["gtm.start"]);
        rq();
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = pe(), a["gtm.uniqueEventId"] = d, ye("gtm.uniqueEventId", d));
        return Ep(a)
    }

    function Gq(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (xa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Hq() {
        var a;
        if (zq.length) a = zq.shift();
        else if (yq.length) a = yq.shift();
        else return;
        var b;
        var c = a;
        if (Aq || !Gq(c.message)) b = c;
        else {
            Aq = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = pe());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            yq.unshift(l, c);
            if (rk && Qg.M) {
                var m;
                if (Qg.Ve) {
                    var n = Qg.M,
                        p = Vg().destination[n];
                    m = p && p.context
                } else {
                    var q = Qg.M,
                        t = Vg().container[q];
                    m = t && t.context
                }
                var u = m,
                    r, v = Ve(E.location.href);
                r = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution,
                    y = u && u.source,
                    x = Qg.M,
                    A = Qg.Hb,
                    B = Qg.Ve;
                Dk || (Dk = r);
                Ck.push(x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function Iq() {
        for (var a = !1, b; !Bq && (b = Hq());) {
            Bq = !0;
            delete se.eventModel;
            ue();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Bq = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = ve(l, 1);
                        if (qa(m) || Kb(m)) m = J(m);
                        te[l] = m
                    }
                try {
                    if (oa(d)) try {
                        d.call(we)
                    } catch (C) {} else if (qa(d)) {
                        var n =
                            d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                u = ve(p.join("."), 2);
                            if (null != u) try {
                                u[q].apply(u, t)
                            } catch (C) {}
                        }
                    } else {
                        var r = void 0,
                            v = !1;
                        if (xa(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = Yp[d[0]];
                                    if (w && (!e.fromContainerExecution || !Zp[d[0]])) {
                                        r = w(d, e);
                                        break a
                                    }
                                }
                                r = void 0
                            }(v = r && "set" === d[0] && !!r.event) && P(101)
                        }
                        else r = d;
                        if (r) {
                            var y = Fq(r, e);
                            a = y || a;
                            v && y && P(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && ue(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var A = xq[String(x)] || [], B = 0; B < A.length; B++) zq.push(Jq(A[B]));
                        A.length && zq.sort(Cq);
                        delete xq[String(x)];
                        x > wq && (wq = x)
                    }
                    Bq = !1
                }
            }
        }
        return !a
    }

    function Kq() {
        var b = Iq();
        try {
            $p(Qg.M)
        } catch (c) {}
        return b
    }

    function Mo(a) {
        if (wq < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            xq[b] = xq[b] || [];
            xq[b].push(a)
        } else zq.push(Jq(a)), zq.sort(Cq), G(function() {
            Bq || Iq()
        })
    }

    function Jq(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Mq = function() {
            function a(f) {
                var g = {};
                if (uq(f)) {
                    var l = f;
                    f = uq(l) ? l.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = pb(Ud.fa, []),
                c = Vd[Ud.fa] = Vd[Ud.fa] || {};
            !0 === c.pruned && P(83);
            xq = Ko().get();
            No();
            $n(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            eq(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < Vd.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new vq(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                yq.push.apply(yq, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (P(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return Iq() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            yq.push.apply(yq, e);
            if (Lq()) {
                G(Kq)
            }
        },
        Lq = function() {
            var a = !0;
            return a
        };

    function Nq(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = z();
        return b < c + 3E5 && b > c - 9E5
    }

    function Oq(a) {
        return a && 0 === a.indexOf("pending:") ? Nq(a.substr(8)) : !1
    };
    var rc = {};
    rc.Rd = new String("undefined");
    var or = E.clearTimeout,
        pr = E.setTimeout,
        V = function(a, b, c, d) {
            if (Pg()) {
                b && G(b)
            } else return ub(a, b, c, d)
        },
        qr = function() {
            return new Date
        },
        rr = function() {
            return E.location.href
        },
        sr = function(a) {
            return Te(Ve(a), "fragment")
        },
        tr = function(a) {
            return Ue(Ve(a))
        },
        ur = function(a, b) {
            return ve(a, b || 2)
        },
        vr = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Dq(a)) : d = Dq(a);
            return d
        },
        wr = function(a, b) {
            E[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === E[a] || c && !E[a]) && (E[a] = b);
            return E[a]
        },
        xr = function(a, b, c) {
            return pg(a, b, void 0 === c ? !0 : !!c)
        },
        yr = function(a, b, c) {
            return 0 === Fg(a, b, c)
        },
        zr = function(a, b) {
            if (Pg()) {
                b && G(b)
            } else wb(a, b)
        },
        Ar = function(a) {
            return !!Vq(a, "init", !1)
        },
        Br = function(a) {
            Tq(a, "init", !0)
        },
        Cr = function(a, b, c) {
            rk && (Lb(a) || ml(c, b, a))
        };

    var Er = function(a) {
            if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
            var b = a.tagName.toUpperCase();
            return "SCRIPT" == b || "STYLE" == b || "LINK" == b
        },
        Fr = function(a, b, c) {
            try {
                null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
            } catch (d) {
                return d
            }
            return null
        },
        Gr = function(a, b, c) {
            var d = a.getAttribute(b);
            return Fr(a, b, c) ? 8 : function() {
                Fr(a, b, d)
            }
        },
        Jr = function(a, b, c) {
            var d, e, f = a.ownerDocument || a.document || document;
            c = (c || "").toLowerCase();
            "after" == c ? (d = a.parentNode, e = a.nextSibling) : "insert" == c ? (d = a, e = a.firstChild) : "append" ==
                c ? (d = a, e = null) : (d = a.parentNode, e = a);
            if (!d || d == f) return {
                result: 1,
                uj: []
            };
            var g = Hr(b, d);
            Ir(g, "SCRIPT");
            Ir(g, "NOSCRIPT");
            var l = [];
            if (g.firstChild)
                for (var m = g.firstChild; m;) {
                    var n = m.nextSibling;
                    l.push(m);
                    d.insertBefore(m, e);
                    m = n
                }
            var p = a.nextSibling;
            "replace" == c && d.removeChild(a);
            return {
                result: function() {
                    for (; 0 < l.length;) d.removeChild(l.pop());
                    "replace" == c && d.insertBefore(a, p)
                },
                uj: l.slice()
            }
        },
        Kr = {
            SELECT: [1, '<select multiple="multiple">', "</select>"],
            FIELDSET: [1, "<fieldset>", "</fieldset>"],
            MAP: [1, "<map>",
                "</map>"
            ],
            OBJECT: [1, "<object>", "</object>"],
            TABLE: [1, "<table>", "</table>"],
            TBODY: [2, "<table><tbody>", "</tbody></table>"],
            COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
            TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
        },
        Hr = function(a, b) {
            var c = 0,
                d = "",
                e = "",
                f = Kr[b.tagName];
            null != f && (c = f[0], d = f[1], e = f[2]);
            var g = b.ownerDocument.createElement("div"),
                l = lb(d + (a || "") + e);
            void 0 !== g.tagName && mb(g);
            g.innerHTML = kb(l);
            for (var m = g; 0 < c;) {
                var n = m.firstChild;
                if (null == n.firstChild) return b.ownerDocument.createElement("div");
                m = n;
                c--
            }
            return m
        },
        Ir = function(a, b) {
            for (var c = a.getElementsByTagName(b), d = [], e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                f.parentNode.removeChild(f);
                d.push(f)
            }
        },
        Lr = function(a) {
            var b = null,
                c = null;
            try {
                b = new Function("element", a)
            } catch (d) {
                c = d
            }
            return {
                ff: b,
                error: c
            }
        },
        Pr = function(a, b, c, d, e) {
            var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var l = Mr(g),
                    m = l.rules.length;
                l.insertRule(f, m);
                return function() {
                    l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
                    l.insertRule("x {}",
                        m)
                }
            }
            var n = Nr(f, g);
            Or(n, g);
            var p = n.parentNode;
            return function() {
                p.removeChild(n)
            }
        },
        Qr = null,
        Mr = function(a) {
            if (Qr) return Qr;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b];
                if (!c.href) {
                    var d = c.ownerNode;
                    if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return Qr = c
                }
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return Qr = a.styleSheets[0]
        },
        Nr = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        Or = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        },
        Rr = function(a, b, c, d) {
            if (a.style.setProperty) try {
                var e = a.style.getPropertyValue(b),
                    f = a.style.getPropertyPriority(b);
                a.style.setProperty(b, c, d ? "important" : "");
                return function() {
                    a.style.setProperty(b, "", f);
                    a.style.setProperty(b, e, f)
                }
            } catch (l) {}
            var g = a.style.cssText;
            a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
            return function() {
                a.style.cssText = g
            }
        },
        Tr = function(a, b, c,
            d) {
            if (Er(a)) return 7;
            if (b) return Sr(a, b, d);
            if (c && c.parentNode) {
                var e = a.parentNode,
                    f = a.nextSibling;
                try {
                    c.parentNode.insertBefore(a, c.nextSibling)
                } catch (g) {
                    return 9
                }
                return function() {
                    e.insertBefore(a, f)
                }
            }
            return 4
        },
        Sr = function(a, b, c) {
            var d = a.parentNode,
                e = a.nextSibling;
            c = (c || "").toLowerCase();
            try {
                if ("bottom" == c) b.appendChild(a);
                else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);
                else if ("before" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a, b);
                    else return 5;
                else if ("after" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a,
                        b.nextSibling);
                    else return 5
            } catch (f) {
                return 9
            }
            return function() {
                try {
                    d.insertBefore(a, e)
                } catch (f) {}
            }
        },
        Ur = function(a, b, c) {
            if (0 <= b && b < a.childNodes.length) {
                var d = a.childNodes[b];
                if (null != d && d.nodeType == Node.TEXT_NODE) {
                    var e = d.nodeValue;
                    d.nodeValue = c;
                    return function() {
                        d.nodeValue = e
                    }
                }
                return 2
            }
            return 3
        },
        Vr = function(a, b, c, d) {
            c ? d = c.nextSibling : d && (c = d.previousSibling);
            if (null != c && c.nodeType == Node.TEXT_NODE) {
                var e = c.nodeValue;
                c.nodeValue += a;
                return function() {
                    c.nodeValue = e
                }
            }
            if (null != d && d.nodeType == Node.TEXT_NODE) {
                var f =
                    d.nodeValue;
                d.nodeValue = a + d.nodeValue;
                return function() {
                    d.nodeValue = f
                }
            }
            var g = (b.ownerDocument || b.document || document).createTextNode(a);
            d ? b.insertBefore(g, d) : b.appendChild(g);
            return function() {
                b.removeChild(g)
            }
        },
        Wr = function(a) {
            var b = document.createElement("a");
            a && (b.href = a);
            return b
        };
    var $r = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function as(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var bs = new ta;

    function cs(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = bs.get(e);
            f || (f = new RegExp(b, d), bs.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function ds(a, b) {
        function c(g) {
            var l = Ve(g),
                m = Te(l, "protocol"),
                n = Te(l, "host", !0),
                p = Te(l, "port"),
                q = Te(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function es(a) {
        return fs(a) ? 1 : 0
    }

    function fs(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (es(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < $r.length; g++) {
                            var l = $r[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return as(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return cs(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return ds(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);

    function xs() {
        return E.gaGlobal = E.gaGlobal || {}
    }
    var ys = function() {
            var a = xs();
            a.hid = a.hid || sa();
            return a.hid
        },
        zs = function(a, b) {
            var c = xs();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Ws = function() {
            var a = !0;
            Oh(7) && Oh(9) && Oh(10) || (a = !1);
            return a
        },
        Xs = function() {
            var a = !0;
            Oh(3) && Oh(4) || (a = !1);
            return a
        };
    var zt = window,
        At = document,
        Bt = function(a) {
            var b = zt._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === zt["ga-disable-" + a]) return !0;
            try {
                var c = zt.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = jg("AMP_TOKEN", String(At.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return At.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Jt(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[R.g.Ma] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var St = function(a, b) {};

    function Rt(a, b) {
        var c = function() {};
        return c
    }

    function Tt(a, b, c) {};
    var Ov = Rt;
    var Qv = encodeURI,
        Y = encodeURIComponent,
        Rv = function(a, b, c) {
            xb(a, b, c)
        },
        Sv = function(a, b) {
            if (!a) return !1;
            var c = Te(Ve(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Tv = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Wv = function(a) {
            if (!Uv[a]) {
                Uv[a] = !0;
                var b = E[a] || {};
                E[a] = b;
                var c = function(e) {
                        return Vv[e]
                    },
                    d = b.get;
                b.get = d ? function(e) {
                    return void 0 !== Vv[e] ? Vv[e] : d(e)
                } : c
            }
        },
        Zv = function(a, b) {
            Vv[a] = b;
            for (var c = Xv(a), d = 0; d < c.length; d++) Yv(c[d], a, b);
            c = Xv("");
            for (var e = 0; e < c.length; e++) Yv(c[e], a, b)
        },
        Yv = function(a, b, c) {
            try {
                a(c, b, Qg.M)
            } catch (d) {}
        },
        Xv = function(a) {
            $v[a] = $v[a] || [];
            return $v[a]
        },
        Vv = {},
        $v = {},
        Uv = {};
    var aw = function() {
            E.gaData = E.gaData || {};
            return E.gaData
        },
        bw = function(a, b) {
            b = void 0 === b ? !1 : b;
            E.gaData = E.gaData || {};
            var c = E.gaData,
                d = c.tracker_created;
            c.tracker_created = function(e) {
                b && a(e);
                d && oa(d) && d(e);
                b || a(e)
            }
        },
        cw = function(a) {
            var b = E[to()];
            try {
                if (oa(b) && oa(b.getAll)) return b.getAll().filter(function(c) {
                    return c.get("trackingId") === a
                })
            } catch (c) {}
            return []
        },
        rw = function(a, b) {
            var c = iw[a];
            if (c) G(function() {
                return b(c)
            });
            else {
                var d = cw(a)[0];
                d ? (iw[a] = d, nw || (nw = d), G(function() {
                    return b(d)
                })) : (ow[a] || (ow[a] = []), ow[a].push(b), pw || (pw = !0, bw(function(e) {
                    var f = e.get("trackingId");
                    if (ow[f]) {
                        if (qw[f]) {
                            qw[f] = !1;
                            var g = E[to()];
                            oa(g) && g("ga.require", "_" + Qg.M)
                        }
                        nw || (nw = e);
                        iw[f] = e;
                        for (var l = ow[f], m; void 0 !== (m = l.shift());) m(e);
                        ow[f] = void 0
                    }
                })))
            }
        },
        sw = function(a, b, c, d) {
            var e = E[to()];
            if ("data" === b.hitType && c) {
                var f = E.gaData,
                    g = Number(f && f[d] && f[d].first_hit),
                    l = z();
                !isNaN(g) && l > g && (b.queueTime = Math.min(2E3, l + 100 - g))
            }
            try {
                var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
                e(m, b)
            } catch (n) {}
        },
        iw = {},
        ow = {},
        qw = {},
        nw, pw = !1,
        tw, uw = function(a, b, c) {
            rw(a, function(d) {
                G(function() {
                    sw(d, b, c, a)
                })
            })
        },
        vw = function() {
            var a = !1;
            bw(function() {
                if (!a) {
                    var b = E[to()];
                    oa(b) && (b("ga.require", "__" + Qg.M), a = !0)
                }
            }, !0)
        },
        ww = function(a, b, c) {
            var d = aw(),
                e = d[a] = d[a] || {};
            (e.pending_experiments = e.pending_experiments || {})[b] = c;
            e.experiments = e.experiments || {};
            e.experiments[b] = c
        },
        xw = function(a) {
            var b = aw()[a];
            return b ? b.hitcount || 0 : 0
        },
        Aw = function(a, b, c, d, e, f) {
            Zv(b, c);
            var g = d;
            if (d) {
                var l = Se(E.location, "host");
                Se(Ve(d), "host") === l && (d = "")
            }
            bw(function(q) {
                q.set("referrer",
                    d ? d : void 0)
            }, !0);
            if (yw(a)) Vd.ga4_referrer_override = g, zw(a, b, c, e, f);
            else {
                ww(a, b, c);
                for (var m = cw(a), n = 0; n < m.length; ++n) m[n].set("referrer", d ? d : void 0);
                if (0 < xw(a)) {
                    var p = m[0];
                    p && sw(p, {
                        hitType: "data"
                    }, !0, a)
                }
            }
        },
        yw = function(a) {
            return !!a && "G-" === a.substring(0, 2)
        },
        zw = function(a, b, c, d, e) {
            if (yw(a)) {
                var f = Io(a, "experiment_impression", {
                    experiment_id: b,
                    variant_id: c
                });
                Lo(f, d, {
                    originatingEntity: e,
                    deferrable: !0
                })
            } else ww(a, b, c), 0 < xw(a) && uw(a, {
                hitType: "data"
            }, !0)
        };

    var Ew = function(a, b, c) {
            function d() {
                f || (f = !0, !0 !== Bw && (Bw = !1), Cw(c), $p(e))
            }
            sq = a;
            var e = "OPT-MPW2FJ4_" + b,
                f = !1;
            aq(e);
            E.google_optimize = E.google_optimize || {};
            var g = E.google_optimize;
            g["OPT-MPW2FJ4"] = g["OPT-MPW2FJ4"] || {};
            g["OPT-MPW2FJ4"].optimize_dyn = function(m) {
                m.split(",").forEach(function(n) {
                    Dw[n] = !0
                });
                Bw = !0;
                d()
            };
            ub(a, void 0, d);
            var l = E[Ud.fa];
            E.setTimeout(function() {
                d()
            }, Number(l && l.hide && l.hide.timeout) || 1E4)
        },
        Cw = function(a) {
            if (void 0 !== Fw) {
                var b = Fw - Gw,
                    c, d;
                Bw ? c = z() - Fw : d = z() - Fw;
                tq({
                    pk: b,
                    Ej: c,
                    Cj: d
                })
            }
            Dw.optimize_ready = !0;
            Dq({
                event: "opt.dyn"
            });
            Dq({
                event: "opt.js"
            });
            if (a && 0 < a.length) {
                var e = {};
                E[Ud.fa].forEach(function(f) {
                    var g = f.event;
                    g && (e[g] = !0)
                });
                a.forEach(function(f) {
                    e[f] && Dq({
                        event: f
                    })
                })
            }
            G(function() {
                uo("_" + Qg.M)
            })
        },
        Hw = function(a, b, c, d, e, f, g, l, m) {
            function n(w, y) {
                y && (u += "&" + w + "=" + encodeURIComponent(y))
            }
            Gw = z();
            if (a || b || c) {
                var p = void 0;
                if (b) {
                    var q = Oi().aw;
                    q && (p = q[0])
                }
                if (f && (a || c || p)) {
                    var t = 1,
                        u, r = "OPT-MPW2FJ4_" + t++;
                    aq(r);
                    var v = function(w) {
                        tw = w;
                        Fw = z();
                        a || b ? (u = "https://www.google-analytics.com/gtm/optimize-dyn.js?id=OPT-MPW2FJ4", a && n("cid", w), n("gclid",
                            p), g && (n("gtm_auth", ""), n("gtm_preview", "")), (g || a) && n("cb", String(Math.random())), Ew(u, t++, e)) : Cw(e);
                        $p(r)
                    };
                    yw(d) ? Lo(Go("get", d, "client_id", v), l, {
                        originatingEntity: m,
                        deferrable: !0
                    }) : (qw[d] = !0, rw(d, function(w) {
                        return v(w.get("clientId"))
                    }))
                } else Cw(e)
            }
        },
        Dw = {},
        Gw, Fw, Bw, sq;
    var Iw = function(a, b) {
        this.be = a;
        this.fd = b
    };
    Iw.prototype.toString = function() {
        var a = "" + this.be;
        1 < this.fd && (a = a + "-" + this.fd);
        return a
    };
    var Jw = function(a, b) {
        this.m = a;
        this.h = b
    };
    Jw.prototype.toString = function() {
        return this.h + "." + this.m
    };
    var Kw = function() {
            var a = ve("optimize.cookie_path", 2);
            return h(a) ? a : "/"
        },
        Mw = function(a, b) {
            var c = new Lw(a, b);
            c.Mj();
            return c
        },
        Lw = function(a, b) {
            this.D = Math.floor(new Date / 864E5);
            this.B = a || "auto";
            this.h = b || Kw();
            this.m = new Iw(Kg(this.B), Lg(this.h));
            this.I = [];
            this.map = {}
        };
    aa = Lw.prototype;
    aa.pj = function(a) {
        if (!a) return "";
        var b = this.hf(a);
        return b ? b.m : ""
    };
    aa.gk = function(a, b, c, d, e) {
        var f, g;
        f = void 0 === f ? 10 : f;
        g = void 0 === g ? 3E3 : g;
        if (!a) return !1;
        void 0 == b && (b = "");
        this.qe(a, new Jw(b, c));
        this.Si(e);
        return this.Di(d,
            f, g)
    };
    aa.hf = function(a) {
        return this.map[a]
    };
    aa.nj = function() {
        for (var a = 0, b = 0; b < this.I.length; b++) "x" !== this.hf(this.I[b]).m[0] && a++;
        return a
    };
    aa.qe = function(a, b) {
        a && ("" === b.m ? this.zh(a) : (this.map[a] || this.I.push(a), this.map[a] = b))
    };
    aa.kk = function(a) {
        for (var b = 0; b < a.length; b++) this.qe(a[b][0], a[b][1])
    };
    aa.zh = function(a) {
        var b = this.I.indexOf(a);
        0 <= b && this.I.splice(b, 1);
        delete this.map[a]
    };
    aa.Vj = function() {
        for (var a = [], b = 0; b < this.I.length; b++) {
            var c = this.I[b];
            this.map[c].h < this.D && a.push(c)
        }
        for (var d =
                0; d < a.length; d++) this.zh(a[d])
    };
    aa.mj = function() {
        for (var a = [], b = 0; b < this.I.length; b++) {
            var c = this.I[b];
            a.push([c, this.map[c]])
        }
        return a
    };
    aa.ej = function() {
        for (var a = 0, b = 0; b < this.I.length; b++) a = Math.max(a, this.map[this.I[b]].h);
        return 864E5 * a
    };
    aa.toString = function() {
        if (0 == this.I.length) return "";
        for (var a = [], b = 0; b < this.I.length; b++) {
            var c = this.I[b];
            a.push(c + "." + this.map[c].toString())
        }
        return "GAX1." + this.m.toString() + "." + a.join("!")
    };
    aa.Di = function(a, b, c) {
        var d = new Date;
        this.Vj();
        var e = this.nj();
        if (e >
            b || e > (a || 10) && og().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"), this.toString()).length > c) return !1;
        d.setTime(this.ej());
        if ("auto" != this.B) return this.m = new Iw(Kg(this.B), Lg(this.h)), 0 === Fg("_gaexp", this.toString(), {
            path: this.h,
            domain: this.B,
            expires: d
        });
        for (var f = Cg(), g = 0; g < f.length; g++)
            if (this.m = new Iw(Kg(f[g]), Lg(this.h)), 0 === Fg("_gaexp", this.toString(), {
                    path: this.h,
                    domain: f[g],
                    expires: d
                })) return !0;
        return !1
    };
    aa.Mj = function() {
        var a = sg("_gaexp", this.m.be, this.m.fd);
        if (a) {
            var b = this.Nj(a);
            b &&
                this.kk(b.mj())
        }
    };
    aa.Nj = function(a) {
        for (var b = new Lw(this.B, this.h), c = a.split("!"), d = 0; d < c.length; d++) {
            var e = c[d].split(".");
            if (3 == e.length) {
                if (isNaN(Number(e[1]))) return;
                b.qe(e[0], new Jw(e[2], Number(e[1])))
            }
        }
        return b
    };
    aa.Si = function(a) {
        a = a || {};
        var b = 0;
        a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.D - za(a[""]));
        for (var c = 0; c < this.I.length; c++) {
            var d = this.I[c];
            if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
                var e = this.hf(d);
                e.h = za(a[d]) + b;
                this.qe(d, e)
            }
        }
    };
    var Rw = function() {
            Nw = z();
            var a = Ow;
            Ow = [];
            for (var b = 0; b < a.length; b++) a[b]();
            Pw && (Pw.takeRecords(), Ow.length || (Pw && (Pw.disconnect(), Pw = null), Qw && (E.clearTimeout(Qw), Qw = null)))
        },
        Tw = function() {
            var a = z() - Nw;
            a >= Sw ? (Qw && (E.clearTimeout(Qw), Qw = null), Rw()) : Qw || (Qw = E.setTimeout(function() {
                Rw();
                Qw = null
            }, Sw - a))
        },
        Uw = function(a) {
            if (!E.MutationObserver) return !1;
            try {
                return Pw || (Pw = new MutationObserver(Tw), Pw.observe(F.documentElement, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    characterData: !0
                }), Nw = z()), Ow.push(a), !0
            } catch (b) {
                return !1
            }
        },
        Pw = null,
        Ow = [],
        Sw = 0,
        Nw = 0,
        Qw = null;
    var Vw = function(a, b) {
            b && Uw(a) || E.setTimeout(a, 80)
        },
        Ww = function(a) {
            try {
                return ed(a)
            } catch (b) {
                return null
            }
        },
        Xw = function(a) {
            if (Vn) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        },
        Yw = function(a, b) {
            for (var c = Ww(a.la) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.Fa && !Xw(f)) break;
                    d.push(f)
                }
            }
            return d
        },
        Zw = function(a, b) {
            return function() {
                a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
            }
        },
        $w = function(a, b) {
            a.gtmProgressiveApplied ||
                (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        ax = function(a, b, c) {
            var d;
            var e = [];
            if (b.Oa)
                if (b.Oa.af) d = [{
                    element: F.head
                }];
                else {
                    var f = Yw(b.Oa, b.id),
                        g = null;
                    b.se && (g = Yw(b.se, b.id + "-t"));
                    for (var l = 0; l < f.length; l++) {
                        var m = f[l],
                            n = void 0;
                        if (null != g && (n = g.length > l ? g[l] : null, !n && !Vn && (null === b.se.ja || b.Zg + e.length < b.se.ja))) break;
                        e.push({
                            element: m,
                            targetElement: n
                        })
                    }
                    d = e
                }
            else d = e;
            var p = d;
            if (!Vn && b.Pi && (!a || null == b.Oa.ja || b.Oa.ja != b.Yd + p.length)) return !1;
            for (var q = 0; q < p.length; q++) {
                var t = p[q].element,
                    u = p[q].targetElement,
                    r = void 0;
                b.Yd++;
                $w(t, b.id);
                u && (b.Zg++, r = b.id + "-t", $w(u, r));
                var v = b.Ti(t, u);
                oa(v) && b.ac.push(v);
                b.ac.push(Zw(t, b.id));
                u && r && b.ac.push(Zw(u, r))
            }
            if (b.Oa.ja && b.Oa.ja == b.Yd || Vn && (!c || b.Yd)) b.finished = !0;
            return !0
        },
        bx = function(a) {
            for (var b = {}, c = 0; c < a.Na.length; c++) {
                var d = a.Na[c];
                if (!d.Oa.af) {
                    var e = b[d.Oa.la];
                    e || (e = b[d.Oa.la] = Ww(d.Oa.la) || []);
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        g.gtmProgressiveApplied && g.gtmProgressiveApplied[d.id] || ($w(g, d.id), d.ac.push(Zw(g, d.id)))
                    }
                }
            }
        },
        cx = function(a) {
            if (!a.Bf) {
                for (var b =
                        a.Xc; b < a.Na.length; b++) {
                    var c = a.Na[b],
                        d = b == a.Xc;
                    if (!c.finished && !ax(d, c, a.Lh && a.Hh)) break;
                    c.finished && d && a.Xc++
                }
                a.Na.length > a.Xc ? (!a.pending && a.Lh && (a.pending = !0, Vw(function() {
                    a.pending = !1;
                    cx(a)
                }, a.Hh)), Vn || a.wf || (a.wf = function() {
                    G(function() {
                        cx(a)
                    })
                }, yb(F, "DOMContentLoaded", a.wf))) : bx(a)
            }
        },
        dx = {},
        ex = {},
        fx = void 0,
        gx = function(a, b, c, d) {
            var e = fx;
            if (!ad || !e) return !1;
            var f = {
                id: e.id + ":" + e.Na.length,
                Ti: b,
                ac: [],
                Pi: c,
                Oa: a,
                Yd: 0,
                se: d || null,
                Zg: 0,
                finished: !1
            };
            e.Na.push(f);
            null === a ? (f.finished = !0, b(null)) : cx(e);
            return !0
        },
        hx = function(a) {
            var b = na;
            try {
                b = Pr(a, "visibility", "hidden", !0)
            } catch (c) {}
            return function() {
                oa(b) && b.apply();
                b = null
            }
        },
        ix = function(a, b, c, d) {
            var e = b;
            if (!Vn && !a.af) {
                var f = hx(a.la);
                Xn.push(f);
                e = function(g, l) {
                    var m = b(g, l);
                    f();
                    return m
                }
            }
            return gx(a, e, c, d)
        };
    var Z = {
        o: {}
    };
    Z.o.dee = ["google"],
        function() {
            (function(a) {
                Z.__dee = a;
                Z.__dee.s = "dee";
                Z.__dee.isVendorTemplate = !0;
                Z.__dee.priorityOverride = 0;
                Z.__dee.isInfrastructure = !1
            })(function() {
                var a = !1;
                return a ? "gtm.sync" : "gtm.js"
            })
        }();

    Z.o.sel = ["google"],
        function() {
            (function(a) {
                Z.__sel = a;
                Z.__sel.s = "sel";
                Z.__sel.isVendorTemplate = !0;
                Z.__sel.priorityOverride = 0;
                Z.__sel.isInfrastructure = !1
            })(function(a) {
                return ed(a.vtp_selector)
            })
        }();
    Z.o.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.s = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0;
                Z.__c.isInfrastructure = !1
            })(function(a) {
                Cr(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : ur("gtm.url", 1)) || rr();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return tr(String(c));
                var e = Ve(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? qa(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Te(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Te(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();

    Z.o.dr = ["google"],
        function() {
            (function(a) {
                Z.__dr = a;
                Z.__dr.s = "dr";
                Z.__dr.isVendorTemplate = !0;
                Z.__dr.priorityOverride = 0;
                Z.__dr.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_treatmentId,
                    c = a.vtp_activate,
                    d = a.vtp_contentSignature,
                    e = a.vtp_isEmpty,
                    f = ur("optimize.experimentCallback", 1),
                    g = a.vtp_measurementId,
                    l = a.vtp_experimentCombination,
                    m = !!a.vtp_useMutationObserver,
                    n = m ? !!a.vtp_waitForElements : !0,
                    p;
                if (p = c) {
                    var q = dx[g];
                    p = !(!q || q == b)
                }
                if (p) a.vtp_gtmOnFailure();
                else {
                    var t = ur("optimize.allowlist", 1) || ur("optimize.whitelist",
                        1);
                    if (t && t[g] ? t[g] === d : Mn() ? e : 1) {
                        if (oa(f)) {
                            var u = {
                                xid: g,
                                xvar: l,
                                activate: c
                            };
                            try {
                                f(u)
                            } catch (I) {}
                        }
                        var r = !1,
                            v = !0;
                        if (c) {
                            var w;
                            dx[g] = b;
                            var y = ex[b];
                            if (y) {
                                for (var x = y.Xc = 0; x < y.Na.length; x++) y.Na[x].finished = !1;
                                cx(y);
                                w = !0
                            } else w = !1;
                            if (w) r = !0;
                            else {
                                var A = ex[b];
                                A || (A = {
                                    id: b,
                                    Na: [],
                                    Xc: 0,
                                    pending: !1,
                                    wf: void 0,
                                    Bf: !1,
                                    Hh: m,
                                    Lh: n
                                }, ex[b] = A);
                                fx = A
                            }
                        } else {
                            var B = ex[b];
                            if (!B || B.Bf) v = !1;
                            else {
                                for (; B.Na.length;)
                                    for (var C = B.Na.pop(); C.ac.length;) {
                                        var H = C.ac.pop();
                                        if (oa(H)) try {
                                            H()
                                        } catch (I) {}
                                    }
                                B.Bf = !0;
                                delete ex[b];
                                v = !0
                            }
                        }
                        v && Zv(g, c ? l :
                            void 0);
                        a[r ? "vtp_gtmOnFailure" : "vtp_gtmOnSuccess"]()
                    } else a.vtp_gtmOnFailure()
                }
            })
        }();
    Z.o.cie = ["google"],
        function() {
            (function(a) {
                Z.__cie = a;
                Z.__cie.s = "cie";
                Z.__cie.isVendorTemplate = !0;
                Z.__cie.priorityOverride = 0;
                Z.__cie.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_experimentState,
                    c = a.vtp_trafficCoverageHash;
                return "" !== b && "x" !== b[0] ? !0 : a.vtp_trafficCoverage > ("" == b ? c : Number(b.substring(1)))
            })
        }();
    Z.o.asprv = ["google"],
        function() {
            function a() {
                vr({
                    event: "optimize.domChange"
                });
                Uw(a)
            }(function(b) {
                Z.__asprv = b;
                Z.__asprv.s = "asprv";
                Z.__asprv.isVendorTemplate = !0;
                Z.__asprv.priorityOverride = 0;
                Z.__asprv.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_globalName,
                    d = !!b.vtp_listenForMutations,
                    e = ur("eventModel");
                c && Wv(c);
                d && a();
                var f, g, l;
                e && (f = e.name || "", g = e.callback, l = e.remove);
                if (g && oa(g))
                    if (f = String(f), !0 !== l) {
                        var m = f,
                            n = g;
                        Xv(m).push(n);
                        if ("" !== m) void 0 !== Vv[m] && Yv(n, m, Vv[m]);
                        else
                            for (var p in Vv) void 0 !==
                                Vv[p] && Yv(n, p, Vv[p])
                    } else {
                        var q = g,
                            t = Xv(f),
                            u = t.indexOf(q);
                        0 <= u && t.splice(u, 1)
                    }
                b.vtp_gtmOnSuccess()
            })
        }();
    Z.o.gaoo_c = ["google"],
        function() {
            (function(a) {
                Z.__gaoo_c = a;
                Z.__gaoo_c.s = "gaoo_c";
                Z.__gaoo_c.isVendorTemplate = !0;
                Z.__gaoo_c.priorityOverride = 0;
                Z.__gaoo_c.isInfrastructure = !1
            })(function(a) {
                var b = W("_gaUserPrefs");
                try {
                    if (b && b.ioo && b.ioo()) return !0
                } catch (d) {}
                if (F.getElementById("__gaOptOutExtension")) return !0;
                var c = W("external");
                return c && "oo" == c._gaUserPrefs ? !0 : !!W("ga-disable-" + a.vtp_trackingId)
            })
        }();


    Z.o.esc = ["customScripts"],
        function() {
            (function(a) {
                Z.__esc = a;
                Z.__esc.s = "esc";
                Z.__esc.isVendorTemplate = !0;
                Z.__esc.priorityOverride = 0;
                Z.__esc.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_selector,
                    c = !b,
                    d = a.vtp_script,
                    e = a.vtp_identifier,
                    f = a.vtp_affectsSelectors,
                    g = a.vtp_requiresContent;
                !1 !== g && (g = !0);
                var l = Lr(d);
                l.ff ? ad ? fx ? ix({
                        la: b,
                        af: c,
                        Fa: g,
                        ja: c || b === e ? 1 : null
                    }, function(m) {
                        if (m && l.ff) {
                            var n;
                            try {
                                var p = (0, l.ff)(m);
                                n = "function" == typeof p ? p : null
                            } catch (q) {
                                n = q
                            }
                            return n
                        }
                    }, !!f) ? a.vtp_gtmOnSuccess() : a.vtp_gtmOnFailure() :
                    a.vtp_gtmOnFailure() : a.vtp_gtmOnFailure() : a.vtp_gtmOnFailure()
            })
        }();



    Z.o.exs = ["google"],
        function() {
            (function(a) {
                Z.__exs = a;
                Z.__exs.s = "exs";
                Z.__exs.isVendorTemplate = !0;
                Z.__exs.priorityOverride = 0;
                Z.__exs.isInfrastructure = !1
            })(function(a) {
                var b = Mw(a.vtp_cookieDomain, a.vtp_cookiePath).pj(a.vtp_measurementId);
                if ("" === b) return b;
                if ("x" === b[0]) {
                    var c = Number(b.substring(1));
                    if ("x" === b || isNaN(c) || 0 > c || 1E3 <= c) return ""
                } else {
                    var d = a.vtp_sections;
                    if (d) {
                        var e = b.split("-");
                        if (d.length != e.length) return "";
                        for (var f = 0; f < d.length; f++)
                            if (0 > e[f] || e[f] >= d[f]) return ""
                    }
                }
                return b
            })
        }();




    Z.o.exsu = ["google"],
        function() {
            (function(a) {
                Z.__exsu = a;
                Z.__exsu.s = "exsu";
                Z.__exsu.isVendorTemplate = !0;
                Z.__exsu.priorityOverride = 0;
                Z.__exsu.isInfrastructure = !1
            })(function(a) {
                Mw(a.vtp_cookieDomain, a.vtp_cookiePath).gk(a.vtp_measurementId, a.vtp_newState, a.vtp_expirationDay, a.vtp_max, a.vtp_expirationDates) ? a.vtp_gtmOnSuccess() : a.vtp_gtmOnFailure()
            })
        }();
    Z.o.ctto = ["google"],
        function() {
            (function(a) {
                Z.__ctto = a;
                Z.__ctto.s = "ctto";
                Z.__ctto.isVendorTemplate = !0;
                Z.__ctto.priorityOverride = 0;
                Z.__ctto.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_isDynamic,
                    c = W("dataLayer"),
                    d = c && c.hide;
                if (!d) return !1;
                var e = Qg.M,
                    f = W("document");
                if (void 0 === f.querySelector) return !1;
                var g = !!f.querySelector("body");
                if (null !== d.end || !g) return !1;
                if (!b) return !0 === d[e];
                for (var l in d)
                    if (d.hasOwnProperty(l) && l.startsWith(e) && !0 === d[l]) return !0;
                return !1
            })
        }();


    Z.o.cevi = ["google"],
        function() {
            (function(a) {
                Z.__cevi = a;
                Z.__cevi.s = "cevi";
                Z.__cevi.isVendorTemplate = !0;
                Z.__cevi.priorityOverride = 0;
                Z.__cevi.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_experimentState,
                    c = a.vtp_serverVariationIndex;
                return "" === b || "x" === b[0] ? c : Number(b.split("-")[a.vtp_sectionIndex])
            })
        }();


    Z.o.noop = ["google"],
        function() {
            (function(a) {
                Z.__noop = a;
                Z.__noop.s = "noop";
                Z.__noop.isVendorTemplate = !0;
                Z.__noop.priorityOverride = 0;
                Z.__noop.isInfrastructure = !1
            })(function(a) {
                a.vtp_gtmOnSuccess()
            })
        }();






    Z.o.eximp = ["google"],
        function() {
            var a = !1;
            (function(b) {
                Z.__eximp = b;
                Z.__eximp.s = "eximp";
                Z.__eximp.isVendorTemplate = !0;
                Z.__eximp.priorityOverride = 0;
                Z.__eximp.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_trackingId,
                    d = b.vtp_measurementId,
                    e = b.vtp_variantId;
                if (a) {
                    ww(c, d, e);
                    var f = W("gaData", {}, !1);
                    f.expId = d;
                    f.expVar = e;
                    uw(c, {
                        hitType: "data"
                    }, !1)
                } else zw(c, d, e, b.vtp_gtmEventId,
                    ao(b.vtp_gtmEntityIndex, b.vtp_gtmEntityName));
                b.vtp_gtmOnSuccess()
            })
        }();
    var kx = {};
    kx.dataLayer = we;
    kx.callback = function(a) {
        me.hasOwnProperty(a) && oa(me[a]) && me[a]();
        delete me[a]
    };
    kx.bootstrap = 0;
    kx._spx = !1;

    function lx() {
        Vd[Qg.M] = Vd[Qg.M] || kx;
        Qg.Hb && (Vd["ctid_" + Qg.Hb] = kx);
        Wg();
        Yg() || k(Zg(), function(a, b) {
            Gn(a, b.transportUrl, b.context);
            P(92)
        });
        Ga(ne, Z.o);
        tc = Bc
    }
    (function(a) {
        function b() {
            m = F.documentElement.getAttribute("data-tag-assistant-present");
            Nq(m) && (l = g.xi)
        }
        if (!E["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (F.referrer) {
                var d = Ve(F.referrer);
                c = "cct.google" === Se(d, "host")
            }
            if (!c) {
                var e = pg("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (E["__TAGGY_INSTALLED"] = !0, ub("https://cct.google/taggy/agent.js"))
        }
        if (he) a();
        else {
            var f = function(r) {
                    var v = "GTM",
                        w = "GTM";
                    be ? (v = "OGT", w = "GTAG") : he && (w = v = "OPT");
                    var y = E["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        E["google.tagmanager.debugui2.queue"] = y, ub("https://" + Ud.ud + "/debug/bootstrap?id=" + Qg.M + "&src=" + w + "&cond=" + r + "&gtm=" + bh()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: ob,
                            containerProduct: v,
                            debug: !1,
                            id: Qg.M,
                            isGte: ae
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    Ud.Ph && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    uk: 1,
                    yi: 2,
                    Ki: 3,
                    Rh: 4,
                    xi: 5
                },
                l = void 0,
                m = void 0,
                n = Te(E.location, "query", !1, void 0, "gtm_debug");
            Nq(n) && (l = g.yi);
            if (!l && F.referrer) {
                var p = Ve(F.referrer);
                "tagassistant.google.com" === Se(p, "host") && (l = g.Ki)
            }
            if (!l) {
                var q =
                    pg("__TAG_ASSISTANT");
                q.length && q[0].length && (l = g.Rh)
            }
            l || b();
            if (!l && N(54) && Oq(m)) {
                var t = function() {
                        if (u) return !0;
                        u = !0;
                        b();
                        l && ob ? f(l) : a()
                    },
                    u = !1;
                yb(F, "TADebugSignal", function() {
                    t()
                }, !1);
                E.setTimeout(function() {
                    t()
                }, 200)
            } else l && ob ? f(l) : a()
        }
    })(function() {
        var a = !1;
        a && lo("INIT");
        Gf().m();
        Lh();
        zi.enable_gbraid_cookie_write = !0;
        if (Qg.Hb ? Vd["ctid_" + Qg.Hb] : Vd[Qg.M]) {
            var b = Vd.zones;
            b && b.unregisterChild(Sg());
        } else {
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) jc.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) mc.push(f[g]);
            for (var l = c.predicates || [], m = 0; m <
                l.length; m++) lc.push(l[m]);
            for (var n = c.rules || [], p = 0; p < n.length; p++) {
                for (var q = n[p], t = {}, u = 0; u < q.length; u++) t[q[u][0]] = Array.prototype.slice.call(q[u], 1);
                kc.push(t)
            }
            oc = Z;
            pc = es;
            lx();
            Mq();
            Vn = !1;
            Wn = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) Yn();
            else {
                yb(F, "DOMContentLoaded", Yn);
                yb(F, "readystatechange", Yn);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var r = !0;
                    try {
                        r = !E.frameElement
                    } catch (A) {}
                    r && Zn()
                }
                yb(E, "load", Yn)
            }
            bq = !1;
            "complete" === F.readyState ? dq() : yb(E,
                "load", dq);
            tl();
            Dq({
                event: "gtm.js"
            });
            N(46) && (P(111), Wa("HEALTH", 1));
            N(47) && (P(112), Wa("HEALTH", 2));
            le = z();
            kx.bootstrap = le;
            if (a) {
                var x = mo("INIT");
            }
        }
    });

})()