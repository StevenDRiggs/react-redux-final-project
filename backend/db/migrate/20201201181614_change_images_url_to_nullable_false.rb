class ChangeImagesUrlToNullableFalse < ActiveRecord::Migration[6.0]
  def change
    change_column_null :images, :url, false
  end
end
