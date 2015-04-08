class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.json :details, null: false
      t.binary :content
      t.timestamps null: false
    end
  end
end
