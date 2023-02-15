class PostsController < ApplicationController
    skip_before_action :authorize, only: :index

    

    def index
        posts = Post.all
        render json: posts
    end

    def feed
        
        followee = @current_user.following.all.map do |t|
        byebug
        end
        render json: followee
    
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
