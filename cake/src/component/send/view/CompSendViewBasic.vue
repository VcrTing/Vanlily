<template>

        <div class="fx-s">
            <div class="w-33">
                <p>
                    落單同事：
                    <span>
                        {{ one.changer }}
                    </span>
                </p>
                <p>
                    客戶姓名：
                    <span>
                        {{ one.user.named }}
                    </span>
                </p>
            </div>

            <div class="w-33">
                <p>
                    訂單日期：
                    <span>
                        {{ one.date }}
                    </span>
                </p>
                <p>
                    客戶電話：
                    <span>
                        {{ one.user.phoned }}
                    </span>&nbsp;
                    <a class="a">查询用户以往的订单记录</a>
                </p>
            </div>

            <div class="w-33">
                <p>
                    來源：
                    <span>
                        {{ one.user.from }}
                    </span>
                </p>
                <p>
                    聯絡賬號：
                    <span>
                        {{ one.user.phoned_from }}
                    </span>
                </p>
            </div>
        </div>
</template>

<script>
export default {
    // props: [ 'one' ],
    computed: {
        one() {
            return {
                changer: '李瑞希', date: '2022-12-12', order_from: 'WhatsApp',
                user: { named: '汤小姐', phoned: '8877 9955', phoned_from: '8887 2123' }, 
            }
        }
    },
}
</script>

<style>

</style>