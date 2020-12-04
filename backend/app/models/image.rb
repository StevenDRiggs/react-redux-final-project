class Image < ApplicationRecord
  has_many :images_users
  has_many :users, through: :images_users

  validates :url, format: {
    with: /https?:\/\/(www\.)?\w+\.\w{2,}(\/\w*)*/,
  }
end
