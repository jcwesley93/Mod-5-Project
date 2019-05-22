class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    has_many :shopping_lists
    has_many :makeup_bags
    has_many :products, through: :makeup_bags
    has_many :products, through: :shopping_lists
end
