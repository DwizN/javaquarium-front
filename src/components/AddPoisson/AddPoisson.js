export default {
    name: 'AddPoissons',
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
      addFish() {
          let request = {
              nom: this.form.nom,
              description: this.form.description,
              couleur: this.form.couleur,
              longueur: Number(this.form.longueur),
              largeur: Number(this.form.largeur),
              prix: Number(this.form.prix)
          }
          this.axios.post('http://localhost:8080/rest/bd/poisson/addPoisson', request)
  },

  reset() {
      this.form.nom = null,
      this.form.description = null,
      this.form.couleur = null,
      this.form.largeur = null,
      this.form.longueur = null,
      this.form.prix = null
  },

  swapComponent(component){
    this.$emit('swap-component', component)
  }
}
}