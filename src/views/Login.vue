<template>
  <div  v-if="errMsg">
    <label>{{ errMsg }}</label>
  </div>
  <h1>Sign in with Google</h1>
  <a @click="signInGoogle()">

  <h1>Sign in with Email</h1>
  <div>
    <label>Email Address</label>
    <input type="email" v-model="dataLogin.email"/>
  </div>
  <div>
      <label>Password</label>
      <input type="password" v-model="dataLogin.password"/>
  </div>
  <div>
    <button @click="logIn()">Login</button>
  </div>
</template>

<script setup lang="ts">
import { ElNotification } from "element-plus";
import { ref, reactive } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const signInSuccess = () => {
  ElNotification.success({
    title: "Success",
    message: "Sign In Success",
    type: "success",
  });
};
const signInError = (message: string) => {
  ElNotification({
    title: "Error",
    message: `${message}`,
    type: "error",
  });
};
const dataLogin = reactive({
  email: "",
  password: "",
});
const errMsg = ref();
const router = useRouter();
const logIn = () => {
  signInWithEmailAndPassword(getAuth(), dataLogin.email, dataLogin.password)
    .then((data) => {
      signInSuccess();
      router.push("/");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was round";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorred";
          break;
      }
      signInError(errMsg.value);
    });
};

const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      signInSuccess();
      // router.push('/')
    })
    .catch((error) => {
      signInError(errMsg.value);
      console.log("error", error);
    });
};
</script>
