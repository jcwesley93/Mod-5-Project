class CreateShoppingListProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_list_products do |t|
      t.integer :shopping_list_id
      t.integer :product_id
      t.timestamps
    end
  end
end
