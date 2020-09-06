<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="top">
      <ElFormItem label="Type (Тип)" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="Income (Доход)" value="INCOME" />
          <ElOption label="Outcome (Расход)" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments (Комментарии)" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value (Значение)" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton class="button-form" @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    formData: {
      type: "INCOME",
      comment: "",
      value: 0,
    },
    rules: {
      type: [
        { required: true, message: "Please Select Type", trigger: "blur" },
      ],
      comment: [
        { required: true, message: "Please Input Comment", trigger: "blur" },
      ],
      value: [
        { required: true, message: "Please Input Comment", trigger: "blur" },
        {
          type: "number",
          message: "Value must be a number",
          trigger: "change",
        },
      ],
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
/* .button-form {
  text-transform: uppercase;
} */
</style>