<template>
    <footer class="footer">
        <p class="footer-title">
            © «Курсы валют»
        </p>
    </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid var(--gray);
    margin-top: auto;

    .footer-title {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
    }
}
</style>
