<script>
  import { fade } from 'svelte/transition';
  import { faClose, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
  import {
    Button,
    Icon,
    Input,
    Textarea,
    Select,
    Checkbox,
    RadioGroup,
    Datepicker,
    InfiniteScroll
  } from '@/components';
  import { _ } from '@/translations/i18n';

  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 }
  ];

  const setRadioValue = (event) => {
    radioValue = event.detail;
  };

  let textValue;
  let selectValue;
  let checkboxValue;
  let radioValue;
  let dateValue;

  let scrollItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const loadMore = () => {
    scrollItems = [...scrollItems, ...Array.from({ length: 5 }).map((_, i) => scrollItems.length + i + 1)];
  };
</script>

<div in:fade|global={{ duration: 500 }} class="pb-6 md:pb-16">
  <section class="h-[50vh] bg-gray-50 flex-center-center mb-6 md:mb-16">
    <h1 class="h1">{$_('design_system.title')}</h1>
  </section>

  <section class="section">
    <h2 class="mb-2 h2">{$_('design_system.text.title')}</h2>
    <hr class="mb-8" />

    <h1 class="mb-4 h1">{$_('design_system.text.h1')}</h1>
    <h2 class="mb-4 h2">{$_('design_system.text.h2')}</h2>
    <h3 class="h3">{$_('design_system.text.h3')}</h3>
  </section>

  <section class="section">
    <h2 class="mb-2 h2">{$_('design_system.buttons.title')}</h2>
    <hr class="mb-8" />

    <div class="buttons-container">
      <Button>{$_('design_system.buttons.primary')}</Button>
      <Button disabled>{$_('design_system.buttons.primary_disabled')}</Button>
    </div>

    <div class="buttons-container">
      <Button styleType="outlined">{$_('design_system.buttons.outlined')}</Button>
      <Button styleType="outlined" disabled>{$_('design_system.buttons.outlined_disabled')}</Button>
    </div>

    <div class="buttons-container">
      <Button>
        <Icon name={faClose} />
        {$_('design_system.buttons.icon_left')}
      </Button>
      <Button>
        {$_('design_system.buttons.icon_right')}
        <Icon name={faCheck} />
      </Button>
      <Button><Icon name={faPen} /></Button>
    </div>

    <div class="buttons-container">
      <Button loading>{$_('design_system.buttons.loading')}</Button>
    </div>
  </section>

  <section class="section">
    <h2 class="mb-2 h2">{$_('design_system.forms.title')}</h2>
    <hr class="mb-8" />

    <form class="flex flex-col items-baseline max-w-2xl gap-8">
      <div>
        <Input
          label={$_('design_system.forms.text_field')}
          type="text"
          placeholder={$_('design_system.forms.placeholder')}
          bind:value={textValue}
        />
        <p class="mt-2 text-xs text-gray-600">Value : {textValue}</p>
      </div>

      <Input
        label={$_('design_system.forms.password_field')}
        type="password"
        autocomplete="new-password"
        minlength="8"
        value="Lorem"
      />
      <Input label={$_('design_system.forms.email_field')} type="email" />
      <Input
        label={$_('design_system.forms.invalid_field')}
        type="text"
        value="Lorem ipsum"
        errorMessage={$_('errors.field')}
      />
      <Input
        label={$_('design_system.forms.valid_field')}
        type="text"
        value="Lorem ipsum"
        successMessage={$_('success.field')}
      />

      <Textarea label={$_('design_system.forms.textarea')} placeholder={$_('design_system.forms.placeholder')} />
      <Textarea placeholder={$_('design_system.forms.placeholder')} height="sm" errorMessage={$_('errors.field')} />

      <div class="w-full">
        <Select label={$_('design_system.forms.select')} {options} bind:value={selectValue} />
        <p class="mt-2 text-xs text-gray-600">Value : {selectValue}</p>
      </div>

      <div>
        <Checkbox label={$_('design_system.forms.checkbox')} bind:checked={checkboxValue} />
        <p class="mt-2 text-xs text-gray-600">Value : {checkboxValue}</p>
      </div>
      <Checkbox
        label={$_('design_system.forms.invalid_checkbox')}
        errorMessage={$_('design_system.forms.checkbox_error')}
      />

      <div>
        <RadioGroup
          label={$_('design_system.forms.radio')}
          name="radio-group"
          {options}
          on:valueChange={setRadioValue}
        />
        <p class="mt-2 text-xs text-gray-600">Value : {radioValue}</p>
      </div>
      <RadioGroup
        label={$_('design_system.forms.invalid_radio')}
        name="invalid-radio-group"
        {options}
        errorMessage={$_('design_system.forms.radio_error')}
      />

      <div class="w-full">
        <Datepicker
          label={$_('design_system.forms.datepicker')}
          placeholder="Lorem ipsum"
          min={new Date()}
          bind:value={dateValue}
        />
        <p class="mt-2 text-xs text-gray-600">Value : {dateValue}</p>
      </div>

      <Button type="submit">{$_('design_system.forms.send')}</Button>
    </form>
  </section>

  <section class="section">
    <h2 class="mb-2 h2">{$_('design_system.infinite_scroll.title')}</h2>
    <hr class="mb-8" />

    <ul class="max-w-xs p-4 overflow-y-scroll list-none border rounded-lg max-h-36">
      {#each scrollItems as item}
        <li>{item}</li>
      {/each}

      <InfiniteScroll hasMore={scrollItems.length} threshold={50} on:loadMore={loadMore} />
    </ul>
  </section>
</div>

<style lang="postcss" scoped>
  .section {
    @apply p-6 md:py-16 md:px-24;
  }

  .buttons-container {
    @apply mb-2 flex gap-2 flex-col items-start md:flex-row md:items-end;
  }
</style>
