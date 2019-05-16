class AddFavoriteToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :is_favorite, :boolean, default: false
  end
end
