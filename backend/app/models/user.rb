class User < ApplicationRecord
  has_secure_password
  
  has_many :images_users
  has_many :images, through: :images_users

  validates :modified_username, uniqueness: true
  

  def username=(username)
    self.modified_username = username.downcase.strip
  end

  def username
    self.modified_username
  end
end
