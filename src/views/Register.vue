<template>
  <H1>註冊</H1>
  <form>
    <div>
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" placeholder="First Name" v-model="formData.firstName"/>
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" placeholder="Last Name" v-model="formData.lastName"/>
    </div>
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" placeholder="Email" v-model="formData.email"/>
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="******************" v-model="formData.password"/>
      <p>Please choose a password.</p>
    </div>

    <div>
      <label for="c_password">Confirm Password</label>
      <input id="c_password" type="password" placeholder="******************" v-model="formData.confirmPassword"/>
    </div>

    <div>
      <button type="button" @click="registerAccount">Register Account</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const registerAccount = () => {
  createUserWithEmailAndPassword(
    getAuth(),
    formData.value.email,
    formData.value.password
  )
    .then((data) => {
      console.log("success");
      console.log("data :>> ", data);
      router.push("/");
    })
    .catch((error) => {
      console.log("error");
      console.log("error :>> ", error);
    });
};

</script>

<style lang="scss" scoped></style>
