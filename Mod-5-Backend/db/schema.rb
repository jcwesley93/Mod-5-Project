# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_16_143243) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "makeup_bags", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "makeup_bags_products", id: false, force: :cascade do |t|
    t.bigint "makeup_bag_id", null: false
    t.bigint "product_id", null: false
    t.index ["makeup_bag_id", "product_id"], name: "index_makeup_bags_products_on_makeup_bag_id_and_product_id"
    t.index ["product_id", "makeup_bag_id"], name: "index_makeup_bags_products_on_product_id_and_makeup_bag_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "brand"
    t.float "float"
    t.string "sold_at"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "need_to_rebuy", default: false
    t.boolean "is_favorite", default: false
    t.boolean "dont_rebuy", default: false
  end

  create_table "products_shopping_lists", id: false, force: :cascade do |t|
    t.bigint "shopping_list_id", null: false
    t.bigint "product_id", null: false
    t.index ["product_id", "shopping_list_id"], name: "product_shopping_list_index"
    t.index ["shopping_list_id", "product_id"], name: "shopping_list_product_index"
  end

  create_table "shopping_lists", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.string "avatar_image"
    t.string "status"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.date "birthday"
    t.string "favorite_beauty_brands"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
