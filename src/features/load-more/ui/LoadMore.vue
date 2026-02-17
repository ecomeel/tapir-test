<template>
  <div class="load-action">
    <p v-show="error" class="load-action__error">
      Произошла ошибка, попробуйте позже
    </p>
    <TextButton
      v-bind="loadButtonSettings"
      @click="$emit('click')"
    />
  </div>
</template>

<script setup lang="ts">
import TextButton from '~/shared/ui/TextButton/TextButton.vue';

const props = defineProps<{
  pending: boolean
  error?: boolean
}>();

defineEmits(['click']);

const loadButtonSettings = computed(() => ({
  label: props.pending ? 
        "Загрузка..." : 
        props.error ? 
        "Повторить" : 
        "Показать еще",
  bordered: !props.pending,
  disabled: props.pending
}))

</script>

<style lang="scss" scoped>
.load-action {
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__error {
    padding: 10px 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
  }
}
</style>