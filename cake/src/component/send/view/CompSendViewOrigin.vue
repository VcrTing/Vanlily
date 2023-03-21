<template>
    
        <div class="fx-s">
            <div class="w-33">
                <p>
                    送貨日期：
                    <span>
                        {{ one.send.date }}
                    </span>
                </p>
                <p>
                    取貨：
                    <span>
                        {{ one.send.getter }}
                    </span>
                </p>
                <!--p>
                    運單狀況：
                    <span>
                        {{ one.send.mark }}
                    </span>
                </p-->
            </div>
            <div class="w-33">
                <p>
                    送貨時間：
                    <span>
                        {{ one.send.date }}
                    </span>
                </p>
                <p>
                    運費：
                    <span>
                        $&nbsp;
                        {{ one.send.cost }}
                        &nbsp;HKD
                    </span>
                </p>
                <!-- p>&nbsp;</!-->
            </div>
            <div class="w-33">
                <p>
                    實際送貨時間：
                    <span>
                        {{ one.send.timed }}
                    </span>
                </p>
                <p>
                    附加運費：
                    <span>
                        {{ one.send.cost_add }}
                    </span>
                </p>
                <!-- p>&nbsp;</!-->
            </div>
        </div>
</template>
<script>
export default {
    computed: {
        one() {
            return {
                send: { date: '2022-12-12', timed: '10:00-12:00', 
                cost: 399, cost_add: 12, 
                mark: '这里是备注', getter: '陈先生' }, 
                date: '2022-12-12'
            }
        }
    },
}
</script>