import {Component, Prop, h} from '@stencil/core';

@Component({
    tag: 'idli-input',
    styleUrl: 'idli-input.scss',
    shadow: true
})
export class IdliInput {
    /**
     * The input field label.
     */
    @Prop() label: string;

    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';

    /**
     * Button variants
     * Possible values are `"text"`, `"email"`. Defaults to `"text"`.
     */
    @Prop() type: 'text' | 'email' = 'text';

    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    @Prop() disabled: boolean = false;

    getSizeClass() {
        let size = "size-";
        if (!this.size)
            size = size + 'md';
        else
            size = size + this.size;
        return size;
    }

    getTypeClass() {
        let type = "type-";
        if (!this.type)
            type = type + 'text';
        else
            type = type + this.type;
        return type;
    }

    render() {
        return <input
            class={"idli-input-component " + this.getSizeClass() + " "+ this.getTypeClass()}
            type={this.type} placeholder="Basic usage"
            disabled={this.disabled}>
            <slot/>
        </input>;
    }
}
