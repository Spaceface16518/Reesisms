<template>
    <div id="app">
				<aside>
					<Announcement short="Reesisms is getting a major update!" long="Reesisms will be moving to reesisms.com, getting a snazzy new look, and a lot of internal changes. Stay tuned!" />
				</aside>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/submit">Submit A Quote</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
		import Announcement from '@/components/Announcement';

    export default {
        name: 'app',
				components: {Announcement}
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }

    nav > * {
        padding: 0.5em;
        /*margin: 0.8em 1em;*/
    }

    nav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
