<template>
  <TopBar />

  <LeftSideBar />

  <div class="page-wrapper">
    <div class="page-content">
      <div class="container-xxl">
        <slot />
      </div>

      <Footer />
    </div>
  </div>

  <teleport to="body">
    <transition name="fade">
      <div v-if="useLayout.showLoginModal" class="login-overlay" @click.self="useLayout.showLoginModal = false">
        <div class="login-modal">
          <button class="login-close" @click="useLayout.showLoginModal = false">&times;</button>
          <div class="login-header">
            <router-link to="/" class="logo logo-admin">
              <img :src="logoSm" height="50" alt="logo" class="auth-logo" />
            </router-link>
            <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">Let's Get Started Rizz</h4>
            <p class="text-muted fw-medium mb-0">Sign in to continue to Rizz.</p>
          </div>
          <div class="login-body">
            <b-form class="my-4" @submit.prevent="handleLogin">
              <b-form-group class="mb-2" label="Username" label-for="username">
                <b-form-input
                  type="text"
                  placeholder="Enter username"
                  id="username"
                  v-model="credentials.email"
                />
                <div v-if="v.email.$error" class="text-danger">
                  <span v-for="(err, idx) in v.email.$errors" :key="idx">
                    {{ err.$message }}
                  </span>
                </div>
              </b-form-group>

              <b-form-group class="mb-2" label="Password" label-for="userpassword">
                <b-form-input
                  type="password"
                  placeholder="Enter password"
                  id="userpassword"
                  v-model="credentials.password"
                />
                <div v-if="v.password.$errors" class="text-danger">
                  <span v-for="(err, idx) in v.password.$errors" :key="idx">
                    {{ err.$message }}
                  </span>
                </div>
              </b-form-group>

              <div class="form-group row mt-3">
                <b-col sm="6">
                  <div class="form-switch-success">
                    <b-form-checkbox switch>Remember me</b-form-checkbox>
                  </div>
                </b-col>
                <b-col sm="6" class="text-end">
                  <router-link to="/auth/reset-pass" class="text-muted font-13" @click="useLayout.showLoginModal = false">
                    <i class="dripicons-lock"></i> Forgot password?
                  </router-link>
                </b-col>
              </div>

              <b-form-group class="mb-0 row">
                <b-col cols="12">
                  <div class="d-grid mt-3">
                    <b-button variant="primary" type="submit">
                      Log In <i class="fas fa-sign-in-alt ms-1"></i>
                    </b-button>
                  </div>
                </b-col>
              </b-form-group>
            </b-form>
            <div class="text-center mb-2">
              <p class="text-muted">
                Don't have an account ?
                <a href="javascript:void(0);" class="text-primary ms-2" @click.prevent="switchToRegister">
                  Free Resister
                </a>
              </p>
              <h6 class="px-3 d-inline-block">Or Login With</h6>
            </div>
            <div class="d-flex justify-content-center">
              <a href="" class="d-flex justify-content-center align-items-center thumb-md bg-blue-subtle text-blue rounded-circle me-2">
                <i class="fab fa-facebook align-self-center"></i>
              </a>
              <a href="" class="d-flex justify-content-center align-items-center thumb-md bg-info-subtle text-info rounded-circle me-2">
                <i class="fab fa-twitter align-self-center"></i>
              </a>
              <a href="" class="d-flex justify-content-center align-items-center thumb-md bg-danger-subtle text-danger rounded-circle">
                <i class="fab fa-google align-self-center"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>

  <teleport to="body">
    <transition name="fade">
      <div v-if="useLayout.showRegisterModal" class="login-overlay" @click.self="useLayout.showRegisterModal = false">
        <div class="login-modal">
          <button class="login-close" @click="useLayout.showRegisterModal = false">&times;</button>
          <div class="login-header">
            <router-link to="/" class="logo logo-admin">
              <img :src="logoSm" height="50" alt="logo" class="auth-logo" />
            </router-link>
            <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">Create an account</h4>
            <p class="text-muted fw-medium mb-0">Enter your detail to Create your account today.</p>
          </div>
          <div class="login-body">
            <b-form class="my-4" @submit.prevent="handleRegister">
              <b-form-group class="mb-2" label="Username" label-for="reg-username">
                <b-form-input type="text" placeholder="Enter username" id="reg-username" v-model="registerForm.username" />
              </b-form-group>

              <b-form-group class="mb-2" label="Email" label-for="reg-email">
                <b-form-input type="email" placeholder="Enter email" id="reg-email" v-model="registerForm.email" />
              </b-form-group>

              <b-form-group class="mb-2" label="Password" label-for="reg-password">
                <b-form-input type="password" placeholder="Enter password" id="reg-password" v-model="registerForm.password" />
              </b-form-group>

              <b-form-group class="mb-2" label="Confirm Password" label-for="reg-confirm">
                <b-form-input type="password" placeholder="Enter Confirm password" id="reg-confirm" v-model="registerForm.confirm" />
              </b-form-group>

              <b-form-group class="mb-2" label="Mobile Number" label-for="reg-mobile">
                <b-form-input type="text" placeholder="Enter Mobile Number" id="reg-mobile" v-model="registerForm.mobile" />
              </b-form-group>

              <b-form-group class="row mt-3">
                <div class="form-switch-success">
                  <b-form-checkbox switch v-model="registerForm.terms">
                    By registering you agree to the Rizz
                    <a href="#" class="text-primary">Terms of Use</a>
                  </b-form-checkbox>
                </div>
              </b-form-group>

              <b-form-group class="mb-0 row">
                <b-col cols="12">
                  <div class="d-grid mt-3">
                    <b-button variant="primary" type="submit">
                      Register <i class="fas fa-sign-in-alt ms-1"></i>
                    </b-button>
                  </div>
                </b-col>
              </b-form-group>
            </b-form>
            <div class="text-center">
              <p class="text-muted">
                Already have an account ?
                <a href="javascript:void(0);" class="text-primary ms-2" @click.prevent="switchToLogin">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import HttpClient from "@/helpers/http-client";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";
