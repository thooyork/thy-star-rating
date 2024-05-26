import { css as i, LitElement as p, html as h } from "lit";
import { property as v, state as u, customElement as c } from "lit/decorators.js";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (l, t, s, r) => {
  for (var e = r > 1 ? void 0 : r ? g(t, s) : t, a = l.length - 1, n; a >= 0; a--)
    (n = l[a]) && (e = (r ? n(t, s, e) : n(e)) || e);
  return r && e && f(t, s, e), e;
};
const y = i`gold`, b = i`#666`, m = i`#ffcc00`, w = i`#FFFFFF44`;
let o = class extends p {
  constructor() {
    super(...arguments), this.value = 0, this.readonly = !1, this.disabled = !1, this.oldValue = 0;
  }
  onStarClickHandler(l, t) {
    !this.readonly && !this.disabled && (l.stopPropagation(), this.oldValue = this.value, this.value = t === 1 && this.value === 1 ? 0 : t, this.dispatchEvent(new CustomEvent("changed", { bubbles: !0, detail: { value: this.value, oldValue: this.oldValue } })));
  }
  render() {
    this.value = this.value < 0 || Number.isNaN(this.value) ? 0 : this.value, this.value = this.value > 5 ? 5 : this.value;
    const l = [];
    for (let t = 5; t > 0; t--) {
      const s = t <= this.value, r = h`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28 28" class="${s ? "rated" : ""} ${this.readonly ? "readonly" : ""} ${this.disabled ? "disabled" : ""}" @click="${(a) => {
        this.onStarClickHandler(a, t);
      }}"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`, e = h`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28 28" class="${s ? "rated" : ""} ${this.readonly ? "readonly" : ""} ${this.disabled ? "disabled" : ""}" @click="${(a) => {
        this.onStarClickHandler(a, t);
      }}"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>`;
      l.push(s ? r : e);
    }
    return h`
                ${l}
        `;
  }
};
o.styles = i`
        :host {
            display: inline-flex;
            flex-direction: row-reverse;
            width: 100%;
        }
        svg {
            cursor: pointer;
            fill: var(--star-default-color, ${b});
            margin: 0 2px;
            height: auto;
            max-width: 100px;
        }
        svg.readonly,
        svg.disabled {
            cursor: default;
        }
        svg:hover:not(.readonly):not(.disabled) > path,
        :hover ~ svg:not(.readonly):not(.disabled) path{
            filter: drop-shadow(0px 0px 1px var(--star-halo-color, ${m})) 
        }
        .rated {
            fill: var(--star-rated-color, ${y});
        }

        svg.disabled {
            fill: var(--star-disabled-color, ${w});
        }

       
    `;
d([
  v({ type: Number })
], o.prototype, "value", 2);
d([
  v({ type: Boolean })
], o.prototype, "readonly", 2);
d([
  v({ type: Boolean })
], o.prototype, "disabled", 2);
d([
  u()
], o.prototype, "oldValue", 2);
o = d([
  c("thy-star-rating")
], o);
export {
  o as ThyStarRating
};
