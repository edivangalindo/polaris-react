import React from 'react';
import { LabelledProps } from '../Labelled';
import { Error } from '../../types';
declare type Type = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'currency';
declare type Alignment = 'left' | 'center' | 'right';
interface NonMutuallyExclusiveProps {
    /** Text to display before value */
    prefix?: React.ReactNode;
    /** Text to display after value */
    suffix?: React.ReactNode;
    /** Hint text to display */
    placeholder?: string;
    /** Initial value for the input */
    value?: string;
    /** Additional hint text to display */
    helpText?: React.ReactNode;
    /** Label for the input */
    label: string;
    /** Adds an action to the label */
    labelAction?: LabelledProps['action'];
    /** Visually hide the label */
    labelHidden?: boolean;
    /** Disable the input */
    disabled?: boolean;
    /** Show a clear text button in the input */
    clearButton?: boolean;
    /** Disable editing of the input */
    readOnly?: boolean;
    /** Automatically focus the input */
    autoFocus?: boolean;
    /** Force the focus state on the input */
    focused?: boolean;
    /** Allow for multiple lines of input */
    multiline?: boolean | number;
    /** Error to display beneath the label */
    error?: Error | boolean;
    /** An element connected to the right of the input */
    connectedRight?: React.ReactNode;
    /** An element connected to the left of the input */
    connectedLeft?: React.ReactNode;
    /** Determine type of input */
    type?: Type;
    /** Name of the input */
    name?: string;
    /** ID for the input */
    id?: string;
    /** Defines a specific role attribute for the input */
    role?: string;
    /** Limit increment value for numeric and date-time inputs */
    step?: number;
    /** Enable automatic completion by the browser */
    autoComplete?: boolean | string;
    /** Mimics the behavior of the native HTML attribute, limiting the maximum value */
    max?: number | string;
    /** Maximum character length for an input */
    maxLength?: number;
    /** Mimics the behavior of the native HTML attribute, limiting the minimum value */
    min?: number | string;
    /** Minimum character length for an input */
    minLength?: number;
    /** A regular expression to check the value against */
    pattern?: string;
    /** Indicate whether value should have spelling checked */
    spellCheck?: boolean;
    /** Indicates the id of a component owned by the input */
    ariaOwns?: string;
    /** Indicates the id of a component controlled by the input */
    ariaControls?: string;
    /** Indicates the id of a related component’s visually focused element to the input */
    ariaActiveDescendant?: string;
    /** Indicates what kind of user input completion suggestions are provided */
    ariaAutocomplete?: string;
    /** Indicates whether or not the character count should be displayed */
    showCharacterCount?: boolean;
    /** Determines the alignment of the text in the input */
    align?: Alignment;
    /** Callback when clear button is clicked */
    onClearButtonClick?(id: string): void;
    /** Callback when value is changed */
    onChange?(value: string, id: string): void;
    /** Callback when input is focused */
    onFocus?(): void;
    /** Callback when focus is removed */
    onBlur?(): void;
}
export declare type TextFieldProps = NonMutuallyExclusiveProps & ({
    readOnly: true;
} | {
    disabled: true;
} | {
    onChange(value: string, id: string): void;
});
export declare function TextField({ prefix, suffix, placeholder, value, helpText, label, labelAction, labelHidden, disabled, clearButton, readOnly, autoFocus, focused, multiline, error, connectedRight, connectedLeft, type, name, id: idProp, role, step, autoComplete, max, maxLength, min, minLength, pattern, spellCheck, ariaOwns, ariaControls, ariaActiveDescendant, ariaAutocomplete, showCharacterCount, align, onClearButtonClick, onChange, onFocus, onBlur, }: TextFieldProps): JSX.Element;
export {};