class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    user.avatar = "https://picsum.photos/100"
    
    if user.save
      render json: {
        userId: user.id,
        avatarUrl: user.avatar,
        username: user.username,
      }
    else
      render json: {
        username: user.username,
        errors: user.errors.full_messages,
      }
    end
  end

  def login
    user = User.find_by(username: user_params[:username])
    user_valid = user ? user.authenticate(user_params[:password]) : false
    user_id = user_valid ? user.id : nil

    render json: {userId: user_id}
  end

  private
    def user_params
      params.require(:user).permit(:username, :password, :avatar)
    end
end
