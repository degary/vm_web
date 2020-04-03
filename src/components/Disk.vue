<template>
    <div class="container">
        <div class="row">
            <div class="panel panel-primary">
                 <!-- Default panel contents -->
                <h3 class="panel-heading">硬盘列表</h3>

                <!-- 循环生成列表 -->
                <table class="table table-striped table-hover">
                    <!-- 生成表头 -->
                    <thead>
                        <DiskHeader :headers='getHeaders'></DiskHeader>
                    </thead>
                    
                    <!-- 生成表数据 -->
                    <tbody>
                        <DiskForm v-for='(item,index) in getDiskForms.results' :forms='item' :key='index'></DiskForm>
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
    
</template>

<script>
import DiskHeader from './DiskHeader.vue'
import DiskForm from './DiskForm.vue'

export default {
    name:'Disk',
    data(){
        return {

        }
    },
    computed:{
        getHeaders(){
            return this.$store.state.diskSpaceHeader.data;
        },
        getDiskForms(){
            console.log('diskSpaceList',this.$store.state.diskSpaceList.data)
            //return this.$store.state.diskSpaceList.data.results;
            return this.$store.state.diskSpaceList.data;
        }
    },
    components:{
        DiskHeader,
        DiskForm
    }
}
</script>
<style scoped>

</style>