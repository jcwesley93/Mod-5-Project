class Api::V1::UsersController < ApplicationController
    # skip_before_action  :authorized, only: [:create, :show]
    
    def show
        @user = User.find(params[:id])
        render json: @user, include: "**"
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
            @token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), jwt: @token}, status: :created
        else
            render json: { errors: @user.errors.full_messages }, status: :not_acceptable
        end
    end

    
    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :username, :avatar_image, :status, :address, :city, :state, :zipcode, :birthday, :favorite_beauty_brands)
    end
end
