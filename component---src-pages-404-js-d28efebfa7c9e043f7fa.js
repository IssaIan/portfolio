(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    148: function(n, t, e) {
      'use strict';
      e.r(t);
      const o = e(152);
      const i = e.n(o);
      const r = e(0);
      const c = e.n(r);
      const a = e(160);
      const u = e(212);
      const f = e(151);
      const l = e(153);
      function s() {
        const n = i()(['font-size: 30px;']);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        const n = i()(['font-size: 50px;']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function h() {
        const n = i()(['font-size: 120px;']);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        const n = i()(['font-size: 200px;']);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      const d = l.h.colors;
      const g = l.h.fonts;
      const b = Object(f.c)(l.d).withConfig({
        displayName: 'sc-404__MainContainer',
        componentId: 'sc-1rb8uih-0',
      })(['', ';flex-direction:column;height:100vh !important;'], l.g.flexCenter);
      const w = f.c.h1.withConfig({ displayName: 'sc-404__Title', componentId: 'sc-1rb8uih-1' })(
        ['color:', ';font-family:', ';font-size:12vw;line-height:1;', ' ', ';'],
        d.green,
        g.SFMono,
        l.f.bigDesktop(m()),
        l.f.phablet(h()),
      );
      const v = f.c.h2.withConfig({ displayName: 'sc-404__Subtitle', componentId: 'sc-1rb8uih-2' })(
        ['font-size:3vw;font-weight:400;', ';', ';'],
        l.f.bigDesktop(p()),
        l.f.phablet(s()),
      );
      const _ = Object(f.c)(a.a).withConfig({
        displayName: 'sc-404__HomeButton',
        componentId: 'sc-1rb8uih-3',
      })(['', ';margin-top:40px;'], l.g.bigButton);
      t.default = function() {
        return c.a.createElement(
          u.i,
          null,
          c.a.createElement(
            b,
            { id: 'content' },
            c.a.createElement(w, null, '404'),
            c.a.createElement(v, null, 'Page Not Found'),
            c.a.createElement(_, { to: '/' }, 'Go Home'),
          ),
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-d28efebfa7c9e043f7fa.js.map
