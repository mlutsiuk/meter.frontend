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

        <v-card max-width="600" min-width="400" class="d-flex flex-column align-center mb-15">
            <v-card-title>
                Вхід
            </v-card-title>
            <v-card-text class="pb-0">
                <validation-observer
                    ref="loginForm"
                    slim
                >
                    <validation-provider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email"
                        slim
                    >
                        <v-text-field
                            @keydown.enter="$refs.passwordInput.focus()"
                            v-model="email"
                            :disabled="loading"
                            :error-messages="errors"
                            label="Email"
                            placeholder="amazing@you.com"
                            filled
                        />
                    </validation-provider>

                    <validation-provider
                        v-slot="{ errors }"
                        name="Пароль"
                        rules="required|min:8"
                        slim
                    >
                        <v-text-field
                            ref="passwordInput"
                            @keydown.enter="login()"
                            v-model="password"
                            :disabled="loading"
                            :error-messages="errors"
                            @click:append="showPassword = !showPassword"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            label="Пароль"
                            filled
                        />
                    </validation-provider>
                </validation-observer>
            </v-card-text>
            <v-card-actions class="pb-4 d-flex flex-column">
                <v-btn
                    @click="login()"
                    :loading="loading"
                    color="success"
                    elevation="2"
                    min-width="200"
                    large
                >
                    Вхід
                </v-btn>

                <div
                    @click="$router.push({ name: 'registration' })"
                    class="mt-2 text-subtitle-2 grey--text cursor-pointer"
                >
                    Зареєструватися
                </div>
            </v-card-actions>
        </v-card>
    </div>

</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import axios from '@/plugins/axios';
import Cookies from 'js-cookie';

export default {
    name: 'LoginPage',
    components: {
        ValidationObserver,
        ValidationProvider
    },

    layout: 'clear',
    middleware: 'guest',
    metaInfo: () => ({
        title: 'Вхід'
    }),

    data: () => ({
        appName: process.env.VUE_APP_NAME,

        email: '',
        password: '',

        showPassword: false,
        loading: false
    }),
    methods: {
        async login() {
            if (!await this.$refs.loginForm.validate()) {
                return;
            }

            this.showPassword = false;
            this.loading = true;

            let token;

            try {
                const response = await axios.post('/auth/login', {
                    email: this.email,
                    password: this.password
                });
                token = response.data.access_token;
            } catch {
                this.loading = false;

                this.$store.commit('message/push', {
                    text: 'Не вдалося увійти, спробуйте ще раз.',
                    color: 'error'
                });

                return;
            }

            await this.$store.dispatch('auth/saveToken', token);
            await this.$store.dispatch('auth/fetchUser');

            this.loading = false;

            this.redirectAfterLogin();
        },
        redirectAfterLogin() {
            const intendedUrl = Cookies.get('intended_url');

            if (intendedUrl) {
                Cookies.remove('intended_url');
                this.$router.push({ path: intendedUrl });
            } else {
                this.$router.push({ name: 'dashboard' });
            }
        }
    }
};
</script>

<style scoped>
.app-title {
    font-family: Nunito, sans-serif !important;
}
.cursor-pointer {
    cursor: pointer;
}
</style>