<template>
    <v-row class="login">
        <v-col>
            <validation-observer
                ref="observer"
                v-slot="{ invalid }"
                class="login__form"
            >
                <h2><router-link to="/">Shopify Admin</router-link></h2>
                <form @submit.prevent="submit">
                    <validation-provider
                        v-slot="{ errors }"
                        name="email"
                        rules="required|email"
                    >
                        <v-text-field
                            v-model="email"
                            :error-messages="errors"
                            label="E-mail"
                            placeholder="mobbin.cms2@gmail.com"
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        v-slot="{ errors }"
                        name="password"
                        rules="required|password"
                    >
                        <v-text-field
                            ref="passRef"
                            type="password"
                            v-model="password"
                            :error-messages="errors"
                            label="Password"
                        ></v-text-field>
                        <v-btn
                            fab
                            color="transparent"
                            @click="handleChangePassword"
                        >
                            <v-icon dark v-if="passShow"> mdi-eye </v-icon>
                            <v-icon dark v-else> mdi-eye-off </v-icon>
                        </v-btn>
                    </validation-provider>

                    <v-btn
                        type="submit"
                        color="primary"
                        block
                        :disabled="invalid"
                    >
                        Sign In
                    </v-btn>
                </form>
            </validation-observer>
        </v-col>
    </v-row>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: `입력란에 입력해주세요`,
});
extend('email', email, {
    message: '이메일 형식에 맞지않습니다.',
});
extend('password', {
    validate(value) {
        return value === '1111';
    },
    message: '패스워드가 맞지않습니다.',
});

export default {
    name: 'Login',
    components: { ValidationObserver, ValidationProvider },
    data() {
        return {
            // password text
            passShow: false,

            // form
            email: '',
            password: '',
        };
    },

    methods: {
        submit() {
            console.log(this.$refs.observer);
            this.$refs.observer.validate();
        },
        clear() {
            this.email = '';
            this.password = '';
            this.$refs.observer.reset();
        },

        // password text
        handleChangePassword() {
            this.passShow = !this.passShow;

            !this.passShow
                ? (this.$refs.passRef.$el.querySelector(
                      'input',
                  ).attributes[1].nodeValue = 'password')
                : (this.$refs.passRef.$el.querySelector(
                      'input',
                  ).attributes[1].nodeValue = 'text');
        },
    },
};
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    > .col {
        flex-grow: 0;
    }

    .login__form {
        display: block;
        width: 326px;
        h2 {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #000;
            padding-bottom: 15px;
            font-weight: 900;
            font-size: 24px;
            line-height: 28px;
            a {
                text-decoration: none;
            }
            &:before {
                content: '';
                display: inline-block;
                width: 40px;
                height: 40px;
                background: #017efa
                    url('../assets/images/common/bx_bx-bolt-circle.svg')
                    no-repeat 50% 50%;
                border-radius: 8px;
                margin: 0 14px 0 0;
            }
        }
        form {
            margin-top: 50px;
            > span {
                position: relative;
                > .v-btn {
                    position: absolute;
                    right: 0;
                    top: 26px;
                    width: 10px;
                    height: 10px;
                }
            }
            > span + .v-btn {
                height: 58px;
                margin-top: 34px;
            }
        }
        ::v-deep {
            .v-input__slot {
                &:after {
                    content: '';
                    border-color: #017efa;
                }
            }
            .v-text-field {
                .v-label {
                    color: #000;
                    font-size: 16px;
                    line-height: 140%;
                }
            }
            .v-messages__message {
                color: #eb410b;
            }
        }
    }
}
</style>
