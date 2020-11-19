class Image < ApplicationRecord
  has_many :images_users
  has_many :users, through: :images_users
end
