class ShoppingListProduct < ApplicationRecord
    belongs_to :product
    belongs_to :shopping_list
end
