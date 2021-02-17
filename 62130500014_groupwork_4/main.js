const app = {
    data() {
        return {
            tasks: [{
                    profile: 'images/profile.jpg',
                    userName: 'Jakkapong Praditthanachot',
                    description: 'preview',
                    img: 'images/preview.jpg',
                    heart: false,
                }, {

                    profile: 'https://images.unsplash.com/profile-1599498849251-35d2045d15d5image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Daniele Colucci',
                    description: 'Wadi Rum Village, Giordania',
                    img: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                },
                {
                    profile: 'https://images.unsplash.com/profile-1568157934859-378fb07773c8image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Giancarlo Corti',
                    description: 'Building, Office Building, Architecture ',
                    img: 'https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                    heart: false,
                },
                {
                    profile: 'https://images.unsplash.com/profile-1536187323066-07c679d77285?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Cristina Anne Costello',
                    description: 'Building, Office Building, Architecture ',
                    img: 'https://images.unsplash.com/photo-1606240639706-dbd343433c32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                    heart: false,
                },
                {
                    profile: 'https://images.unsplash.com/profile-1610926087590-3403d9b90281image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'CURTIS HYSTAD',
                    description: 'BCA-1, Santa Cruz, United States',
                    img: 'https://images.unsplash.com/photo-1610925699730-6ee9612c557c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                },
                {
                    profile: 'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
                    userName: 'Surface',
                    description: '',
                    img: 'https://images.unsplash.com/photo-1612832164065-fc35ded2a291?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    heart: false,
                }
            ],
            form: {
                text: "",
                search: false,
            },
        }
    },
    methods: {
        liked(index) {
            this.tasks[index].heart = !this.tasks[index].heart;
        },
        search() {
            this.form.search = !this.form.search;
        },
    },
    computed: {
        countLike() {
            return this.tasks.filter(t => t.heart).length;
        },
        searchlist() {
            return this.tasks.filter((member) => {
                return member.description.toLowerCase().includes(this.form.text.toLowerCase()) +
                    member.userName.toLowerCase().includes(this.form.text.toLowerCase())
            });
        }
    }

}
Vue.createApp(app).mount('#app')