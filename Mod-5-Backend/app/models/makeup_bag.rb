class MakeupBag < ApplicationRecord
    has_many :makeup_bags_products
    has_many :products, through: :makeup_bags_products
    belongs_to :user
end
