!(function(e) {
    var t = {}
    function r(n) {
        if (t[n]) return t[n].exports
        var o = (t[n] = { i: n, l: !1, exports: {} })
        return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
    }
    ;(r.m = e),
        (r.c = t),
        (r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
        }),
        (r.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (r.t = function(e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var n = Object.create(null)
            if (
                (r.r(n),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && 'string' != typeof e)
            )
                for (var o in e)
                    r.d(
                        n,
                        o,
                        function(t) {
                            return e[t]
                        }.bind(null, o)
                    )
            return n
        }),
        (r.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default
                      }
                    : function() {
                          return e
                      }
            return r.d(t, 'a', t), t
        }),
        (r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (r.p = ''),
        r((r.s = 5))
})([
    function(e, t, r) {
        'use strict'
        var n = Object.prototype.hasOwnProperty,
            o = Array.isArray,
            i = (function() {
                for (var e = [], t = 0; t < 256; ++t)
                    e.push(
                        '%' +
                            ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase()
                    )
                return e
            })(),
            a = function(e, t) {
                for (
                    var r = t && t.plainObjects ? Object.create(null) : {},
                        n = 0;
                    n < e.length;
                    ++n
                )
                    void 0 !== e[n] && (r[n] = e[n])
                return r
            }
        e.exports = {
            arrayToObject: a,
            assign: function(e, t) {
                return Object.keys(t).reduce(function(e, r) {
                    return (e[r] = t[r]), e
                }, e)
            },
            combine: function(e, t) {
                return [].concat(e, t)
            },
            compact: function(e) {
                for (
                    var t = [{ obj: { o: e }, prop: 'o' }], r = [], n = 0;
                    n < t.length;
                    ++n
                )
                    for (
                        var i = t[n],
                            a = i.obj[i.prop],
                            s = Object.keys(a),
                            c = 0;
                        c < s.length;
                        ++c
                    ) {
                        var l = s[c],
                            u = a[l]
                        'object' == typeof u &&
                            null !== u &&
                            -1 === r.indexOf(u) &&
                            (t.push({ obj: a, prop: l }), r.push(u))
                    }
                return (
                    (function(e) {
                        for (; e.length > 1; ) {
                            var t = e.pop(),
                                r = t.obj[t.prop]
                            if (o(r)) {
                                for (var n = [], i = 0; i < r.length; ++i)
                                    void 0 !== r[i] && n.push(r[i])
                                t.obj[t.prop] = n
                            }
                        }
                    })(t),
                    e
                )
            },
            decode: function(e, t, r) {
                var n = e.replace(/\+/g, ' ')
                if ('iso-8859-1' === r)
                    return n.replace(/%[0-9a-f]{2}/gi, unescape)
                try {
                    return decodeURIComponent(n)
                } catch (e) {
                    return n
                }
            },
            encode: function(e, t, r) {
                if (0 === e.length) return e
                var n = 'string' == typeof e ? e : String(e)
                if ('iso-8859-1' === r)
                    return escape(n).replace(/%u[0-9a-f]{4}/gi, function(e) {
                        return '%26%23' + parseInt(e.slice(2), 16) + '%3B'
                    })
                for (var o = '', a = 0; a < n.length; ++a) {
                    var s = n.charCodeAt(a)
                    45 === s ||
                    46 === s ||
                    95 === s ||
                    126 === s ||
                    (s >= 48 && s <= 57) ||
                    (s >= 65 && s <= 90) ||
                    (s >= 97 && s <= 122)
                        ? (o += n.charAt(a))
                        : s < 128
                        ? (o += i[s])
                        : s < 2048
                        ? (o += i[192 | (s >> 6)] + i[128 | (63 & s)])
                        : s < 55296 || s >= 57344
                        ? (o +=
                              i[224 | (s >> 12)] +
                              i[128 | ((s >> 6) & 63)] +
                              i[128 | (63 & s)])
                        : ((a += 1),
                          (s =
                              65536 +
                              (((1023 & s) << 10) | (1023 & n.charCodeAt(a)))),
                          (o +=
                              i[240 | (s >> 18)] +
                              i[128 | ((s >> 12) & 63)] +
                              i[128 | ((s >> 6) & 63)] +
                              i[128 | (63 & s)]))
                }
                return o
            },
            isBuffer: function(e) {
                return !(
                    !e ||
                    'object' != typeof e ||
                    !(
                        e.constructor &&
                        e.constructor.isBuffer &&
                        e.constructor.isBuffer(e)
                    )
                )
            },
            isRegExp: function(e) {
                return '[object RegExp]' === Object.prototype.toString.call(e)
            },
            merge: function e(t, r, i) {
                if (!r) return t
                if ('object' != typeof r) {
                    if (o(t)) t.push(r)
                    else {
                        if (!t || 'object' != typeof t) return [t, r]
                        ;((i && (i.plainObjects || i.allowPrototypes)) ||
                            !n.call(Object.prototype, r)) &&
                            (t[r] = !0)
                    }
                    return t
                }
                if (!t || 'object' != typeof t) return [t].concat(r)
                var s = t
                return (
                    o(t) && !o(r) && (s = a(t, i)),
                    o(t) && o(r)
                        ? (r.forEach(function(r, o) {
                              if (n.call(t, o)) {
                                  var a = t[o]
                                  a &&
                                  'object' == typeof a &&
                                  r &&
                                  'object' == typeof r
                                      ? (t[o] = e(a, r, i))
                                      : t.push(r)
                              } else t[o] = r
                          }),
                          t)
                        : Object.keys(r).reduce(function(t, o) {
                              var a = r[o]
                              return (
                                  n.call(t, o)
                                      ? (t[o] = e(t[o], a, i))
                                      : (t[o] = a),
                                  t
                              )
                          }, s)
                )
            },
        }
    },
    function(e, t, r) {
        'use strict'
        var n = String.prototype.replace,
            o = /%20/g
        e.exports = {
            default: 'RFC3986',
            formatters: {
                RFC1738: function(e) {
                    return n.call(e, o, '+')
                },
                RFC3986: function(e) {
                    return e
                },
            },
            RFC1738: 'RFC1738',
            RFC3986: 'RFC3986',
        }
    },
    function(e, t, r) {
        'use strict'
        var n = r(3),
            o = r(4),
            i = r(1)
        e.exports = { formats: i, parse: o, stringify: n }
    },
    function(e, t, r) {
        'use strict'
        var n = r(0),
            o = r(1),
            i = Object.prototype.hasOwnProperty,
            a = {
                brackets: function(e) {
                    return e + '[]'
                },
                comma: 'comma',
                indices: function(e, t) {
                    return e + '[' + t + ']'
                },
                repeat: function(e) {
                    return e
                },
            },
            s = Array.isArray,
            c = Array.prototype.push,
            l = function(e, t) {
                c.apply(e, s(t) ? t : [t])
            },
            u = Date.prototype.toISOString,
            f = {
                addQueryPrefix: !1,
                allowDots: !1,
                charset: 'utf-8',
                charsetSentinel: !1,
                delimiter: '&',
                encode: !0,
                encoder: n.encode,
                encodeValuesOnly: !1,
                formatter: o.formatters[o.default],
                indices: !1,
                serializeDate: function(e) {
                    return u.call(e)
                },
                skipNulls: !1,
                strictNullHandling: !1,
            },
            p = function e(t, r, o, i, a, c, u, p, d, y, h, m, b) {
                var g = t
                if (
                    ('function' == typeof u
                        ? (g = u(r, g))
                        : g instanceof Date
                        ? (g = y(g))
                        : 'comma' === o && s(g) && (g = g.join(',')),
                    null === g)
                ) {
                    if (i) return c && !m ? c(r, f.encoder, b) : r
                    g = ''
                }
                if (
                    'string' == typeof g ||
                    'number' == typeof g ||
                    'boolean' == typeof g ||
                    n.isBuffer(g)
                )
                    return c
                        ? [
                              h(m ? r : c(r, f.encoder, b)) +
                                  '=' +
                                  h(c(g, f.encoder, b)),
                          ]
                        : [h(r) + '=' + h(String(g))]
                var v,
                    w = []
                if (void 0 === g) return w
                if (s(u)) v = u
                else {
                    var j = Object.keys(g)
                    v = p ? j.sort(p) : j
                }
                for (var O = 0; O < v.length; ++O) {
                    var x = v[O]
                    ;(a && null === g[x]) ||
                        (s(g)
                            ? l(
                                  w,
                                  e(
                                      g[x],
                                      'function' == typeof o ? o(r, x) : r,
                                      o,
                                      i,
                                      a,
                                      c,
                                      u,
                                      p,
                                      d,
                                      y,
                                      h,
                                      m,
                                      b
                                  )
                              )
                            : l(
                                  w,
                                  e(
                                      g[x],
                                      r + (d ? '.' + x : '[' + x + ']'),
                                      o,
                                      i,
                                      a,
                                      c,
                                      u,
                                      p,
                                      d,
                                      y,
                                      h,
                                      m,
                                      b
                                  )
                              ))
                }
                return w
            }
        e.exports = function(e, t) {
            var r,
                n = e,
                c = (function(e) {
                    if (!e) return f
                    if (
                        null !== e.encoder &&
                        void 0 !== e.encoder &&
                        'function' != typeof e.encoder
                    )
                        throw new TypeError('Encoder has to be a function.')
                    var t = e.charset || f.charset
                    if (
                        void 0 !== e.charset &&
                        'utf-8' !== e.charset &&
                        'iso-8859-1' !== e.charset
                    )
                        throw new TypeError(
                            'The charset option must be either utf-8, iso-8859-1, or undefined'
                        )
                    var r = o.default
                    if (void 0 !== e.format) {
                        if (!i.call(o.formatters, e.format))
                            throw new TypeError(
                                'Unknown format option provided.'
                            )
                        r = e.format
                    }
                    var n = o.formatters[r],
                        a = f.filter
                    return (
                        ('function' == typeof e.filter || s(e.filter)) &&
                            (a = e.filter),
                        {
                            addQueryPrefix:
                                'boolean' == typeof e.addQueryPrefix
                                    ? e.addQueryPrefix
                                    : f.addQueryPrefix,
                            allowDots:
                                void 0 === e.allowDots
                                    ? f.allowDots
                                    : !!e.allowDots,
                            charset: t,
                            charsetSentinel:
                                'boolean' == typeof e.charsetSentinel
                                    ? e.charsetSentinel
                                    : f.charsetSentinel,
                            delimiter:
                                void 0 === e.delimiter
                                    ? f.delimiter
                                    : e.delimiter,
                            encode:
                                'boolean' == typeof e.encode
                                    ? e.encode
                                    : f.encode,
                            encoder:
                                'function' == typeof e.encoder
                                    ? e.encoder
                                    : f.encoder,
                            encodeValuesOnly:
                                'boolean' == typeof e.encodeValuesOnly
                                    ? e.encodeValuesOnly
                                    : f.encodeValuesOnly,
                            filter: a,
                            formatter: n,
                            serializeDate:
                                'function' == typeof e.serializeDate
                                    ? e.serializeDate
                                    : f.serializeDate,
                            skipNulls:
                                'boolean' == typeof e.skipNulls
                                    ? e.skipNulls
                                    : f.skipNulls,
                            sort: 'function' == typeof e.sort ? e.sort : null,
                            strictNullHandling:
                                'boolean' == typeof e.strictNullHandling
                                    ? e.strictNullHandling
                                    : f.strictNullHandling,
                        }
                    )
                })(t)
            'function' == typeof c.filter
                ? (n = (0, c.filter)('', n))
                : s(c.filter) && (r = c.filter)
            var u,
                d = []
            if ('object' != typeof n || null === n) return ''
            u =
                t && t.arrayFormat in a
                    ? t.arrayFormat
                    : t && 'indices' in t
                    ? t.indices
                        ? 'indices'
                        : 'repeat'
                    : 'indices'
            var y = a[u]
            r || (r = Object.keys(n)), c.sort && r.sort(c.sort)
            for (var h = 0; h < r.length; ++h) {
                var m = r[h]
                ;(c.skipNulls && null === n[m]) ||
                    l(
                        d,
                        p(
                            n[m],
                            m,
                            y,
                            c.strictNullHandling,
                            c.skipNulls,
                            c.encode ? c.encoder : null,
                            c.filter,
                            c.sort,
                            c.allowDots,
                            c.serializeDate,
                            c.formatter,
                            c.encodeValuesOnly,
                            c.charset
                        )
                    )
            }
            var b = d.join(c.delimiter),
                g = !0 === c.addQueryPrefix ? '?' : ''
            return (
                c.charsetSentinel &&
                    ('iso-8859-1' === c.charset
                        ? (g += 'utf8=%26%2310003%3B&')
                        : (g += 'utf8=%E2%9C%93&')),
                b.length > 0 ? g + b : ''
            )
        }
    },
    function(e, t, r) {
        'use strict'
        var n = r(0),
            o = Object.prototype.hasOwnProperty,
            i = {
                allowDots: !1,
                allowPrototypes: !1,
                arrayLimit: 20,
                charset: 'utf-8',
                charsetSentinel: !1,
                comma: !1,
                decoder: n.decode,
                delimiter: '&',
                depth: 5,
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictNullHandling: !1,
            },
            a = function(e) {
                return e.replace(/&#(\d+);/g, function(e, t) {
                    return String.fromCharCode(parseInt(t, 10))
                })
            },
            s = function(e, t, r) {
                if (e) {
                    var n = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                        i = /(\[[^[\]]*])/g,
                        a = /(\[[^[\]]*])/.exec(n),
                        s = a ? n.slice(0, a.index) : n,
                        c = []
                    if (s) {
                        if (
                            !r.plainObjects &&
                            o.call(Object.prototype, s) &&
                            !r.allowPrototypes
                        )
                            return
                        c.push(s)
                    }
                    for (var l = 0; null !== (a = i.exec(n)) && l < r.depth; ) {
                        if (
                            ((l += 1),
                            !r.plainObjects &&
                                o.call(Object.prototype, a[1].slice(1, -1)) &&
                                !r.allowPrototypes)
                        )
                            return
                        c.push(a[1])
                    }
                    return (
                        a && c.push('[' + n.slice(a.index) + ']'),
                        (function(e, t, r) {
                            for (var n = t, o = e.length - 1; o >= 0; --o) {
                                var i,
                                    a = e[o]
                                if ('[]' === a && r.parseArrays)
                                    i = [].concat(n)
                                else {
                                    i = r.plainObjects
                                        ? Object.create(null)
                                        : {}
                                    var s =
                                            '[' === a.charAt(0) &&
                                            ']' === a.charAt(a.length - 1)
                                                ? a.slice(1, -1)
                                                : a,
                                        c = parseInt(s, 10)
                                    r.parseArrays || '' !== s
                                        ? !isNaN(c) &&
                                          a !== s &&
                                          String(c) === s &&
                                          c >= 0 &&
                                          r.parseArrays &&
                                          c <= r.arrayLimit
                                            ? ((i = [])[c] = n)
                                            : (i[s] = n)
                                        : (i = { 0: n })
                                }
                                n = i
                            }
                            return n
                        })(c, t, r)
                    )
                }
            }
        e.exports = function(e, t) {
            var r = (function(e) {
                if (!e) return i
                if (
                    null !== e.decoder &&
                    void 0 !== e.decoder &&
                    'function' != typeof e.decoder
                )
                    throw new TypeError('Decoder has to be a function.')
                if (
                    void 0 !== e.charset &&
                    'utf-8' !== e.charset &&
                    'iso-8859-1' !== e.charset
                )
                    throw new Error(
                        'The charset option must be either utf-8, iso-8859-1, or undefined'
                    )
                var t = void 0 === e.charset ? i.charset : e.charset
                return {
                    allowDots:
                        void 0 === e.allowDots ? i.allowDots : !!e.allowDots,
                    allowPrototypes:
                        'boolean' == typeof e.allowPrototypes
                            ? e.allowPrototypes
                            : i.allowPrototypes,
                    arrayLimit:
                        'number' == typeof e.arrayLimit
                            ? e.arrayLimit
                            : i.arrayLimit,
                    charset: t,
                    charsetSentinel:
                        'boolean' == typeof e.charsetSentinel
                            ? e.charsetSentinel
                            : i.charsetSentinel,
                    comma: 'boolean' == typeof e.comma ? e.comma : i.comma,
                    decoder:
                        'function' == typeof e.decoder ? e.decoder : i.decoder,
                    delimiter:
                        'string' == typeof e.delimiter ||
                        n.isRegExp(e.delimiter)
                            ? e.delimiter
                            : i.delimiter,
                    depth: 'number' == typeof e.depth ? e.depth : i.depth,
                    ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                    interpretNumericEntities:
                        'boolean' == typeof e.interpretNumericEntities
                            ? e.interpretNumericEntities
                            : i.interpretNumericEntities,
                    parameterLimit:
                        'number' == typeof e.parameterLimit
                            ? e.parameterLimit
                            : i.parameterLimit,
                    parseArrays: !1 !== e.parseArrays,
                    plainObjects:
                        'boolean' == typeof e.plainObjects
                            ? e.plainObjects
                            : i.plainObjects,
                    strictNullHandling:
                        'boolean' == typeof e.strictNullHandling
                            ? e.strictNullHandling
                            : i.strictNullHandling,
                }
            })(t)
            if ('' === e || null == e)
                return r.plainObjects ? Object.create(null) : {}
            for (
                var c =
                        'string' == typeof e
                            ? (function(e, t) {
                                  var r,
                                      s = {},
                                      c = t.ignoreQueryPrefix
                                          ? e.replace(/^\?/, '')
                                          : e,
                                      l =
                                          t.parameterLimit === 1 / 0
                                              ? void 0
                                              : t.parameterLimit,
                                      u = c.split(t.delimiter, l),
                                      f = -1,
                                      p = t.charset
                                  if (t.charsetSentinel)
                                      for (r = 0; r < u.length; ++r)
                                          0 === u[r].indexOf('utf8=') &&
                                              ('utf8=%E2%9C%93' === u[r]
                                                  ? (p = 'utf-8')
                                                  : 'utf8=%26%2310003%3B' ===
                                                        u[r] &&
                                                    (p = 'iso-8859-1'),
                                              (f = r),
                                              (r = u.length))
                                  for (r = 0; r < u.length; ++r)
                                      if (r !== f) {
                                          var d,
                                              y,
                                              h = u[r],
                                              m = h.indexOf(']='),
                                              b =
                                                  -1 === m
                                                      ? h.indexOf('=')
                                                      : m + 1
                                          ;-1 === b
                                              ? ((d = t.decoder(
                                                    h,
                                                    i.decoder,
                                                    p
                                                )),
                                                (y = t.strictNullHandling
                                                    ? null
                                                    : ''))
                                              : ((d = t.decoder(
                                                    h.slice(0, b),
                                                    i.decoder,
                                                    p
                                                )),
                                                (y = t.decoder(
                                                    h.slice(b + 1),
                                                    i.decoder,
                                                    p
                                                ))),
                                              y &&
                                                  t.interpretNumericEntities &&
                                                  'iso-8859-1' === p &&
                                                  (y = a(y)),
                                              y &&
                                                  t.comma &&
                                                  y.indexOf(',') > -1 &&
                                                  (y = y.split(',')),
                                              o.call(s, d)
                                                  ? (s[d] = n.combine(s[d], y))
                                                  : (s[d] = y)
                                      }
                                  return s
                              })(e, r)
                            : e,
                    l = r.plainObjects ? Object.create(null) : {},
                    u = Object.keys(c),
                    f = 0;
                f < u.length;
                ++f
            ) {
                var p = u[f],
                    d = s(p, c[p], r)
                l = n.merge(l, d, r)
            }
            return n.compact(l)
        }
    },
    function(e, t, r) {
        'use strict'
        r.r(t)
        const n = e => t => t.method.toLowerCase() === e.toLowerCase(),
            o = n('get'),
            i = n('post'),
            a = (n('put'), n('patch')),
            s = n('delete'),
            c = (n('patch'),
            n('options'),
            e => t => {
                const r = new URL(t.url),
                    n = r.pathname
                return (
                    console.log('path', n),
                    console.log('url', r),
                    console.log('regExp', e),
                    n.match(e) && n.match(e)[0] === n
                )
            })
        class l {
            constructor() {
                this.routes = []
            }
            handle(e, t) {
                return this.routes.push({ conditions: e, handler: t }), this
            }
            get(e, t) {
                return this.handle([o, c(e)], t)
            }
            post(e, t) {
                return this.handle([i, c(e)], t)
            }
            patch(e, t) {
                return this.handler([a, c(e)], t)
            }
            delete(e, t) {
                return this.handler([s, c(e)], t)
            }
            all(e) {
                return this.handler([], e)
            }
            route(e) {
                const t = this.resolve(e)
                return t
                    ? t.handler(e)
                    : new Response('resource not found', {
                          status: 402,
                          statusText: 'not found',
                          headers: { 'content-type': 'text/plain' },
                      })
            }
            resolve(e) {
                return this.routes.find(
                    t =>
                        !(
                            t.conditions &&
                            (!Array.isArray(t) || t.conditions.length)
                        ) ||
                        ('function' == typeof t.conditions
                            ? t.conditions(e)
                            : t.conditions.every(t => t(e)))
                )
            }
        }
        var u = r(2),
            f = r.n(u)
        const p = e => e.filter(e => e),
            d = (e, t, r) => {
                const n = `<${e.html_url}|${t}>`,
                    o = `<${e.user.html_url}|${e.user.login}>`,
                    i = new Date(Date.parse(e.created_at)).toLocaleDateString(),
                    a = [
                        r,
                        `*${e.title} - ${n}*`,
                        e.body,
                        `*${e.state}* - Created by ${o} on ${i}`,
                    ]
                return [
                    {
                        type: 'section',
                        text: { type: 'mrkdwn', text: p(a).join('\n') },
                        accessory: {
                            type: 'image',
                            image_url: e.user.avatar_url,
                            alt_text: e.user.login,
                        },
                    },
                ]
            }
        var y = async e => {
            try {
                const t = await e.text(),
                    r = f.a.parse(t).text.trim(),
                    { owner: n, repo: o, issue_number: i } = (e => {
                        const t = e.match(
                            '/(?<owner>w*)/(?<repo>w*)#(?<issue_number>d*)/'
                        )
                        return t ? t.groups : null
                    })(r),
                    a = await ((e, t, r) => {
                        return fetch(
                            `https://api.github.com/repos/${e}/${t}/issues/${r}`,
                            {
                                headers: {
                                    'User-Agent': 'simple-worker-slack-bot',
                                },
                            }
                        )
                    })(n, o, i),
                    s = await a.json(),
                    c = d(s, r)
                return new Response(
                    JSON.stringify({ blocks: c, response_type: 'in_channel' }),
                    { headers: { 'Content-type': 'application/json' } }
                )
            } catch (e) {
                return new Response(
                    "Uh-oh! We couldn't find the issue you provided. We can only find public issues in the following format: `owner/repo#issue_number`."
                )
            }
        }
        var h = async e => {
            const t = await e.text(),
                { action: r, issue: n, repository: o } = JSON.parse(t),
                i = `An issue was ${r}:`,
                a = `${o.owner.login}/${o.name}#${n.number}`,
                s = d(n, a, i)
            await fetch(
                'https://hooks.slack.com/services/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',
                {
                    body: JSON.stringify({ blocks: s }),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                }
            )
            return new Response('OK')
        }
        addEventListener('fetch', e => {
            console.log('event', e),
                e.respondWith(
                    (async function(e) {
                        const t = new l()
                        t.post('/lookup', y), t.post('/webhook', h)
                        let r = await t.route(e)
                        r || (r = new Response('Not found', { status: 404 }))
                        return new Response('Not found', { status: 404 })
                    })(e.request)
                )
        })
    },
])
//# sourceMappingURL=helloWorld.js.map
