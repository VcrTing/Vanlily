<template>
    <div class="html">
        <div class="menu">
            <div class="logo">
                <img src="@/assets/LOGO.png">
            </div>
            <div class="py_x2">
                <collapse>
                    <collapse-menu-item>
                        <div slot="tit">
                            <i class="h5 mdi mdi-account-outline"></i><span class="pl_n">Dashboard</span>
                        </div>
                        <div class="px py" slot="cont"></div>
                    </collapse-menu-item>
                    <collapse-menu-item class="menu-active">
                        <div slot="tit">
                            <i class="h5 mdi mdi-account-outline"></i><span class="pl_n">订单</span>
                        </div>
                        <div class="px py" slot="cont"></div>
                    </collapse-menu-item>
                    <collapse-menu-item>
                        <div slot="tit">
                            <i class="h5 mdi mdi-account-outline"></i><span class="pl_n">客户</span>
                        </div>
                        <div class="px py" slot="cont"></div>
                    </collapse-menu-item>
                    <collapse-menu-item>
                        <div slot="tit">
                            <i class="h5 mdi mdi-account-outline"></i><span class="pl_n">分析</span>
                        </div>
                        <div class="px py" slot="cont"></div>
                    </collapse-menu-item>
                </collapse>
            </div>
        </div>
        <div class="content">

            <nav class="top fx-s">
                <div>
                    <p>功能 Tab</p>
                </div>
                <div>
                    <div class="fx-r">
                        <img class="user-face" src="https://img2.baidu.com/it/u=3474614069,3903854886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500">
                        <div class="user-name pl_n ttd">
                            vcrting@163.com
                        </div>
                    </div>
                </div>
            </nav>

            <div class="center">
                <nav class="py_x2 fx-s">
                    <h6 class="b ttd">主文字二</h6>
                    <div>
                        <button class="btn btn-pri py px_x3">新增订单</button>
                    </div>
                </nav>

                <div class="panel bxs_n px-0 py-0">
                    <nav class="input-icon-l input-sus">
                        <i class="mdi mdi-magnify h5"></i>
                        <input class="input" type="text" placeholder="Search">
                    </nav>
                </div>

                <nav class="panel bxs">
                    <h4>订单</h4>
                    <div class="fx-l">
                        <p class="tit">这里是主文字&nbsp;&nbsp;</p>
                        <p class="sub">这里是副文字&nbsp;&nbsp;</p>
                        <p class="sus">这里是白文字</p>
                    </div>
                    <div>
                        <input class="input" type="text" placeholder="Search">
                    </div>
                    <div>
                        <button class="btn-pri">主按钮</button>
                        <button class="btn-sec">副按钮</button>
                        <button class="btn-light">白按钮</button>
                        <div class="fx-l d-ib">
                            <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span>
                            <span class="pl_s">蛋糕已送达</span>
                        </div>
                        <button class="btn-pri btn-icon h3_son d-ib">
                            <i class="mdi mdi-content-copy"></i>
                        </button>
                        <span class="btn-succ">已更新</span>
                        <span class="sts-err">未支付</span>
                    </div>
                    <div class="fx-s pt">
                        <div class="w-50">
                            <nav class="fx-l">
                                <p>时间选择</p>
                                <div class="px_x pl_x2">
                                    <input class="input" type="text" placeholder="yyyy-MM-DD">  
                                </div>
                            </nav>
                        </div>
                        <div class=" w-50">
                            <nav class="fx-r">
                                <p>时间选择</p>
                                <div class="px_x pl_x2">
                                    <input class="input" type="text" placeholder="yyyy-MM-DD">  
                                </div>
                                <div>
                                    <button class="btn-pri btn-input">提交</button>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div class="panel-cont">
                        <p><span>定制蛋糕内热</span></p>
                        <div>
                            内容
                        </div>
                    </div>
                    <div class="panel-cont">
                        <div>
                            <p>内容</p>
                            <button class="btn-pri_out py_t px">定制订单</button>
                            <button class="btn-pri_out py_t px">
                                <i class="mdi mdi"></i>
                                快进</button>
                        </div>
                    </div>
                </nav>

                <div class="table">
                    <div class="tr">
                        <div class="w-14">单号</div>
                        <div class="w-16">订单日期</div>
                        <div class="w-18">送货时间</div>
                        <div class="w-30">地址备注</div>
                        <div class="w-15">订单状态</div>
                        <div class="w-12"></div>
                    </div>
                    <div class="item td">
                        <div class="w-14">单号</div>
                        <div class="w-16">订单日期</div>
                        <div class="w-18">送货时间</div>
                        <div class="w-30">地址备注</div>
                        <div class="w-15">
                            <select class="">
                                <option value="true">开放</option>
                                <option value="false">关闭</option>
                            </select>
                        </div>
                        <div class="w-12 fx-r pri_son">
                            <button>编辑</button>&nbsp;
                            <button>删除</button>
                        </div>
                    </div>
                </div>

                <div class="py_x2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Collapse from './collapse/Collapse.vue'
import CollapseItem from './collapse/default/CollapseItem.vue'
import CollapseMenuItem from './collapse/menu/CollapseMenuItem.vue'
export default {
  components: { Collapse, CollapseItem, CollapseMenuItem },
    
}
</script>