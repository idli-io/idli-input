import {Component, Prop, h, EventEmitter, Event} from '@stencil/core';

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
     * The input field placeholder.
     */
    @Prop() placeholder: string;

    /**
     * The input field value.
     */
    @Prop() value: string;

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

    @Event() inputChanged: EventEmitter;

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

    handleChange(event: any) {
        this.value = event.target.value;
        this.inputChanged.emit(event);
    }

    render() {
        return <div class="idli-input-component">
            <label>{this.label}</label>
            <input
                class={"idli-input-element " + this.getSizeClass() + " " + this.getTypeClass()}
                type={this.type}
                placeholder={this.placeholder}
                value={this.value}
                onInput={(event) => this.handleChange(event)}
                disabled={this.disabled}>
            </input>
        </div>;
    }
}
