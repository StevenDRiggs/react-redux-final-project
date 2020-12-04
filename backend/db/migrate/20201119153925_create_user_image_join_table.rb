class CreateUserImageJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :images do |t|
      t.index :user_id
    end
  end
end
