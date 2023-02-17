class FollowSerializer < ActiveModel::Serializer
  attributes :id, :follower_id, :following_id, :posts

  def posts
  self.object.following.posts
  end

end
