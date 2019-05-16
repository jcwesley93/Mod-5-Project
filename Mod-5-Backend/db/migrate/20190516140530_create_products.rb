class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :brand
      t.float :float
      t.string :sold_at
      t.integer :quantity
      t.timestamps
    end
  end
end
