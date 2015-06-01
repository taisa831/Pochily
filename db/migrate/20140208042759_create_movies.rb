class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :name
      t.string :tags
      t.string :amazon
      t.string :monipla
      t.string :youtube

      t.timestamps
    end
  end
end
