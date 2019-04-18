<template>
<!--    <div class="box">-->

    <el-container>
        <el-header>
            <a href="" class="logo"><img src="./img/logo.png" alt=""></a>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router=true>
                <el-menu-item>
                    <el-dropdown>
                          <span class="el-dropdown-link">
                            设置<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>
                <el-menu-item>
                    <el-dropdown>
                          <span class="el-dropdown-link">
                            通知<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>
                <el-menu-item>
                    <el-dropdown>
                          <span class="el-dropdown-link">
                            购买/升级<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>

                <el-menu-item>
                    <el-dropdown>
                          <span class="el-dropdown-link">
                            咨询 & 帮助<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col >
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                                :router=true
                        >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span>用户管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/main/admin">查看用户</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>员工管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">添加员工</el-menu-item>
                                    <el-menu-item index="1-2">查看员工</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>资产分类</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/main/assetsclass">查看分类</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>来源分类</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">添加来源</el-menu-item>
                                    <el-menu-item index="1-2">查看来源</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="5">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>新增标准资产型号</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">添加资产型号</el-menu-item>
                                    <el-menu-item index="1-2">查看资产型号</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="6">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>资产入库</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/main/assetinsert">添加资产</el-menu-item>
                                    <el-menu-item index="/main/asset">查看资产</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
<!--    </div>-->
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>

<style>
    .logo{
        display: inline-block;
    }
    .logo img{
        width: 140px;
    }
    .el-container{
        width: 100%;
        height: 100%;
    }
    .el-header{
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .el-menu--horizontal {
        border-bottom: 0;
    }
    .el-footer{
        background: #ecf0f5;
        padding: 10px 15px;
        font-size: 11px;
        color: #555;
    }
</style>