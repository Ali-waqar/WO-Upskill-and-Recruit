(function() {
    (function() {
        var w = /%20/g,
            b = {
                "[object Boolean]": "boolean",
                "[object Number]": "number",
                "[object String]": "string",
                "[object Function]": "function",
                "[object Array]": "array",
                "[object Date]": "date",
                "[object RegExp]": "regexp",
                "[object Object]": "object"
            };

        function P(e, t) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function v() {
            var e = {};
            if (location.search !== "")
                for (var t = location.search.replace("?", "").split("&"), n = 0; n < t.length; n++) {
                    var i = t[n].split("="),
                        o = i[0],
                        r = i[1];
                    !r || (o = decodeURIComponent(o).replace(/[^a-zA-Z0-9-_]/gi, ""), r = decodeURIComponent(r), o in e ? (Array.isArray(e[o]) || (e[o] = [e[o]]), e[o].push(r)) : e[o] = r)
                }
            return e
        }

        function a(e) {
            return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), c_start != -1) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), c_end == -1 && (c_end = document.cookie.length), decodeURIComponent(document.cookie.substring(c_start, c_end))) : ""
        }

        function u(e, t, n) {
            var i = document.location.host.toLowerCase().split(":")[0],
                o = i.split("."),
                r = [];
            if (o.length == 1) {
                var c = new Date;
                c.setDate(c.getDate() + n), document.cookie = e + "=" + escape(t) + (n == null ? "" : ";expires=" + c.toUTCString()) + ";path=/"
            } else
                for (var p = o.length - 1; p >= 0; p--) {
                    r.push(o[p]);
                    var D = "." + r.slice().reverse().join("."),
                        c = new Date;
                    if (c.setDate(c.getDate() + n), document.cookie = e + "=" + escape(t) + (n == null ? "" : ";expires=" + c.toUTCString()) + ";domain=" + D + ";path=/", a(e) == t) break
                }
        }

        function h(e) {
            u(e, "", -1)
        }

        function A(e) {
            return s(e) === "function"
        }

        function s(e) {
            return e == null ? String(e) : b[Object.prototype.toString.call(e)] || "object"
        }

        function f(e) {
            typeof console != "undefined" && console.warn("_cio: " + e)
        }

        function N(e, t) {
            var n = [],
                i = function(r, c) {
                    c = A(c) ? c() : c, n[n.length] = encodeURIComponent(r) + "=" + encodeURIComponent(c)
                };
            for (var o in e) e.hasOwnProperty(o) && d(o, e[o], i, t);
            return n.join("&").replace(w, "+")
        }

        function d(e, t, n, i) {
            if (i != null && i.useArrayParams && s(t) === "array")
                for (var o = 0; o < t.length; o++) d(e + "[]", t[o] == null ? "" : t[o], n, i);
            else if (t != null && typeof t == "object")
                for (var r in t) t.hasOwnProperty(r) && d(e + "[" + r + "]", t[r] == null ? "" : t[r], n, i);
            else n(e, t)
        }

        function C() {
            var e = function() {
                return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
            };
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }

        function I() {
            var e = C();
            return u(_cio.cookieNamespace + "anonid", e, 365), e
        }

        function U(e) {
            try {
                return JSON.parse(decodeURIComponent(e))
            } catch (t) {
                return e
            }
        }

        function y() {
            var e = a("ajs_anonymous_id");
            return e && e !== "" ? U(e) : a(_cio.cookieNamespace + "anonid")
        }

        function _() {
            return a(_cio.cookieNamespace + "id")
        }

        function E(e, t, n) {
            var i = document.getElementById("cio-tracker");
            if (i) {
                t.site_id = i.getAttribute("data-site-id"), t.timestamp = new Date().getTime();
                var o = {
                    useArrayParams: !1
                };
                return i.getAttribute("data-use-array-params") === "true" && (o.useArrayParams = !0), s(n) === "object" && s(n.useArrayParams) === "boolean" && (o.useArrayParams = n.useArrayParams), _cio._trackUrl + "/events/" + e + ".gif?" + N(t, o)
            }
        }

        function R() {
            if (!a(_cio.cookieNamespace)) {
                if (u(_cio.cookieNamespace, "test", 1), !a(_cio.cookieNamespace)) return !1;
                u(_cio.cookieNamespace, "", -1)
            }
            return !0
        }

        function S(e, t, n) {
            t.c = _(), t.c ? t.s = y() : (t.s = y(), !t.s && R() && e !== "identify" && (t.s = I()));
            var i = new Image;
            i.src = E(e, t, n), _cio.images.push(i)
        }

        function l(e, t, n) {
            _cio.pageHasLoaded ? S(e, t, n) : setTimeout(function() {
                l(e, t, n)
            }, 50)
        }

        function g(e, t) {
            if (_cio._pluginsLoaded()) switch (e) {
                case "page":
                    for (var n = 0; n < _cio._plugins.length; n++) _cio._plugins[n].page(t.url);
                    break;
                case "identify":
                    for (var n = 0; n < _cio._plugins.length; n++) _cio._plugins[n].identify(t.id);
                    break;
                default:
                    return
            } else setTimeout(function() {
                g(e, t)
            }, 50)
        }

        function L(e) {
            var t = document.createElement("script"),
                n = document.getElementsByTagName("script")[0];
            t.async = !0, t.src = e.path, t.onerror = function() {
                var i = document.getElementById("cio-tracker");
                i.removeAttribute("data-use-" + e.name), f("failed to load " + e.name + " plugin.")
            }, n.parentNode.insertBefore(t, n)
        }
        if (s(_cio) == "array") {
            var k = _cio.slice(0);
            _cio = {
                    _version: "1e061f4d",
                    _trackUrl: "https://track.customer.io",
                    _availablePlugins: [{
                        name: "in-app",
                        path: "https://assets.customer.io/assets/in-app.js"
                    }],
                    _plugins: [],
                    _findCustomer: _,
                    _warn: f,
                    images: [],
                    pageHasLoaded: !1,
                    cookieNamespace: "_cio",
                    load: function() {
                        _cio.pageHasLoaded = !0;
                        for (var e = document.getElementById("cio-tracker"), t = 0; t < _cio._availablePlugins.length; t++) e.getAttribute("data-use-" + _cio._availablePlugins[t].name) === "true" && L(_cio._availablePlugins[t])
                    },
                    _pluginsLoaded: function() {
                        for (var e = document.getElementById("cio-tracker"), t = 0, n = 0; n < _cio._availablePlugins.length; n++) e.getAttribute("data-use-" + _cio._availablePlugins[n].name) === "true" && t++;
                        for (var n = 0; n < _cio._plugins.length; n++)
                            if (!_cio._plugins[n].initialized()) return !1;
                        return _cio._plugins.length == t
                    },
                    notifyPluginLoaded: function(e) {
                        _cio._plugins.push(new e(_cio))
                    },
                    push: function(e) {
                        var t = e.shift();
                        _cio[t].apply(this, e)
                    },
                    identify: function(e, t) {
                        var n = e.id || e.id_secure;
                        if (typeof n == "undefined" || n === null || n.length === 0) {
                            f("id can't be empty. This identify call will not be tracked.");
                            return
                        }
                        u(_cio.cookieNamespace + "id", n, 365), l("identify", {
                            user: e
                        }, t || {}), g("identify", {
                            id: n
                        })
                    },
                    sidentify: function(e) {
                        e._secure = !0, _cio.identify(e)
                    },
                    track: function(e, t, n) {
                        l("event", {
                            name: e,
                            data: t || {}
                        }, n || {})
                    },
                    page: function(e, t, n) {
                        var i = P(t || {}, v());
                        e = e || document.location.href, i.width = i.width || window.innerWidth, i.height = i.height || window.innerHeight, i.referrer == null && document.referrer && document.referrer != "" && (i.referrer = document.referrer), l("page", {
                            name: e,
                            data: i
                        }, n || {}), g("page", {
                            url: e
                        })
                    },
                    cookie: function(e) {
                        _cio.cookieNamespace = e
                    },
                    reset: function() {
                        _cio.images = [], h(_cio.cookieNamespace + "id"), h(_cio.cookieNamespace + "anonid");
                        for (var e = 0; e < _cio._plugins.length; e++) _cio._plugins[e].initialized() && _cio._plugins[e].reset()
                    }
                },
                function() {
                    var e = _();
                    if (!e) {
                        var t = v();
                        if ("_cio_id" in t && t._cio_id) {
                            var n = t._cio_id;
                            Array.isArray(n) && (n = n[n.length - 1]), n && _cio.identify({
                                id: "cio_" + n
                            })
                        }
                    }
                    _cio.page(document.location.href)
                }();
            for (var m = 0; m < k.length; m++) _cio.push(k[m]);
            document.readyState === "complete" ? _cio.load() : window.addEventListener ? window.addEventListener("load", _cio.load, !1) : window.attachEvent ? window.attachEvent("onload", _cio.load) : _cio.load()
        }
    })();
})();