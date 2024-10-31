<template>
  <div class="px-16 pt-5 about">
    <div
      class="d-flex align-center ga-1 py-3 cursor-pointer text-gray-darken-4 about-top"
    >
      <span
        ><router-link
          to="/"
          class="text-decoration-none text-grey"
          style="font-size: 14px"
          >Homepage</router-link
        ></span
      >
      <img src="/public/assets/right.png" alt="ar" />
      <span style="font-size: 13px" class="text-grey mt-1">About us</span>
    </div>
    <v-row class="mt-3 align-center">
      <v-col cols="12" md="7">
        <p class="text-form">Lets get to know Luminae</p>
        <h2
          class="text-form mt-1 mb-2"
          style="font-weight: 600; font-size: 34px; line-height: 1.2"
        >
          Providing the best experience to make your
          <span class="text-about"> online shopping</span>
        </h2>
        <span style="font-size: 14px; font-weight: 500">
          At Luminae, we are more than just an online store – we are your
          ultimate destination for an unparalleled shopping experience. Our
          journey began with a simple yet powerful idea: to create a platform
          that not only offers a wide array of products but also fosters a sense
          of community and connection among our customers.
        </span>
        <div class="d-flex justify-space-between align-center mt-2">
          <div v-for="rate in ratings" :key="rate">
            <h2 class="text-about">{{ rate.level }}+</h2>
            <small class="text-grey">{{ rate.text }}</small>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5" class="about-toptwo">
        <div class="d-flex justify-center position-relative">
          <span
            class="bg-sidecard text-center d-flex align-center justify-center span-ab"
            style="border-radius: 60% !important; width: 60px; height: 60px"
          >
            <img width="30" src="/public/assets/quote.png" alt="" />
          </span>
          <v-card
            flat
            class="bg-sidecard py-7 px-3 text-center position-relative"
            width="220"
          >
            <span> We have made many people satisfied with our platform </span>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <div class="mt-5">
      <v-row class="reverse">
        <v-col cols="12" md="6">
          <span class="text-form" style="font-weight: 500"
            >Know Our Service</span
          >
          <h4
            class="text-form mt-1 mb-2"
            style="font-weight: 600; font-size: 32px; line-height: 1.2"
          >
            We offer the best service that will
            <span class="text-about"> make it easier</span>
          </h4>
          <span style="font-size: 14px; font-weight: 500; line-height: 2">
            Discover unparalleled convenience with our top-tier service,
            designed to make your shopping experience smoother than ever.
            Experience shopping made efforts through our exceptional service
            that puts your needs at the forefront.
          </span>
          <span
            class="mt-1 d-block"
            style="font-size: 14px; font-weight: 500; line-height: 2"
          >
            Elevate your shopping journey with our unmatched service, redefining
            conveneince and satisfaction.
          </span>
          <v-row class="mt-3">
            <v-col cols="12" md="6" v-for="service in services" :key="service">
              <v-card class="bg-white px-5 text-center py-5">
                <img :src="service.img" alt="" />
                <span class="text-form d-block font-weight-bold">{{
                  service.name
                }}</span>
                <small class="text-grey d-block my-2" style="font-size: 13px">{{
                  service.description
                }}</small>
                <v-btn flat class="bg-btn text-uppercase w-100">
                  <span> read more </span>
                  <span><img src="" alt="" /></span>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="about-img">
          <div class="position-relative">
            <img src="/public/assets/team.png" alt="" class="team" />
            <div
              class="location position-absolute bg-white px-3 py-2 cursor-pointer"
              style="top: 20px; right: 40px; border-radius: 19px"
            >
              <div class="d-flex ga-2 align-center">
                <img src="/public/assets/location.png" alt="" />
                <span>Melbourne, Australia</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-10">
      <div class="d-flex justify-center">
        <div style="width: 100%;">
          <v-form class="bg-form px-10 py-4">
          <h1>
              Tell us about your
              <span class="text-yellow">Concerns</span>
            </h1>
            <div class="mt-4">
              <span style="font-size: 12px; font-weight: 500;">Your Name</span>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                variant="outlined"
                prepend-inner-icon="bi bi-person"
                class="rounded-lg text-white"
                label="Enter Your Name here"
              ></v-text-field>
            </div>
            <div>
              <span style="font-size: 13px; font-weight: 500">Email</span>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                variant="outlined"
                prepend-inner-icon="bi bi-envelope"
                class="rounded-lg text-white"
                label="Enter Your Email here"
              ></v-text-field>
            </div>
            <div>
              <span style="font-size: 13px; font-weight: 500">Description</span>
              <v-textarea
                v-model="message"
                :rules="messageRules"
                variant="outlined"
                class="rounded-lg text-white"
                row-height="25"
          rows="3"
          auto-grow
          shaped
                label="Tell us about your concerns"
                >
              </v-textarea>
            </div>
            <v-btn flat class="w-100 bg-btn mt-2 mb-5" @click="submitForm">Send</v-btn>
          </v-form>
        </div>
        <div class="form-right" style="width: 100%;">
          <img src="/public/assets/top-slide-1.png" height="100%" style="width: 100%; max-width: 700px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data.json";
export default {
  name: "AboutUs",
  data() {
    return {
      ratings: data.ratings,
      services: data.services,
      name: '',
       nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be 10 characters or less',
      ],
      email: "",
       emailRules : [
      v => !!v || "Email is required",
      v => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v => (v && v.lenght <= 100) || "Message must be 100 character or less",
    ],
    };
  }
};
</script>
