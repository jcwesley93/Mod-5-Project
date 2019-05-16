class CreateJoinTableMakeupBagsProducts < ActiveRecord::Migration[5.2]
  def change
    create_join_table :makeup_bags, :products do |t|
      t.index [:makeup_bag_id, :product_id]
      t.index [:product_id, :makeup_bag_id]
    end
  end
end
