class MoviesController < ApplicationController

	def show
		@movies = Movie.all
	end

	def search
		@movies = Movie.where('name like ?', "%"+params[:name]+"%")
		render "show"
	end

	def manage
		@movies = Movie.all
		render "manage"
	end
end
