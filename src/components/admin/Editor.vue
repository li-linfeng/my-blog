<template>
    <div id="editor" style="max-width:1300px;min-height: 600px;" >
        <mavon-editor :ishljs = "true"  ref="editor"></mavon-editor>
    </div>
</template>

<script>
    export default {
        name: "Editor",
        data() {
            return {
                html:this.$refs.editor.d_render,
                markdown:this.$refs.editor.d_value,
            }
        }
    }
</script>