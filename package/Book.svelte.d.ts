import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type BookProps = typeof __propDef.props;
export declare type BookEvents = typeof __propDef.events;
export declare type BookSlots = typeof __propDef.slots;
export default class Book extends SvelteComponentTyped<BookProps, BookEvents, BookSlots> {
}
export {};
