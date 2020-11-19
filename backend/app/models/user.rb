class User < ApplicationRecord
  has_secure_password
  
  has_many :images_users
  has_many :images, through: :images_users
end
