class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :user
      t.integer :score
      t.string :date

      t.timestamps
    end
  end
end
