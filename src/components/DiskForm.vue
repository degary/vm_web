<template>
    <tr>
        <th>{{forms.id}}</th>
        <td>{{forms.disk_name}}</td>
        <td>{{forms.disk_free_space}}</td>
        <td>{{forms.disk_mount}}</td>
    </tr>
</template>
<script>
export default {
    name:'DiskForm',
    data(){
        return {

        }
    },
    props:{
        forms:Object
    }
}
</script>
<style scoped>

</style>