class ImagesController < ApplicationController
  def index
    render json: Image.all
  end

  def show
    render json: {'show:': Image.find(params['id'])}
  end

  def delete
    render json: {'delete:': Image.find(params['id'])}
  end

  def create
    image = Image.new(image_params)
    user = User.find(params[:user_id])

    image.users << user

    if image.save
      render json: {
        images: user.images,
      }
    else
      render json: {
        images: user.images,
        errors: ['Invalid URL'],
      }
    end
  end

  def image_params
    params.permit(:url)
  end
end
