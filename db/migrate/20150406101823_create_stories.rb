class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.json :details, null: false
      t.json :analysis
      t.binary :text
      t.timestamps null: false
    end
  end
end
