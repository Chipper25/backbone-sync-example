DogShowView = Backbone.View.extend ( {

	template: _.template($('#dog-show-template').html()),

	events: {
		'click .destroy': 'destroy'
	},

	destroy: function (event) {
		if (window.confirm("do you really want to kill the dog?")) {
			this.model.destroy();		
		}
		event.preventDefault();	
	},

	render: function () {
		this.$el.html(this.template({dog: this.model.toJSON() }));
		return this.el;
	}

});