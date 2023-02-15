class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    # def create
    #     post = @current_user.posts.create!(post_params)
    #     render json: post, status: :created
    # end

    # private post_params
    # params.permit()
    # end

end
