<template>
    <div class="article">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
<!--        <el-form class="login-form" >-->
<!--            <el-form-item label="飒飒的">-->
<!--                <el-input v-model="form.title"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="请输入简介">-->
<!--                <el-input v-model="form.description" type="textarea"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="请选择分类">-->
<!--                <el-select v-model="form.tags" multiple filterable allow-create placeholder="请选择">-->
<!--                    <el-option v-for="item in tagsList" :key="item.id" :label="item.name" :value="item.id"></el-option>-->
<!--                </el-select>-->
<!--            </el-form-item>-->

                <mavon-editor style="height:800px" />

<!--                        v-model="form.md_content"-->
<!--                        ref="md"-->
<!--                        :toolbars="markdownOption"-->

<!--            <div class="btn-wrap">-->
<!--&lt;!&ndash;                <el-button @click="submit('publish')" :loading="publishLoading">发布</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                <el-button @click="submit('save')" :loading="saveLoading">保存</el-button>&ndash;&gt;-->
<!--            </div>-->
<!--        </el-form>-->
    </div>
</template>
<script>
    // import { mapState, mapGetters } from "vuex";
    // import { saveOrPublish } from "@/api/article";
    // import { getTagsList } from "@/api/tags";
    // import { uploadImg } from "@/api/base";

    export default {
        data() {
            return {
                form:{
                    name:'jack'
                },
            }
        }
    }

</script>
<style lang="less">
    .article {
        @media (max-width: 767px) {
            margin: 0 20px;
        }
        .btn-wrap {
            display: flex;
            justify-content: space-around;
        }
        .editor-wapper {
            .el-form-item__content {
                margin-left: 20px !important;
                @media (max-width: 767px) {
                    margin: 0 !important;
                }
            }
        }
    }
</style>