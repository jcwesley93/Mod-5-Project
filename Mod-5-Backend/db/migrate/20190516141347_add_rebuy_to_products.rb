class AddRebuyToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :need_to_rebuy, :boolean, default: false
  end
end
