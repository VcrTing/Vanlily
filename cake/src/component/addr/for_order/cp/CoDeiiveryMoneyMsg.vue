<template>
    <div class="fx-s fx-t pt">
        <div class="w-37">
            <p class="sub">運費信息</p><p class="pl_x2">&nbsp;</p>
        </div>
        <div class="w-28">
            <p>客付運費價格</p>
            <p class="py">
                <span>$</span>
                &nbsp;&nbsp;&nbsp;
                <span class="h5">{{ deiive.delivery_fee ? deiive.delivery_fee : 0 }}</span>
                &nbsp;&nbsp;&nbsp;
                <span>HKD</span>
            </p>
        </div>
        <div class="fx-1 pri_son">
            <p>Vanlily Cake 付運費價格</p>
            <p class="py">
                <span>$</span>
                &nbsp;&nbsp;&nbsp;
                <span class="h5">{{ deiive.additional_fee ? deiive.additional_fee : 0 }}</span>
                &nbsp;&nbsp;&nbsp;
                <span>HKD</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'deiive' ]
}
</script>