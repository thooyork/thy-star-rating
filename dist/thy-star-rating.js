import { css as i, LitElement as v, html as h } from "lit";
import { property as c, state as u, customElement as d } from "lit/decorators.js";
var g = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = (r, t, l, s) => {
  for (var e = s > 1 ? void 0 : s ? f(t, l) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (e = (s ? n(t, l, e) : n(e)) || e);
  return s && e && g(t, l, e), e;
};
const m = i`gold`, w = i`#666`, x = i`#ffcc00`;
let a = class extends v {
  constructor() {
    super(...arguments), this.value = 0, this.oldValue = 0;
  }
  onStarClickHandler(r, t) {
    r.stopPropagation(), this.oldValue = this.value, this.value = t === 1 && this.value === 1 ? 0 : t, this.dispatchEvent(new CustomEvent("changed", { bubbles: !0, detail: { value: this.value, oldValue: this.oldValue } }));
  }
  render() {
    const r = [];
    for (let t = 5; t > 0; t--) {
      const l = t <= this.value, s = h`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28 28" class="${l ? "rated" : ""}" @click="${(o) => {
        this.onStarClickHandler(o, t);
      }}"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`, e = h`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28 28" class="${l ? "rated" : ""}" @click="${(o) => {
        this.onStarClickHandler(o, t);
      }}"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>`;
      r.push(l ? s : e);
    }
    return h`
                ${r}
        `;
  }
};
a.styles = i`
        :host {
            display: inline-flex;
            flex-direction: row-reverse;
            width: 100%;
        }
        svg {
            cursor: pointer;
            fill: var(--star-default-color, ${w});
            margin: 0 2px;
            height: auto;
            max-width: 100px;
        }
        svg:hover > path,
        :hover ~ svg path{
            filter: drop-shadow(0px 0px 1px var(--star-halo-color, ${x})) 
        }
        .rated {
            fill: var(--star-rated-color, ${m});
        }
    `;
p([
  c({ type: Number })
], a.prototype, "value", 2);
p([
  u()
], a.prototype, "oldValue", 2);
a = p([
  d("thy-star-rating")
], a);
export {
  a as ThyStarRating
};
