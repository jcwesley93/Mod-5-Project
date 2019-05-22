class Api::V1::MakeupBagProductsController < ApplicationController
  skip_before_action :authorized
  def index 
    @makeupbagproducts = MakeupBagProduct.all
    render json: @makeupbagproducts
  end
  
end
