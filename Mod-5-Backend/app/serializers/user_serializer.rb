class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :avatar_image, :status, :address, :city,
             :state, :zipcode, :birthday, :favorite_beauty_brands
  has_many :makeup_bags
  has_many :shopping_lists
end