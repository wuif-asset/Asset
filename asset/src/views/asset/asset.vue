<template>
    <div>
        <el-table
                :data="table"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" class="demo-table-expand">
                        <el-form-item label="关联资产类别id">
                            <span>{{ props.row.aid }}</span>
                        </el-form-item>
                        <el-form-item label="关联标准型号id">
                            <span>{{ props.row.mid }}</span>
                        </el-form-item>
                        <el-form-item label="来源">
                            <span>{{ props.row.source }}</span>
                        </el-form-item>
                        <el-form-item label="所属公司">
                            <span>{{ props.row.acompany }}</span>
                        </el-form-item>
                        <el-form-item label="使用公司">
                            <span>{{ props.row.ucompany }}</span>
                        </el-form-item>
                        <el-form-item label="金额">
                            <span>{{ props.row.eprice }}</span>
                        </el-form-item>
                        <el-form-item label="ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="使用部门">
                            <span>{{ props.row.department }}</span>
                        </el-form-item>
                        <el-form-item label="员工关联ID">
                            <span>{{ props.row.uid }}</span>
                        </el-form-item>
                        <el-form-item label="使用年限">
                            <span>{{ props.row.useyears }}</span>
                        </el-form-item>
                        <el-form-item label="使用区域">
                            <span>{{ props.row.region }}</span>
                        </el-form-item>
                        <el-form-item label="存放地点">
                            <span>{{ props.row.deposit }}</span>
                        </el-form-item>
                        <el-form-item label="备注">
                            <span>{{ props.row.remarks }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    prop="eid"
                    label="eid"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="ename"
                    label="资产名称">
            </el-table-column>
            <el-table-column
                    prop="barcode"
                    label="资产条码">
            </el-table-column>
            <el-table-column
                    prop="esizes"
                    label="规格型号">
            </el-table-column>
            <el-table-column
                    prop="euom"
                    label="计量单位">
            </el-table-column>
            <el-table-column
                    prop="sn"
                    label="SN号">
            </el-table-column>
            <el-table-column
                    label="资产图片">
                <template slot-scope="scope">
                    <img :src="scope.row.thumb" alt="" width="100">
                </template>
            </el-table-column>
            <el-table-column
                    prop="ptime"
                    label="购入时间">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentpage"
                :page-sizes="pagesizes"
                :page-size="limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="count">
        </el-pagination>
    </div>
</template>

<script>

    import Asset from '../../api/asset';

    const {query} = Asset;
    export default {
        name: "assetquery",
        data() {
            return {
                table: [],
                isShow: true,
                count: 0,
                limit: 5,
                pagesizes: [5, 8, 10],
                currentpage: 1
            }
        },
        methods: {
            getTable() {
                this.queryData()
            },
            queryData() {
                let limit = this.limit;
                let page = this.currentpage;
                query({limit, page}).then(res => {
                    this.isShow = false;
                    if (res.data.code == 0 && res.data.data.length) {
                        this.count = res.data.count;
                        this.table = res.data.data;
                    }
                })
            },
            handleSizeChange(val) {
                this.limit = val
            },
            handleCurrentChange(val) {
                this.currentpage = val;
            }
        },
        beforeMount() {
            this.getTable();
        },
        watch: {
            limit() {
                this.queryData()
            },
            currentpage() {
                this.queryData()
            }
        }
    }
</script>

<style scoped>

</style>
