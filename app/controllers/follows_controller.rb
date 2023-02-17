class FollowsController < ApplicationController


    def index
        following = Follow.where(follower_id: @current_user.id)

        render json: following
    end

    def show
        follow = Follow.find(params[:id])
        render json: follow
    end

end

