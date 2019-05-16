class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :brand, :float, :sold_at, :quantity,
             :need_to_rebuy, :is_favorite, :dont_rebuy
  has_many :makeup_bags
  has_many :shopping_lists

end
