<template>
    <v-row md="auto">
        <v-col>
            <v-card outlined>
                <h3>미처리현황</h3>
                <dl class="listItems">
                    <div>
                        <dt>송장출력예정</dt>
                        <dd>
                            일반 {{ statusUntreatedData.productUnit }} / 합포
                            {{ statusUntreatedData.productPlural }}
                        </dd>
                    </div>
                    <div>
                        <dt>송장전송대기</dt>
                        <dd>
                            {{ statusUntreatedData.sendInvoiceNum }} ({{
                                statusUntreatedData.sendInvoiceDate
                            }}
                            ~)
                        </dd>
                    </div>
                    <div>
                        <dt>배송누락/분실</dt>
                        <dd class="point">
                            {{ statusUntreatedData.missingDeliveryNum }} ({{
                                statusUntreatedData.missingDeliveryDate
                            }}
                            ~)
                        </dd>
                    </div>
                    <div>
                        <dt>취소확인</dt>
                        <dd>
                            {{ statusUntreatedData.cncltCnfrmNum }} ({{
                                statusUntreatedData.cncltCnfrmDate
                            }}
                            ~)
                        </dd>
                    </div>
                </dl>
            </v-card>
        </v-col>
        <v-col>
            <v-card outlined>
                <h3>반품현황</h3>
                <dl class="listItems">
                    <div>
                        <dt>최근3일간 미취소</dt>
                        <dd>
                            {{ statusReturnData.uncancelledNum }} ({{
                                statusReturnData.uncancelledDate
                            }}
                            ~)
                        </dd>
                    </div>
                    <div>
                        <dt>배송 후 취소</dt>
                        <dd>
                            {{ statusReturnData.cncltDlvryNum }} ({{
                                statusReturnData.cncltDlvryDate
                            }}
                            ~)
                        </dd>
                    </div>
                    <div>
                        <dt>소셜 환불</dt>
                        <dd>
                            {{ statusReturnData.socialRefundNum }} ({{
                                statusReturnData.socialRefundDate
                            }}
                            ~)
                        </dd>
                    </div>
                    <div>
                        <dt>반품장기지연</dt>
                        <dd>
                            {{ statusReturnData.lngdlRtrnNum }}
                            ({{
                                `${statusReturnData.lngdlRtrnStartDate} ~  ${statusReturnData.lngdlRtrnEndDate} `
                            }})
                        </dd>
                    </div>
                </dl>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'DashPlateComponent',
    components: {},
    data() {
        return {
            // 미처리 현황
            statusUntreatedData: {
                productUnit: 4,
                productPlural: 2,
                sendInvoiceNum: '9',
                sendInvoiceDate: '0901',
                missingDeliveryNum: '1',
                missingDeliveryDate: '0826',
                cncltCnfrmNum: '0',
                cncltCnfrmDate: '0901',
            },
            // 반품 현황
            statusReturnData: {
                uncancelledNum: '0',
                uncancelledDate: '0905',
                cncltDlvryNum: '9',
                cncltDlvryDate: '0901',
                socialRefundNum: '1',
                socialRefundDate: '0826',
                lngdlRtrnNum: '0',
                lngdlRtrnStartDate: '0901',
                lngdlRtrnEndDate: '0825',
            },
        };
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.v-sheet.v-card {
    height: 204px;
    h3 {
        font-size: 18px;
        line-height: 26px;
    }
    .listItems {
        margin-top: 20px;
        > div {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;

            dt {
                font-size: 15px;
                line-height: 22px;
                color: #6a6a6a;
            }
            dd {
                font-size: 15px;
                line-height: 22px;
                font-weight: 500;
            }
        }
    }
}
@media (max-width: 1600px) {
    .v-sheet.v-card {
        .listItems {
            > div {
                dt {
                    font-size: 12px;
                }
                dd {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
