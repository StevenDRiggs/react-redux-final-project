class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    user.avatar = "https://picsum.photos/50"
    
    if user.save
      render json: {
        userId: user.id,
        avatarUrl: user.avatar,
        username: user.username,
      }
    else
      render json: {
        errors: user.errors.full_messages,
      }
    end
  end

  def login
    user = User.find_by(modified_username: user_params[:username].downcase.strip)
    user_valid = user ? user.authenticate(user_params[:password]) : false

    if user_valid
      render json: {
        userId: user.id,
        avatarUrl: user.avatar,
        username: user.username,
      }
    elsif user
      render json: {
        errors: user.errors.full_messages,
      }
    else
      render json: {
        errors: ['User not found']
      }
    end
  end

  def show_images
    render json: User.find(params[:user_id]).images
  end

  private
    def user_params
      params.require(:user).permit(:username, :password, :avatar)
    end
end
