class Api::V1::MakeupBagsController < ApplicationController

    before_action :find_makeup_bag, only: [:update, :show, @delete]
    skip_before_action :authorized
    
    
    def index 
      @makeupbags = MakeupBag.all
      render json: @makeupbags
    end

    def show
        render json: @makeupbag
    end

    def create 
        @makeupbag = MakeupBag.create(makeupbag_params)
        if @makeupbag.save
            render json: @makeupbag, status: :accepted
        else
            render json: {errors: @makeupbag.errors.full_messages}, status: :unprocessible_entity
        end
    end

    def update
        @makeupbag.update(makeupbag_params)
        if @makeupbag.save
            render json: @makeupbag, status: :accepted
        else
            render json: {errors: @makeupbag.errors.full_messages}, status: :unprocessible_entity
        end
    end

    def delete 
        #how do you do this one? 
    end

    private
    def makeupbag_params
        params.permit(:name, :description)
    end

    def find_makeup_bag
        @makeupbag = MakeupBag.find(params[:id])
    end



end
