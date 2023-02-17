class UsersController < ApplicationController
  skip_before_action :authorize, only: :create


    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def me
        user = User.find_by(id: session[:user_id])
        render json: user
      end

      def following
        following = @current_user.following.all
        render json: following
      end

      def followers
        followers = @current_user.followers.all
        render json: followers
      end

      def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.permit(:first_name, :last_name, :email, :handle, :password, :password_confirmation, :avatar)
      end

end
