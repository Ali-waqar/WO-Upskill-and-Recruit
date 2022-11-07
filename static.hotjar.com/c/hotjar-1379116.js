window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 1379116,
    "r": 1.0,
    "rec_value": 0.32914016300000004,
    "state_change_listen_mode": "automatic",
    "record": true,
    "continuous_capture_enabled": true,
    "recording_capture_keystrokes": false,
    "anonymize_digits": false,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [{
        "id": 27335265,
        "targeting": [{
            "component": "url",
            "match_operation": "simple",
            "pattern": "https://www.offerzen.com/resources/software-developer-netherlands-report",
            "negate": false
        }, {
            "component": "device",
            "match_operation": "exact",
            "pattern": "desktop",
            "negate": false
        }]
    }, {
        "id": 27335264,
        "targeting": [{
            "component": "url",
            "match_operation": "simple",
            "pattern": "https://www.offerzen.com/resources/software-developer-netherlands-report",
            "negate": false
        }, {
            "component": "device",
            "match_operation": "exact",
            "pattern": "tablet",
            "negate": false
        }]
    }, {
        "id": 27335263,
        "targeting": [{
            "component": "url",
            "match_operation": "simple",
            "pattern": "https://www.offerzen.com/resources/software-developer-netherlands-report",
            "negate": false
        }, {
            "component": "device",
            "match_operation": "exact",
            "pattern": "phone",
            "negate": false
        }]
    }],
    "record_targeting_rules": [],
    "feedback_widgets": [],
    "heatmaps": [{
        "id": 8657417,
        "created_epoch_time": 1638785552,
        "targeting": [{
            "component": "url",
            "match_operation": "simple",
            "pattern": "https://www.offerzen.com/resources/software-developer-netherlands-report",
            "negate": false
        }],
        "selector_version": 2,
        "capture_type": "SNAPSHOT_2000"
    }, {
        "id": 8541581,
        "created_epoch_time": 1635931140,
        "targeting": [{
            "component": "url",
            "match_operation": "simple",
            "pattern": "https://www.offerzen.com/nl/developer-jobs-in-netherlands",
            "negate": false
        }],
        "selector_version": 2,
        "capture_type": "SNAPSHOT_2000"
    }],
    "polls": [{
        "id": 814359,
        "created_epoch_time": 1654087492,
        "skin": "dark",
        "background": "#202641",
        "effective_show_branding": true,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "c1fcd3bf-2411-4e3a-933b-e8b2d5cf99dd",
                "type": "single-close-ended",
                "text": "Did you find the info you were looking for on this page?",
                "required": true,
                "randomize_answer_order": false,
                "pin_last_to_bottom": false,
                "answers": [{
                    "text": "Yes 🤩",
                    "comments": false
                }, {
                    "text": "No 🥲",
                    "comments": false
                }],
                "next": "byOrder"
            }, {
                "uuid": "954d9c96-7c5e-43f8-a446-0eb33fee60d9",
                "type": "single-open-ended-multiple-line",
                "text": "What were you looking for?",
                "required": false,
                "nextIfSkipped": "byOrder",
                "next": "byOrder"
            }, {
                "uuid": "c0853b14-920c-4ccc-9bbb-02587fb124bf",
                "type": "single-close-ended",
                "text": "Would you be willing to give us more feedback by chatting to someone from our team? (we give swag as payment 😍)",
                "required": false,
                "nextIfSkipped": "thankYou",
                "randomize_answer_order": false,
                "pin_last_to_bottom": false,
                "answers": [{
                    "text": "Yes",
                    "comments": false
                }, {
                    "text": "No, thanks!",
                    "comments": false
                }],
                "nextByAnswer": ["question:f23f0fa1-1a58-4199-9373-be0d6f3b2d40", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "f23f0fa1-1a58-4199-9373-be0d6f3b2d40",
                "type": "email",
                "text": "What's your email address (so we can reach out):",
                "required": true,
                "next": "thankYou"
            }],
            "thankyou": "Thanks for your feedback, it will help us make this page better ❤️"
        },
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "delay",
        "display_delay": 150,
        "persist_condition": "response",
        "targeting_percentage": 100,
        "targeting": [{
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "desktop",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "offerzen.com/employers/find-developers",
            "rule_type": null
        }],
        "show_legal": false,
        "uuid": "61b4a294-1259-4d4b-8a0c-b3454a889931",
        "logo_url": null,
        "invite": {
            "title": "Your feedback is important to us!",
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "button": "Yes, I will give feedback",
            "close": "No thanks"
        },
        "invite_enabled": false,
        "button_color": "#5ea5ee",
        "display_type": "popover"
    }],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "google_optimize": {
            "tag_recordings": false
        }
    },
    "features": ["client_script.safe_date", "feedback.widgetV2", "feedback.widget_telemetry", "heatmap.continuous.manual_retaker", "settings.billing_v2"]
};

! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 257)
}({
    257: function(e, t) {
        window.hjBootstrap = window.hjBootstrap || function(e, t, n) {
            var o = ["bot", "google", "headless", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
                a = new RegExp(o, "i"),
                i = window.navigator || {
                    userAgent: "unknown"
                },
                r = i.userAgent ? i.userAgent : "unknown";
            if (a.test(r)) console.warn("Hotjar not launching due to suspicious userAgent:", r);
            else {
                var s = "http:" === window.location.protocol,
                    d = Boolean(window._hjSettings.preview);
                if (!s || d) {
                    var l = function(e, t, n) {
                        window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(n), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
                    };
                    l(0, 0, n);
                    var p, _, c, u, h = window.document,
                        j = h.head || h.getElementsByTagName("head")[0];
                    h.addEventListener && (hj.scriptDomain = e, (p = h.createElement("script")).async = 1, p.src = hj.scriptDomain + t, p.charset = "utf-8", j.appendChild(p), u = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"], (_ = h.createElement("style")).type = "text/css", _.styleSheet ? _.styleSheet.cssText = u.join("") : _.appendChild(h.createTextNode(u.join(""))), j.appendChild(_), (c = h.createElement("iframe")).style.cssText = u[1], c.name = "_hjRemoteVarsFrame", c.title = "_hjRemoteVarsFrame", c.id = "_hjRemoteVarsFrame", c.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-c6ca1c87e308a39aabb76b56ba54398b.html", c.onload = function() {
                        l.varsLoaded = !0, "undefined" != typeof hj && hj.event && hj.event.signal && hj.event.signal("varsLoaded")
                    }, l.varsJar = c, "interactive" === h.readyState || "complete" === h.readyState || "loaded" === h.readyState ? f() : h.addEventListener("DOMContentLoaded", f), l.revision = "f67558738084", window.hjBootstrap = l)
                } else console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047")
            }

            function f() {
                setTimeout((function() {
                    h.body.appendChild(c)
                }), 50)
            }
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.f1e65ef904544a33c6d0.js", "1379116"), window.hjLazyModules = window.hjLazyModules || {
            SURVEY_V2: {
                js: "survey-v2.6f49d40acfe5461fca6b.js"
            },
            SURVEY_BOOTSTRAPPER: {
                js: "survey-bootstrapper.95be9c04eb45c181b1fc.js"
            },
            SURVEY_ISOLATED: {
                js: "survey-isolated.2087fcf2240e22efe182.js"
            },
            HEATMAP_SCREENSHOTTER: {
                js: "heatmap-screenshotter.81113b1a3a6c7715a41a.js"
            },
            HEATMAP_VIEWER: {
                js: "heatmap-viewer.3262d61a4926060c66a3.js"
            },
            HEATMAP_DYNAMIC_VIEW: {
                js: "heatmap-dynamic-view.abc6add9fe82de4bc928.js"
            },
            HEATMAP_RETAKER: {
                js: "heatmap-retaker.557418a7370d6005b04c.js"
            },
            SURVEY_INVITATION: {
                js: "survey-invitation.d3955e51ac2d0afa7e05.js"
            },
            NOTIFICATION: {
                js: "notification.83fa8044df91cc54e7cb.js"
            },
            INCOMING_FEEDBACK: {
                js: "incoming-feedback.8a72c4da360c427940ad.js"
            },
            PREACT_INCOMING_FEEDBACK: {
                js: "preact-incoming-feedback.7662d6fc45aef63728ff.js"
            },
            SENTRY: {
                js: "sentry.80ac424b277bfaaf0403.js"
            }
        }
    }
});