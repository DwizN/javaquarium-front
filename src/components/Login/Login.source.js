export default {
    name: 'Login',
    data () {
    return {
      test: null,
      form : {
          nom: null,
          description: null,
          couleur: null,
          longueur:null,
          largeur: null,
          prix: null
      }
    }
  },
  methods: {
      connect() {
          let loginRequestDTO = {
              identifiant: this.form.identifiant,
              password: this.form.password
          }
          this.axios.post('http://localhost:8080/rest/public/bd/login', loginRequestDTO).then(
              response => {
                  localStorage.setItem('auth', btoa(loginRequestDTO.identifiant + ":" + loginRequestDTO.password));
                  this.$emit('swap-component', 'Poissons')
                  this.test = response
              }, error => {
                  this.test = error
              }
          )
  }
}
}