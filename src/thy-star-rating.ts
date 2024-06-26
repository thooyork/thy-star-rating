import { css, LitElement, html, svg } from "lit";
import { customElement, property, state } from "lit/decorators.js";


const ratedColor = css`gold`;
const defaultColor = css`#666`;
const haloColor = css`#ffcc00`;
const disabledColor = css`#FFFFFF44`;


@customElement("thy-star-rating")
export class ThyStarRating extends LitElement {

    @property({ type: Number })
    value = 0;

    @property({ type: Boolean })
    readonly = false;

    @property({ type: Boolean })
    disabled = false;

    @state()
    private oldValue = 0;

    static styles = css`
        :host {
            display: inline-flex;
            flex-direction: row-reverse;
            width: 100%;
        }
        svg {
            cursor: pointer;
            fill: var(--star-default-color, ${defaultColor});
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
            filter: drop-shadow(0px 0px 1px var(--star-halo-color, ${haloColor})) 
        }
        .rated {
            fill: var(--star-rated-color, ${ratedColor});
        }

        svg.disabled {
            fill: var(--star-disabled-color, ${disabledColor});
        }

       
    `;

    private onStarClickHandler(e: MouseEvent, index: number) {
        if (!this.readonly && !this.disabled) {
            e.stopPropagation();
            this.oldValue = this.value;
            this.value = (index === 1 && this.value === 1) ? 0 : index;
            this.dispatchEvent(new CustomEvent('changed', { bubbles: true, detail: { value: this.value, oldValue: this.oldValue } }));
        }
    }

    public render() {
        this.value = this.value < 0 || Number.isNaN(this.value) ? 0 : this.value;
        this.value = this.value > 5 ? 5 : this.value;
        const itemTemplates = [];
        for (let i = 5; i > 0; i--) {
            const rated = i <= this.value;
            const filledStar = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" class="${rated ? 'rated' : ''} ${this.readonly ? 'readonly' : ''} ${this.disabled ? 'disabled' : ''}" @click="${(e: PointerEvent) => { this.onStarClickHandler(e, i); }}"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`;
            const outlinedStar = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" class="${rated ? 'rated' : ''} ${this.readonly ? 'readonly' : ''} ${this.disabled ? 'disabled' : ''}" @click="${(e: PointerEvent) => { this.onStarClickHandler(e, i); }}"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>`;
            itemTemplates.push(rated ? filledStar : outlinedStar);
        }
        return html`
                ${itemTemplates}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'thy-star-rating': ThyStarRating;
    }
}