import type { AxiosResponse } from "axios";
import type { User } from "@/types/auth";

import logoSm from "@/assets/images/logo-sm.png";

import TopBar from "@/layouts/components/TopBar.vue";
import LeftSideBar from "@/layouts/components/LeftSideBar.vue";
import Footer from "@/layouts/components/Footer.vue";
import { useLayoutStore } from "@/stores/layout";

const useLayout = useLayoutStore();

const credentials = reactive({
  email: "juan@example.com",
  password: "12345678",
});

const registerForm = reactive({
  username: "",
  email: "",
  password: "",
  confirm: "",
  mobile: "",
  terms: false,
});

const vuelidateRules = computed(() => ({
  email: { required, email },
  password: { required },
}));

const v = useVuelidate(vuelidateRules, credentials);

const useAuth = useAuthStore();

const handleLogin = async () => {
  console.log("handleLogin called");
  const result = await v.value.$validate();
  console.log("validation result:", result);
  if (result) {
    try {
      console.log("sending credentials:", credentials);
      const res: AxiosResponse<any> = await HttpClient.post(
        "auth/login",
        credentials,
      );
      console.log("login response:", res.data);
      if (res.data.access_token) {
        useAuth.saveSession({
          ...res.data.user,
          token: res.data.access_token,
        });
        useLayout.showLoginModal = false;
        router.push("/");
      }
    } catch (e: any) {
      console.error("login error:", e);
      if (e.response?.data?.error) {
        console.error("server error:", e.response?.data?.error);
      }
    }
  }
};

const switchToRegister = () => {
  useLayout.showLoginModal = false;
  useLayout.showRegisterModal = true;
};

const switchToLogin = () => {
  useLayout.showRegisterModal = false;
  useLayout.showLoginModal = true;
};

const handleRegister = async () => {
  useLayout.showRegisterModal = false;
};
</script>

<style scoped>
.login-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.login-modal {
  background: #fff;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 420px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  position: relative;
}

.login-close {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.75rem;
  line-height: 1;
  color: #fff;
  cursor: pointer;
  z-index: 10;
}

.login-header {
  background: #000;
  color: #fff;
  padding: 2rem 1.5rem 1rem;
  border-radius: 0.75rem 0.75rem 0 0;
  text-align: center;
}

.login-body {
  padding: 1rem 1.5rem 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
