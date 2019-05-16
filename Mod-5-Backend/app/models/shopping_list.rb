class ShoppingList < ApplicationRecord
    has_many :shopping_list_products
    has_many :products, through: :shopping_list_products
    belongs_to :user
end
