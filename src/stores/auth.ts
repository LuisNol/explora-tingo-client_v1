import { defineStore } from "pinia";
import router from "@/router";
import { useSessionStorage } from "@vueuse/core";
import type { User } from "@/types/auth";
import { computed } from "vue";

export const useAuthStore = defineStore("auth_store", () => {
  const user = useSessionStorage<string | null>("RIZZ_VUE_USER", null);

  const userData = computed<User | null>(() => {
    if (!user.value) return null;
    try {
      return JSON.parse(user.value) as User;
    } catch {
      return null;
    }
  });

  const saveSession = (newUser: User) => {
    user.value = JSON.stringify(newUser);
  };

  const removeSession = () => {
    user.value = null;
    router.push("/");
  };

  const isAuthenticated = () => user.value != null;

  const fullName = computed(() => userData.value?.full_name || userData.value?.name || "");
  const email = computed(() => userData.value?.email || "");
  const avatar = computed(() => userData.value?.avatar || "");

  return {
    user,
    userData,
    fullName,
    email,
    avatar,
    saveSession,
    removeSession,
    isAuthenticated,
  };
});
