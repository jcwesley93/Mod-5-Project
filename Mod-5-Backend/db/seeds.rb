# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
##### USERS ####
jaela = User.create(name: "Jaela Wesley", email: "jaela.test", username: "jaelaW", password: "12345", avatar_image: Faker::LoremPixel.image("50x60"), status: Faker::Lorem.sentence(5), birthday: "01/01/0000", favorite_beauty_brands: Faker::Lorem.paragraph)

jasmine = User.create(name: "jasmine Wesley", email: "jasmine.test", username: "jasmineW", password: "12345", avatar_image: Faker::LoremPixel.image("50x60"), status: Faker::Lorem.sentence(5), birthday: "01/01/0000", favorite_beauty_brands: Faker::Lorem.paragraph)

nyiah = User.create(name: "Nyiah Lance", email: "nyiah.test", username: "nyiahL", password: "12345", avatar_image: Faker::LoremPixel.image("50x60"), status: Faker::Lorem.sentence(5), birthday: "01/01/0000", favorite_beauty_brands: Faker::Lorem.paragraph)

carter = User.create(name: "Carter Lance", email: "carter.test", username: "carterL", password: "12345", avatar_image: Faker::LoremPixel.image("50x60"), status: Faker::Lorem.sentence(5), birthday: "01/01/0000", favorite_beauty_brands: Faker::Lorem.paragraph)

#### Makeup Bags ####

makeupbagone = MakeupBag.create(name: "Makeup Bag One", description: Faker::Lorem.sentence(5), user_id: jaela.id)

makeupbagtwo = MakeupBag.create(name: "Makeup Bag Two", description: Faker::Lorem.sentence(5), user_id: jasmine.id)

makeupbagthree = MakeupBag.create(name: "Makeup Bag Three", description: Faker::Lorem.sentence(5), user_id: nyiah.id)

makeupbagfour = MakeupBag.create(name: "Makeup Bag Four", description: Faker::Lorem.sentence(5), user_id: carter.id)

#### Shopping Lists ####

shoppinglistone = ShoppingList.create(name: "Shopping List One", description: Faker::Lorem.sentence(5), user_id: jaela.id)

shoppinglisttwo = ShoppingList.create(name: "Shopping List Two", description: Faker::Lorem.sentence(5), user_id: jasmine.id)

shoppinglistthree = ShoppingList.create(name: "Shopping List Three", description: Faker::Lorem.sentence(5), user_id: nyiah.id)

shoppinglistfour = ShoppingList.create(name: "Shopping List Four", description: Faker::Lorem.sentence(5), user_id: carter.id)

#### Products #### 

productone = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Face", image:Faker::LoremFlickr.image("200x200"))

producttwo = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Eye", image:Faker::LoremFlickr.image("200x200"))

productthree = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Lip", image:Faker::LoremFlickr.image("200x200"))

productfour = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Cheek", image:Faker::LoremFlickr.image("200x200"))

productfive = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Lip", image:Faker::LoremFlickr.image("200x200"))

productsix = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Face", image:Faker::LoremFlickr.image("200x200"))

productseven = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Eye", image:Faker::LoremFlickr.image("200x200"))

producteight = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Cheek", image:Faker::LoremFlickr.image("200x200"))

productnine = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Lip", image:Faker::LoremFlickr.image("200x200"))

productten = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Face", image:Faker::LoremFlickr.image("200x200"))

producteleven = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Eye", image:Faker::LoremFlickr.image("200x200"))

producttwelve = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Cheek", image:Faker::LoremFlickr.image("200x200"))

productthirteen = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Lip", image:Faker::LoremFlickr.image("200x200"))

productfourteen = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Face", image:Faker::LoremFlickr.image("200x200"))

productfifteen = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Eye", image:Faker::LoremFlickr.image("200x200"))

productsixteen = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Lip", image:Faker::LoremFlickr.image("200x200"))

productseventeen = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Cheek", image:Faker::LoremFlickr.image("200x200"))

producteighteen = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Face", image:Faker::LoremFlickr.image("200x200"))

productnineteen = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Eye", image:Faker::LoremFlickr.image("200x200"))

producttwenty = Product.create(name: Faker::Cannabis.strain, description: Faker::Lorem.sentence(5), brand: Faker::Lorem.word, price: rand(1..40), sold_at: Faker::Lorem.word, quantity: rand(1..5), need_to_rebuy: Faker::Boolean.boolean, is_favorite: Faker::Boolean.boolean, dont_rebuy: Faker::Boolean.boolean, category: "Cheek", image:Faker::LoremFlickr.image("200x200"))


#### MAKEUP BAGS & PRODUCTS JOIN TABLE ####
10.times do
    MakeupBagProduct.create(makeup_bag_id: rand(1..4), product_id: rand(1..20))
end

#### SHOPPING LISTS & PRODUCTS JOIN TABLE ####
10.times do
    ShoppingListProduct.create(shopping_list_id: rand(1..4), product_id: rand(1..20))
end









puts "All done!"