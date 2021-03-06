<template>
  <div>
    <h1>{{ pageTitle }}</h1>

    <v-form
      v-if="showForm"
      ref="form"
      v-model="validForm"
      @submit.prevent>

      <v-text-field
        id="usernameOrEmail"
        v-model="ctx.user.username"
        :rules="[rules.required]"
        label="Username or email"/>

      <Password
        v-if="resetToken!=null"
        v-model="password"
        :confirmation="true"/>

      <v-btn
        id="submitButton"
        :disabled="!validForm||submitting"
        @click="submit"
      >{{ buttonText }}</v-btn>
    </v-form>
    <!--
    // If the reset password happend during an Auth Proceess (pollUrl exists)
    -->
    <div v-if="ctx.isAccessRequest()">
      <v-divider class="mt-3 mb-2"/>
      <router-link :to="{ name: 'Authorization' }"><h3>Go to Sign in</h3></router-link>
    </div>

    <Alerts
      :successMsg="success"
      :errorMsg="error"/>
  </div>
</template>

<script>
import Password from './bits/Password';
import Alerts from './bits/Alerts';
import Context from '../../context.js';
import controllerFactory from '../controller/controller.js';

export default {
  components: {
    Password,
    Alerts,
  },
  props: {
    resetToken: {type: String, default: null},
  },
  data: () => ({
    password: '',
    error: '',
    success: '',
    showForm: true,
    submitting: false,
    ctx: {},
    c: null,
    rules: {
      required: value => !!value || 'This field is required.',
    },
    validForm: false,
  }),
  computed: {
    pageTitle: function () {
      return this.resetToken ? 'Set a new password' : 'Reset password';
    },
    buttonText: function () {
      return this.resetToken ? 'Change password' : 'Request password reset';
    },
  },
  async created () {
    this.ctx = new Context(this.$route.query);
    await this.ctx.init();
    this.c = controllerFactory(this.ctx);
  },
  methods: {
    submit () {
      this.ctx.user.username = this.ctx.user.username.trim();
      if (this.$refs.form.validate()) {
        this.submitting = true;
        // Ask for a reset token
        if (this.resetToken == null) {
          this.c.requestResetPassword()
            .then(() => {
              this.showForm = false;
              this.success = 'We have sent password reset instructions to your e-mail address.';
            })
            .catch(this.showError)
            .finally(() => { this.submitting = false; });
        } else {
          // If we already got a reset token, we can change the password
          this.c.resetPassword(this.password, this.resetToken)
            .then(() => {
              this.showForm = false;
              this.success = 'Your password have been successfully changed.';
            })
            .catch(this.showError)
            .finally(() => { this.submitting = false; });
        }
      }
    },
    showError (error) {
      this.error = error.msg;
    },
  },
};
</script>
