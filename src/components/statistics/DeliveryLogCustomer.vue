<template>
    <div class="delivery-log">
        <h3 class="vue-draggable-handle">고객별 배송 로그</h3>
        <div class="no-drag">
            <ul>
                <li v-for="item in memberData" :key="item.sn">
                    <div class="log-list">
                        <div class="avatar">
                            <img
                                :srcset="item.avatar"
                                sizes=""
                                alt="인물사진"
                            />
                        </div>
                        <div>
                            <p class="name">{{ item.orderer }}</p>
                            <p
                                class="status"
                                :class="[
                                    {
                                        'color-blue':
                                            item.deliveryStatus === '배송중',
                                    },
                                    {
                                        'color-red':
                                            item.deliveryStatus === '미발송',
                                    },
                                    {
                                        'color-orange':
                                            item.deliveryStatus === '반품요청',
                                    },
                                    {
                                        'color-gray':
                                            item.deliveryStatus === '배송보류',
                                    },
                                    {
                                        'color-purple':
                                            item.deliveryStatus === '반품완료',
                                    },
                                    {
                                        'color-yellow':
                                            item.deliveryStatus === '취소요청',
                                    },
                                ]"
                            >
                                {{ item.deliveryStatus }}
                            </p>
                        </div>
                        <div class="code">{{ item.orderNumber }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DeliveryLogCustomer',
    props: {
        memberData: {
            type: [Array, Object],
            required: true,
        },
    },
};
</script>
<style lang="scss" scoped>
.delivery-log {
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
}
.no-drag {
    margin-right: -20px;
    ul {
        max-height: 550px;
        overflow-y: auto;
        margin-top: 25px;
        padding-left: 0 !important;
        padding-bottom: 25px;
        li {
            margin-bottom: 20px;
        }
    }
}
.log-list {
    display: flex;
    align-items: flex-start;
    padding-left: 0;
    flex-wrap: wrap;

    .avatar {
        margin-right: 10px;
        img {
            max-width: none;
            width: 36px;
            height: 36px;
            border-radius: 36px;
        }
    }
    .name {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        margin: 0;
    }
    .status {
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 0.01em;
        margin: 0;
        color: #1bae6a;
        &.color-blue {
            color: #34c1e9;
        }
        &.color-red {
            color: #ff0506;
        }
        &.color-orange {
            color: #f9a825;
        }
        &.color-gray {
            color: #4d4d4d;
        }
        &.color-purple {
            color: #d41cec;
        }
        &.color-yellow {
            color: #8a8a06;
        }
    }
    .code {
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        color: #a2a2a2;
        margin-left: 14px;
    }
}
</style>
