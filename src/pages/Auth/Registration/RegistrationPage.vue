<template>
    <div class="d-flex align-center flex-column">
        <div class="d-flex flex-row mb-4">
            <v-icon
                class="mr-2"
                large
            >
                mdi-file-document-multiple
            </v-icon>

            <h2 class="text-h2 app-title">{{ appName }}</h2>
        </div>

        <v-card max-width="600" min-width="400" class="mb-15">
            <v-card-title>
                Реєстрація
                <v-spacer/>
                <v-fade-transition>
                    <v-avatar
                        v-show="step !== 3"
                        transition="fade-transition"
                        color="indigo"
                        class="subheading white--text"
                        size="24"
                    >
                        <div>{{ step }}</div>
                    </v-avatar>
                </v-fade-transition>
            </v-card-title>

            <validation-observer ref="form">
            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                        <validation-provider
                            v-slot="{ errors }"
                            :disabled="step !== 1"
                            name="Email"
                            rules="required|email"
                            slim
                        >
                            <v-text-field
                                @keydown.enter="nextStep()"
                                v-model="email"
                                :disabled="loading"
                                :error-messages="errors"
                                label="Email"
                                placeholder="amazing@you.com"
                                filled
                            />
                        </validation-provider>
                        <span class="text-caption grey--text text--darken-1">
                            Це адреса яку Ви будете використовувати при авторизації
                        </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                    <v-card-text>
                        <validation-provider
                            v-slot="{ errors }"
                            :disabled="step !== 2"
                            name="Пароль"
                            rules="required|min:8"
                            slim
                        >
                            <v-text-field
                                ref="password"
                                v-model="password"
                                @click:append="showPassword = !showPassword"
                                :error-messages="errors"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="showPassword ? 'text' : 'password'"
                                label="Пароль"
                                filled
                            />
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            :disabled="step !== 2"
                            name="Підтвердження пароля"
                            :rules="{
                                required: true,
                                min: 8,
                                confirm_password: {
                                    original: password
                                }
                            }"
                            slim
                        >
                            <v-text-field
                                v-model="passwordRepeat"
                                :error-messages="errors"
                                :type="showPassword ? 'text' : 'password'"
                                label="Повторіть пароль"
                                filled
                            />
                        </validation-provider>
                        <span class="text-caption grey--text text--darken-1">
                                Введіть пароль до акаунту
                            </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                    <div class="pa-4 text-center">
                        <v-icon
                            color="yellow darken-1"
                            size="96"
                        >
                            mdi-shimmer
                        </v-icon>
                        <h3 class="text-h6 font-weight-light mb-2">
                            Вітаємо в {{ appName }}!
                        </h3>
                        <span class="text-caption grey--text">Дякуємо за реєстрацію!</span>
                    </div>
                </v-window-item>
            </v-window>
            </validation-observer>

            <v-divider/>

            <v-card-actions>
                <template v-if="step !== 3">
                    <v-btn
                        @click="previousStep()"
                        :disabled="step === 1"
                        text
                    >
                        Назад
                    </v-btn>
                    <v-spacer/>
                    <v-btn
                        @click="nextStep()"
                        color="success"
                        text
                    >
                        Далі
                    </v-btn>
                </template>
                <v-btn
                    v-else
                    @click="loginAfterRegistration()"
                    :loading="loginLoading"
                    class="mx-auto my-2"
                    color="success"
                    elevation="2"
                    min-width="175"
                    outlined
                >
                    <v-icon class="mr-1">
                        mdi-login
                    </v-icon>
                    Почати
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>

</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
    name: 'RegistrationPage',
    components: {
        ValidationObserver,
        ValidationProvider
    },

    layout: 'clear',
    // middleware: 'guest',
    metaInfo: () => ({
        title: 'Реєстрація'
    }),

    data: () => ({
        appName: process.env.VUE_APP_NAME,
        loginLoading: false,

        step: 1,

        email: '',
        password: '',
        passwordRepeat: '',

        showPassword: false,
        loading: false
    }),
    methods: {
        async nextStep() {
            if (!await this.$refs.form.validate()) {
                return;
            }

            this.step++;
        },
        previousStep() {
            this.step--;
        },
        loginAfterRegistration() {
            this.$store.commit('message/push', {
                text: 'Наразі це не реалізовано',
                color: 'accent'
            });
            this.loginLoading = true;
            setTimeout(() => {
                this.$router.push({ name: 'dashboard' });
            }, 2500);
        }
    }
};
</script>

<style scoped>
.app-title {
    font-family: Nunito, sans-serif !important;
}
</style>