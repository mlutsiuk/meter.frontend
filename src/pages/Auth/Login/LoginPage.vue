<template>
    <v-card max-width="600" class="mx-auto">
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
        <v-card-actions class="pb-6">
            <v-btn
                @click="login()"
                :loading="loading"
                class="mx-auto"
                color="success"
                elevation="2"
                min-width="200"
                large
            >
                Вхід
            </v-btn>
        </v-card-actions>
    </v-card>
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

    data: () => ({
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
                const response  = await axios.post('/auth/login', {
                    email: this.email,
                    password: this.password
                });
                token = response.token;
            } catch (e) {
                this.loading = false;    // TODO: Show error message
                return;
            }

            await this.$store.dispatch('auth/saveToken', token);
            await this.$store.dispatch('auth/fetchUser');

            this.loading = false;
        },
        redirectAfterLogin() {
            const intendedUrl = Cookies.get('intended_url');

            if (intendedUrl) {
                Cookies.remove('intended_url');
                this.$router.push({ path: intendedUrl });
            } else {
                this.$router.push({ name: 'home' });
            }
        }
    }
};
</script>