class Product < ApplicationRecord
    has_many :makeup_bags_products
    has_many :makeup_bags, through: :makeup_bags_products
    has_many :products_shopping_lists
    has_many :shopping_lists, through: :products_shopping_lists
end
