class UsersController < ApplicationController
  def create
    user = User.create(user_params)

    render json: {userId: user.id}
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
