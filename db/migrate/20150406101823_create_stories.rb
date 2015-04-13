class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.jsonb :details, null: false
      t.jsonb :analysis
      t.text :text
      t.uuid :semantria_id
      t.timestamps null: false
    end
  end
end
