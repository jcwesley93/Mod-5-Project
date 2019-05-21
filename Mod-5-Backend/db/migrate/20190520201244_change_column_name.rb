class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :float, :price
  end
end
