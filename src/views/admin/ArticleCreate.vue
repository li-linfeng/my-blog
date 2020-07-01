<template>
<!--    class="box-shadow"-->
    <div class="box-shadow">
        <el-form class="login-form" >
            <el-form-item label="请输入标题" >
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="请选择分类">
                <el-select v-model="form.tags"   multiple   filterable   allow-create   placeholder="请选择">
                    <el-option v-for="item in tagsList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="editor-wapper ">
                <mavon-editor style="height:800px"
                              v-model="form.md_content"
                              ref="md" :toolbars="markdownOption"
                />
            </el-form-item>
            <div class="btn-wrap">
                <el-button @click="submit('1')">发布</el-button>
                <el-button @click="submit('0')">保存</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import {saveOrPublish} from "@/api/article.js";
    import {getTagsList} from "@/api/tags.js";

    export default {
        name: "ArticleCreate",
        components:{
        },
        data() {
            return {
                tagsList:[],
                form: {

                },
                markdownOption: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    // save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true // 预览
                },
                loading:false,
            }
        },
        computed: {

        },
        mounted() {
            this.getTags();
            window.console.log( this.tagsList)
        },
        methods: {
            submit(status){
                let params = {
                    title: this.form.title,
                    description: this.form.description,
                    md_content: this.form.md_content,
                    html_content: this.$refs.md.d_render,
                    tags: this.form.tags,
                    status: status,
                };
                saveOrPublish(params).then(()=>{
                    this.$router.push();
                });
            },
            getTags(){
                let params = {
                    page: 1,
                    per_page: 200
                };
                this.loading = true;
                getTagsList(params).then(res => {
                    this.tagsList = res.data.data.data;
                });
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