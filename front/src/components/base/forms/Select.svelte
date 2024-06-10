<script>
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
  import { Icon, InputMessage } from '@/components';

  export let options;
  export let value = null;
  export let label = null;
  export let errorMessage = null;
  export let successMessage = null;
  export let classes = '';
</script>

<label class="form-element {classes}" class:error={errorMessage} class:success={successMessage}>
  {#if label}
    <span class="label">{label}</span>
  {/if}

  <div class="flex relative items-center">
    <select class="field flex-1" {...$$restProps} bind:value>
      {#each options as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>

    <Icon name={faChevronDown} classes="absolute right-3" />
  </div>

  <InputMessage {errorMessage} {successMessage} />
</label>
