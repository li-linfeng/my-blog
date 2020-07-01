<template>
    <div class="box-shadow">

        <router-link :to="{name:'article-create'}" class="btn" rel="contents">
            <el-button
                    size="mini"
                    type="success"
            >创建文章</el-button>
        </router-link>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    align="center">
            </el-table-column>
            <el-table-column label="操作"  align="center">
                <template slot-scope="scope" >
                    <router-link :to="{name:'tags'}" class="btn" rel="contents">
                        <el-button
                            size="mini"
                            type="success"
                           >编辑</el-button>
                    </router-link>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <ThePaginator />
    </div>

</template>

<script>
    import ThePaginator from '@/components/ThePaginator.vue'
    export default {
        name: "Article",
        components:{
            ThePaginator,
        },
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        computed: {
            // compiledMarkdown: function () {
            //     return marked(this.input, { sanitize: true })
            // }
        },
        methods: {
            handleDelete() {

            }
        }
    }
</script>

<style scoped>

    textarea, #editor div {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }

    textarea {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
    }

    code {
        color: #f66;
    }
    .paginator{
        margin-bottom: 0px;
    }
</style>