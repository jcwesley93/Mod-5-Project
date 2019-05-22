class Api::V1::ShoppingListProductsController < ApplicationController

  skip_before_action :authorized

  def index 
    @shoppinglistproducts = ShoppingListProduct.all 
    render json: @shoppinglistproducts
  end

  
end
