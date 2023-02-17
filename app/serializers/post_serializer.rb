class PostSerializer < ActiveModel::Serializer
  attributes :follower_id, :id, :image, :caption, :likes, :dislikes
  has_one :user
  has_many :comments

  def follower_id
  
  end

end
