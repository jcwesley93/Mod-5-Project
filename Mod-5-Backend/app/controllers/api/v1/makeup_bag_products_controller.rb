class Api::V1::MakeupBagProductsController < ApplicationController
 
  def index 
    @makeupbagproducts = MakeupBagProduct.all
    render json: @makeupbagproducts
  end

  def create
    @makeupbagproduct = MakeupBagProduct.create(makeupbagproduct_params)
    if @makeupbagproduct.save
        render json: @makeupbagproduct, status: :accepted 
    else 
        render json: { errors: @makeupbagproduct.errors.full_messages}, status: :unprocessible_entity
    end
  end

  private

  def makeupbagproduct_params
    params.permit(:makeup_bag_id, :product_id)
  end


  
end
