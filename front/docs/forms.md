# Form fields

## Fetching values

### `Input`, `Textarea`, `Select`, `Checkbox`

These components behave like the native form elements. You can get their value by binding it.

### `RadioGroup`

You can get the value of the selected radio option using the custom event `valueChange` on the `RadioGroup` component

## Error and success handling

Every field component have 4 props to be able to display error or success messages :

- `error` and `success` are booleans to set the field state, which displays a message and changes the style
- `errorMessage` and `successMessage` are strings to set a custom message (if the boolean is set to false, the message won't be displayed). A default message is used if these props aren't set

## Datepicker

The `Datepicker` component uses the [📚 Date Picker Svelte library](https://date-picker-svelte.kasper.space/docs).

The value is bound to the field like a native form element.
