class CreateMakeupBagProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :makeup_bag_products do |t|
      t.integer :makeup_bag_id
      t.integer :product_id
      t.timestamps
    end
  end
end
