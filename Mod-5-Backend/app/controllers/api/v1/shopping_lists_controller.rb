class Api::V1::ShoppingListsController < ApplicationController

    before_action :find_shopping_list, only: [:show, :update, :delete]

    def index 
        @shoppinglists = ShoppingList.all
        render json: @shoppinglists
    end

    def show 
        render json: @shoppinglist
    end

    def create 
        @shoppinglist = ShoppingList.create(shopping_list_params)
        if @shoppinglist.save
            render json: @shoppinglist, status: :accepted 
        else 
            render json: { errors: @shoppinglist.errors.full_messages}, status: :unprocessible_entity
        end
    end

    def update
        @shoppinglist.update(shopping_list_params)
        if @shoppinglist.save
            render json: @shoppinglist, status: :accepted 
        else 
            render json: { errors: @shoppinglist.errors.full_messages}, status: :unprocessible_entity
        end
    end

    def delete
        #how do you do this? 
    end




    private 

    def find_shopping_list
        @shoppinglist = ShoppingList.find(params[:id])
    end

    def shopping_list_params
        params.permit(:name, :description)
    end


end
