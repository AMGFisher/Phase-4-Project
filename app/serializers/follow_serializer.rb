class FollowSerializer < ActiveModel::Serializer
  attributes :id, :follower_id, :following_id, :posts

  def posts
    
  self.object.following.posts.map do |t|
    t
    end

  end

end
