class CreateStoryUsers < ActiveRecord::Migration
  def change
    create_table :story_users do |t|
      t.belongs_to :story, null: false
      t.belongs_to :user, null: false
      t.float :interest, null: false
      t.timestamps null: false
    end
    add_index :story_users, :story_id
    add_index :story_users, :user_id
  end
end
