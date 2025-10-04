<script setup></script>

<template>
    <header class="header">
        <h1 class="title">Notes Page</h1>
        <nav>
            <ul class="nav-list">
                <li>
                    <RouterLink class="link" to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" to="/notes">Notes</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.header{
    background-color: #000022;
    color: white;
    padding: 30px;
    text-align: center;

    .title{
        margin: 0;
    }

    .nav-list{
        display: flex;
        justify-content: space-around;

        .link{
            color: white;
            text-decoration: none;
        }
    }
}
</style>