class AddModifiedUsernameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :modified_username, :string, null: false, uniqueness: true
  end
end
