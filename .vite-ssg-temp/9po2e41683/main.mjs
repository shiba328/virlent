import { ViteSSG } from "vite-ssg";
import { resolveComponent, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import VueGtag from "vue-gtag";
import { createHead } from "@unhead/vue";
const layouts = {};
function setupLayouts(routes2) {
  function deepSetupLayout(routes3, top = true) {
    return routes3.map((route) => {
      var _a, _b, _c, _d, _e, _f;
      if (((_a = route.children) == null ? void 0 : _a.length) > 0) {
        route.children = deepSetupLayout(route.children, false);
      }
      if (top) {
        const skipLayout = !route.component && ((_b = route.children) == null ? void 0 : _b.find((r) => {
          var _a2;
          return (r.path === "" || r.path === "/") && ((_a2 = r.meta) == null ? void 0 : _a2.isLayout);
        }));
        if (skipLayout) {
          return route;
        }
        if (((_c = route.meta) == null ? void 0 : _c.layout) !== false) {
          return {
            path: route.path,
            component: layouts[((_d = route.meta) == null ? void 0 : _d.layout) || "default"],
            children: route.path === "/" ? [route] : [{ ...route, path: "" }],
            meta: {
              isLayout: true
            }
          };
        }
      }
      if ((_e = route.meta) == null ? void 0 : _e.layout) {
        return {
          path: route.path,
          component: layouts[(_f = route.meta) == null ? void 0 : _f.layout],
          children: [{ ...route, path: "" }],
          meta: {
            isLayout: true
          }
        };
      }
      return route;
    });
  }
  return deepSetupLayout(routes2);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, {
    default: withCtx(({ Component, route }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), { key: route }, null), _parent2, _scopeId);
      } else {
        return [
          (openBlock(), createBlock(resolveDynamicComponent(Component), { key: route }))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const routes = [
  {
    path: "/",
    name: "/",
    component: () => import("./assets/index-C-5Hmjn5.js")
    /* no children */
  }
];
const ga = "G-XEFWKC8EXG";
const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: setupLayouts(routes) },
  // function to have custom setups
  ({ app, router, routes: routes2, isClient, initialState }) => {
    app.use(VueGtag, {
      config: { id: ga }
    }, router), createHead();
  }
);
export {
  _export_sfc as _,
  createApp
};
