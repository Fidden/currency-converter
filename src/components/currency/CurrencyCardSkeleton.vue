<template>
    <div
        class="currency-card">
        <div class="title"/>
        <div class="change-container">
            <div class="form"/>
            <div class="separate"/>
            <div class="to"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.currency-card {
    display: flex;
    flex-direction: column;
    border: 1px solid $gray;
    border-radius: 6px;
    padding: 20px;
    text-decoration: none;
    color: black;
    transition: 0.2s;

    .title {
        display: flex;
        flex-direction: column;
        height: 12px;
        animation: pulse-bg 1s infinite;
        opacity: 0.2;
        margin-bottom: 20px;
    }

    .name {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        text-align: center;
        margin-bottom: 7px;
    }

    .form, .to {
        display: flex;
        flex-direction: row;
        height: 20px;
        width: 70%;
        animation: pulse-bg 1s infinite;
        opacity: 0.2;
        margin-bottom: 10px;
        border-radius: 6px;
    }

    .to {
        margin: 10px 0 0 0;
    }

    .change-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: auto;
    }

    .separate {
        width: 100%;
        height: 1px;
        background: $gray;
        margin: 5px 0;
    }
}

@keyframes pulse-bg {
    0% {
        background-color: $gray;
    }
    50% {
        background-color: #b4b4b4;
    }
    100% {
        background-color: $gray;
    }
}
</style>
