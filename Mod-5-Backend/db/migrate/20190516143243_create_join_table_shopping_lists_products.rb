class CreateJoinTableShoppingListsProducts < ActiveRecord::Migration[5.2]
  def change
    create_join_table :shopping_lists, :products do |t|
      t.index [:shopping_list_id, :product_id], :name => 'shopping_list_product_index'
      t.index [:product_id, :shopping_list_id], :name => 'product_shopping_list_index'
    end
  end
end
