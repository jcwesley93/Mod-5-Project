class ShoppingList < ApplicationRecord
    has_many :products_shopping_lists
    has_many :products, through: :products_shopping_lists
    belongs_to :user
end
