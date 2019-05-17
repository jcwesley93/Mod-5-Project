class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :user_id
  has_many :products
end
