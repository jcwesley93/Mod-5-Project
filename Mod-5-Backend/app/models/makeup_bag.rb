class MakeupBag < ApplicationRecord
    has_many :makeup_bag_products
    has_many :products, through: :makeup_bag_products
    belongs_to :user
end
