class Api::V1::AuthController < ApplicationController
    # skip_before_action :authorized, only: [:create]

    def create 
        @user = User.find_by(username: auth_params[:username])
        if @user && @user.authenticate(auth_params[:password])
            token = encode_token({user_id: @user.id})
            render json: { user: UserSerializer.new(@user), jwt: token}, status: :created
        else
            render json: { message: 'Invalid Username or Password' }, status: :unauthorized
        end
    end

    #Once the token is created (above) 
    #save the token in local storage on the front end
    # send token with each fetch request made by user in the authorization header. 

    def auto_login
      @user = current_user
  
      if @user
        render json: @user
      else
        render json: {errors: @user.errors.full_messages}
      end
    end


    private
    def auth_params
        params.require(:user).permit(:username, :password)
    end

end
