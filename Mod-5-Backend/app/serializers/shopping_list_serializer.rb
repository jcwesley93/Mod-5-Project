class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at
  has_many :products
end
