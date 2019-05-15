class UserSerializer < ActiveModel::Serializer
  attributes :name, :email, :username, :avatar_image, :status, :address, :city,
             :state, :zipcode, :birthday, :favorite_beauty_brands
end