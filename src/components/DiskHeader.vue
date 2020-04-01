<template>
    <tr>
        <th>{{headers.id}}</th>
        <th>{{headers.disk_name}}</th>
        <th>{{headers.disk_space}}</th>
        <th>{{headers.disk_free_space}}</th>
        <th>{{headers.disk_mount}}</th>
    </tr>
</template>
<script>
export default {
    name:'DiskHeader',
    data(){
        return {

        }
    },
    props:{
        headers:Object
    }
}
</script>
<style scoped>

</style>