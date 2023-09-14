<template>
<h1>{{title}}</h1>

<div>
    <slot name="header">
       
    </slot>
</div>
</template>

<script>
export default{
    name:'PageComponent',
    props:['title']
}

</script>