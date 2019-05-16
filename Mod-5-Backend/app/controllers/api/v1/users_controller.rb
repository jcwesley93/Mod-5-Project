class Api::V1::UsersController < ApplicationController

    def show
        # byebug
        @user = User.find(params[:id])
        render json: @user
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        if @user.save? 
            render json: :@user, status: :accepted
        else
            render json: {errors: @user.errors.full_messages}, status: :not_acceptable
        end
    end

    def create 
        @user = User.create(user_params)
        if @user.valid? 
            render json: { user: UserSerializer.new(@user)}, status: :created
        else
            render json: { errors: @user.errors.full_messages }, status: :not_acceptable
        end
    end

    
    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :username, :avatar_image, :status, :address, :city, :state, :zipcode, :birthday, :favorite_beauty_brands)
    end
end
