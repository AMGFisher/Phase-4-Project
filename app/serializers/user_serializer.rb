class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :handle, :password_digest

  has_many :posts

  has_many :following

  has_many :followers

end
