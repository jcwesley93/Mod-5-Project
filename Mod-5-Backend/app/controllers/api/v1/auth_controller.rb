class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

    # This needs to send back the JSON Serialized user with the nested associations. See the show method on the user controller for examples.
    #For now, I will create a second post request using id of the particular list. What is a better way to do this? 
     
    def create 
        @user = User.find_by(username: auth_params[:username])
        if @user && @user.authenticate(auth_params[:password])
            token = encode_token({user_id: @user.id})
            render json: { user: UserSerializer.new(@user), jwt: token}, status: :created
        else
            render json: { message: 'Invalid Username or Password' }, status: :unauthorized
        end
    end

 



    private
    def auth_params
        params.require(:user).permit(:username, :password)
    end

end
