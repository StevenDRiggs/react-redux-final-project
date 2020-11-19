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

  def image_params

  end
end
