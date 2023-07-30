const miAplicacion = Vue.createApp({
    components: {
        'fotos': componente1,
        'fixture': componente2,
        'staff': componente3,

    },
    data() {
        return {
            fotos_visible: false,
            fixture_visible: false,
            staff_visible: false,
        }
    },
    mounted() {
        this.fotos_visible = true
    },
    methods: {
        show(componente) {
            this.fotos_visible = false
            this.fixture_visible = false
            this.staff_visible = false
            console.clear()
            console.log(componente)
            if (componente == "fotos") {
                this.fotos_visible = true
            } else if (componente == "fixture") {
                this.fixture_visible = true
            } else if (componente == "staff") {
                this.staff_visible = true
            }
        }
    }
}).mount("#app")