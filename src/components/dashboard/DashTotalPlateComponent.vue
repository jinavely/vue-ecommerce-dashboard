<template>
    <v-row>
        <v-col>
            <v-card outlined>
                <h3>처리현황</h3>
                <dl>
                    <dt><v-chip color="green lighten-4"> 발주 </v-chip></dt>
                    <dd>{{ processingStatusData.order }}</dd>
                    <dt><v-chip color="blue lighten-4"> 접수 </v-chip></dt>
                    <dd>{{ processingStatusData.register }}</dd>
                    <dt><v-chip color="orange lighten-4"> 송장 </v-chip></dt>
                    <dd>{{ processingStatusData.invoice }}</dd>
                    <dt><v-chip color="pink lighten-4"> 배송 </v-chip></dt>
                    <dd>{{ processingStatusData.shipping }}</dd>
                </dl>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'DashTotalPlateComponent',
    props: {
        item: {
            type: Object,
            require: true,
            default: Object,
        },
    },
    components: {},
    data() {
        return {
            // 처리현황 DATA
            processingStatusData: {
                order: '14',
                register: '32',
                invoice: '4',
                shipping: '14',
            },
        };
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.v-sheet.v-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h3 {
        margin: 0 25px 0 0;
    }

    dl {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px 0;
        dt {
            margin: 10px 0 10px 25px;
            &:first-child {
                margin-left: 0;
            }
            .v-chip {
                font-weight: 500;
                font-size: 15px;
                line-height: 22px;
            }
        }
        dd {
            margin-left: 11px;
            font-weight: 600;
            font-size: 24px;
            line-height: 28px;
        }
    }
}
@media (max-width: 1800px) {
    .v-sheet.v-card {
        dl {
            dt {
                margin-left: 15px;
                .v-chip {
                    font-size: 12px;
                }
            }
            dd {
                margin-left: 6px;
                font-size: 14px;
            }
        }
    }
}
</style>
