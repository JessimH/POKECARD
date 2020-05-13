const vm = new Vue({
    el: '#app',
    created() {
        this.import()
    },

    data: {
        cards: [],
        inputSearch: '',
        newCards: [],
    },

    methods: {
        import () {
            fetch(`https://api.pokemontcg.io/v1/cards?name=`)
                .then((response) => response.json())
                .then(json => {
                    this.cards = json
                })
                .catch(error => console.error(error))
        },

        search: function(event) {

            let inputElement = document.querySelector('#inputValue');
            event.preventDefault();
            let value = inputElement.value;

            fetch(`https://api.pokemontcg.io/v1/cards?name=${value}`)
                .then((response) => response.json())
                .then(json => {
                    this.newCards = json
                })
                .catch(error => console.error(error))

            inputElement.value = '';

        }

    }
});