class Product < ApplicationRecord
    has_many :makeup_bag_products
    has_many :makeup_bags, through: :makeup_bag_products
    has_many :shopping_list_products
    has_many :shopping_lists, through: :shopping_list_products
end
