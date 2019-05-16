class AddDontRebuyToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :dont_rebuy, :boolean, default: false
  end
end
