// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

// @ts-nocheck
/* eslint-disable */

let System, __inst, __inst_s;

(() => {
  const mMap = new Map();
  System = {
    register(id, d, f) {
      mMap.set(id, { id, d, f, exp: {} });
    }
  };

  const gC = (data, main) => {
    const { id } = data;
    return {
      id,
      import: async id => mMap.get(id)?.exp,
      meta: { url: id, main }
    };
  };

  const gE = ({ exp }) => {
    return (id, v) => {
      const vs = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(vs)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true
        });
      }
    };
  };

  const iQ = [];

  const enq = ids => {
    for (const id of ids) {
      if (!iQ.includes(id)) {
        const { d } = mMap.get(id);
        iQ.push(id);
        enq(d);
      }
    }
  };

  const gRQ = main => {
    const rQ = [];
    let id;
    while ((id = iQ.pop())) {
      const m = mMap.get(id),
        { f } = m;
      if (!f) return;
      rQ.push([m.d, f(gE(m), gC(m, id === main))]);
      delete m.f;
    }
    return rQ;
  };

  const dr = async main => {
    const rQ = gRQ(main);
    let r;
    while ((r = rQ.shift())) {
      const [d, { execute, setters }] = r;
      for (let i = 0; i < d.length; i++) setters[i](mMap.get(d[i])?.exp);
      const e = execute();
      if (e) await e;
    }
  };

  const dr_s = main => {
    const rQ = gRQ(main);
    let r;
    while ((r = rQ.shift())) {
      const [d, { execute, setters }] = r;
      for (let i = 0; i < d.length; i++) setters[i](mMap.get(d[i])?.exp);
      execute();
    }
  };

  __inst = async id => {
    System = __inst = __inst_s = undefined;
    enq([id]);
    await dr(id);
    return mMap.get(id)?.exp;
  };

  __inst_s = id => {
    System = __inst = __inst_s = undefined;
    enq([id]);
    dr_s(id);
    return mMap.get(id)?.exp;
  };
})();

System.register("example", ["https://unpkg.com/lodash-es@4.17.15/capitalize.js"], function (exports_1, context_1) {
    "use strict";
    var capitalize_js_1;
    var __moduleName = context_1 && context_1.id;
    function main() {
        console.log(capitalize_js_1.default("hello from the web browser"));
    }
    exports_1("main", main);
    return {
        setters: [
            function (capitalize_js_1_1) {
                capitalize_js_1 = capitalize_js_1_1;
            }
        ],
        execute: function () {
            window.onload = () => {
                console.info(capitalize_js_1.default("module loaded!"));
            };
        }
    };
});

const __exp = __inst_s("example");
export const main = __exp["main"];
