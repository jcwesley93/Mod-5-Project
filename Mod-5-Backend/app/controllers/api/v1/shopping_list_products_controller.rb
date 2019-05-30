class Api::V1::ShoppingListProductsController < ApplicationController

  
 

  def index 
    @shoppinglistproducts = ShoppingListProduct.all 
    render json: @shoppinglistproducts
  end

  def create
    @shoppinglistproduct = ShoppingListProduct.create(shopppinglistproduct_params)
    if @shoppinglistproduct.save
        render json: @shoppinglistproduct, status: :accepted 
    else 
        render json: { errors: @shoppinglistproduct.errors.full_messages}, status: :unprocessible_entity
    end
  end

  private 

  def shopppinglistproduct_params
    params.permit(:shopping_list_id, :product_id)
  end

  
end
