class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :username
      t.string :password_digest
      t.string :avatar_image
      t.string :status
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.date :birthday
      t.string :favorite_beauty_brands
      t.timestamps
    end
  end
end
