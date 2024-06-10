<script>
  import { DateInput } from 'date-picker-svelte';
  import { InputMessage } from '@/components';
  import { dayjs } from '@/translations/dayjs';

  export let value;
  export let label = null;
  export let placeholder = '';
  export let min = undefined;
  export let max = undefined;
  export let errorMessage = null;
  export let successMessage = null;
  export let classes = '';

  $: localeData = $dayjs.localeData();

  $: locale = {
    weekStartsOn: localeData.firstDayOfWeek(),
    weekdays: localeData.weekdaysShort(),
    months: localeData.months()
  };

  $: format = $dayjs(value).format('l');
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="form-element {classes}" class:error={errorMessage} class:success={successMessage}>
  {#if label}
    <span class="label">{label}</span>
  {/if}

  <DateInput class="date-field" {placeholder} {min} {max} {format} {locale} bind:value />

  <InputMessage {errorMessage} {successMessage} />
</label>
