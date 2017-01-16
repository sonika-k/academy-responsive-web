var app = new Vue ({
  el: '.content',

  data: {
    movies: []
  },

  created: function() {
    this.fetchData();
  },

  methods: {
    fetchData: function() {
      var self = this;
      var list = '/api/';

      fetch(list).then(function(response) {
        return response.json();
      }).then(function(json) {
        self.movies = json.movies;
      });
    }
  }
})
