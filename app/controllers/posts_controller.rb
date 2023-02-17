class PostsController < ApplicationController
    skip_before_action :authorize, only: :index

    

    def index
        posts = Post.all.order(created_at: :desc)
        render json: posts
    end

    def personal
        
        feed = Post.all.where(user: @current_user)
        
        render json: feed
    
    end

    def feed
        feed = Post.all.order(created_at: :desc).filter { |post| @current_user.following_ids.include?(post.user.id) }

        render json: feed
    end



    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post ,status: :created
    end

    def update
        post = Post.find_by(id: params[:id])
        post.update(post_params)
        render json: post
      end

    private

    def post_params
        params.permit(:image, :caption, :likes, :dislikes)
    end






    # def create
    #     post = @current_user.posts.create!(post_params)
    #     render json: post, status: :created
    # end

    # private post_params
    # params.permit()
    # end

end
