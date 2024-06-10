<script>
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import { Icon, InputMessage } from '@/components';

  export let label;
  export let checked = false;
  export let errorMessage = null;
  export let successMessage = null;
</script>

<label class="flex items-start gap-2">
  <div class="relative flex-center-center text-white">
    <input type="checkbox" class="peer checkbox" {...$$restProps} bind:checked />
    <Icon name={faCheck} classes="absolute hidden peer-checked:block" />
  </div>

  <div class="form-element" class:error={errorMessage} class:success={successMessage}>
    <span class="label">{label}</span>

    <InputMessage {errorMessage} {successMessage} />
  </div>
</label>

<style lang="postcss" scoped>
  .checkbox {
    @apply appearance-none w-5 h-5 bg-white shadow-sm border border-gray-300 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 checked:bg-orange-600 checked:border-orange-600;
  }
</style>
