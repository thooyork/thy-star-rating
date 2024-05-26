import { LitElement } from 'lit';

export declare class ThyStarRating extends LitElement {
    value: number;
    readonly: boolean;
    disabled: boolean;
    private oldValue;
    static styles: import('lit').CSSResult;
    private onStarClickHandler;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'thy-star-rating': ThyStarRating;
    }
}
