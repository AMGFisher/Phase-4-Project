class User < ApplicationRecord
has_secure_password

  has_many :posts
  has_many :comments
  has_many :comment_comments

  has_many :follows
  # Allows association to view list of users who follow a given user i.e. user.followers
  has_many :follower_relationships, foreign_key: :following_id, class_name: 'Follow'
  has_many :followers, through: :follower_relationships, source: :follower

  # Allows association to view list of users who follow a given user i.e. user.following
  has_many :following_relationships, foreign_key: :follower_id, class_name: 'Follow'
  has_many :following, through: :following_relationships, source: :following
end
